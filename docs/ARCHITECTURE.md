# Architecture

## Overview

The SysAdmin Agent is a single HTML file. There is no backend, no database, and no build step.

```
Browser (Claude.ai Artifact)
│
├── UI Layer (HTML + CSS + vanilla JS)
│   ├── Topbar — branding, status indicator
│   ├── Quick chips — one-click prompt insertion
│   ├── Sidebar — topic and document type navigation
│   ├── Chat thread — message history, thinking indicator
│   └── Doc output card — rendered document, copy button
│
└── API Layer
    └── POST https://api.anthropic.com/v1/messages
        ├── Model: claude-sonnet-4-20250514
        ├── System prompt: sysadmin documentation expert
        └── Response: structured plain-text document
```

## Data Flow

```
User types prompt
       │
       ▼
insertSample() / insertPromptType()  ← sidebar/chip shortcuts
       │
       ▼
sendMessage()
  │  appends user message to DOM
  │  shows thinking indicator
  │
  ▼
fetch('/v1/messages')
  │  model: claude-sonnet-4-20250514
  │  system: SYSTEM_PROMPT
  │  messages: [{ role: 'user', content: prompt }]
  │
  ▼
API response
  │  detectDocType() → 'runbook' | 'checklist' | 'tree' | 'template'
  │  renderDocContent() → syntax highlights headings, checks, warnings
  │
  ▼
appendMessage('bot', ...)
  └── doc-card rendered with copy button
```

## Key Design Decisions

**Single-turn, stateless** — each request is a fresh API call. No conversation history
is maintained. This keeps token usage minimal and outputs focused.

**No backend** — the Anthropic API is called directly from the browser using the
Claude.ai session credentials. No server to maintain, no API key to manage separately
when running as a Claude Artifact.

**Plain-text output** — the system prompt instructs the model to return plain text
with ASCII visual hierarchy (===, ---, ###, ✅, ⚠️). This makes output copy-paste
friendly for any destination (wiki, ticketing system, terminal).

**`max_tokens: 1000`** — a deliberate default to keep responses snappy. Increase to
2000–4000 for longer documents (see USAGE.md).

## File Structure

```
agent/sysadmin-agent.html   Single self-contained file:
                            - <style>  UI styles (CSS variables for theming)
                            - HTML     Layout structure
                            - <script> All JS logic + SYSTEM_PROMPT constant
```

## Extending

### Add a domain
In the sidebar HTML, add a `sidebar-item`:
```html
<div class="sidebar-item" onclick="insertSample('VMware snapshot cleanup runbook')">
  <span class="sidebar-icon">🖥️</span>VMware
</div>
```

### Add a document type
1. Add a new type to `detectDocType()`:
```javascript
if (low.includes('playbook')) return 'playbook';
```

2. Add a CSS badge class:
```css
.msg-type-badge.playbook { background: #aa00ff18; color: #aa00ff; }
```

### Persist documents across sessions
Use the Claude Artifact storage API:
```javascript
await window.storage.set('doc:' + Date.now(), JSON.stringify({
  title, content, type, createdAt: new Date().toISOString()
}));
```

### Multi-turn conversations
Replace the single-message array with a conversation history array:
```javascript
const history = [];
history.push({ role: 'user', content: prompt });
// after response:
history.push({ role: 'assistant', content: responseText });
// pass history to next API call
messages: history
```
