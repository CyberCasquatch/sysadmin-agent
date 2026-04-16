# Usage Guide

## Running the Agent

The agent is a self-contained HTML file that runs as a **Claude Artifact** inside Claude.ai.
It calls the Anthropic API directly from the browser using your authenticated session.

### Option A — Paste into Claude.ai (easiest)

1. Open [claude.ai](https://claude.ai) and start a new conversation
2. Type: *"Run this as an artifact"* and paste the entire contents of `agent/sysadmin-agent.html`
3. Claude will render it as an interactive app in the conversation

### Option B — Ask Claude to recreate it

Describe what you want and Claude will build it fresh:

> "Build me a sysadmin documentation agent with a sidebar for AD, DNS, DHCP, backups,
> patching, and incident response. It should generate runbooks, checklists, troubleshooting
> trees, and templates. Use a dark terminal aesthetic with green accents."

### Option C — Anthropic API (developers)

Use the HTML file as a frontend; replace the `fetch` call with your own API key:

```javascript
const response = await fetch('https://api.anthropic.com/v1/messages', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'YOUR_API_KEY',          // add your key here
    'anthropic-version': '2023-06-01'
  },
  body: JSON.stringify({ ... })
});
```

---

## Generating Documents

### Quick methods
- **Chips** — click any chip in the top row for a one-click pre-filled prompt
- **Sidebar topics** — click any domain (AD, DNS, etc.) to insert a starter prompt
- **Sidebar types** — click Runbook / Checklist / Troubleshoot / Template to prefix your input

### Free-form prompts
Type anything in the input box. Examples:

```
AD user lockout runbook with rollback steps
DNS resolution failure troubleshooting tree
Monthly Windows patching checklist
Post-incident review template for P1 outage
DHCP scope exhaustion emergency runbook
```

See `prompts/SAMPLE_PROMPTS.md` for 60+ curated prompts.

---

## Copying Output

Every generated document has a **copy** button in the top-right of its card.
Click it to copy the raw plain text to your clipboard, then paste into:

- Confluence / Notion / Wiki.js
- ServiceNow / Jira knowledge base
- A `.md` file in your runbooks Git repo
- A Word doc or PDF
- An email or Slack message

---

## Customising the System Prompt

Open `agent/sysadmin-agent.html` in VSCode and find:

```javascript
const SYSTEM_PROMPT = `...`;
```

Useful additions:

```
Our environment:
- Domain: acme.local (Windows Server 2022 DCs)
- Azure AD Connect sync every 30 minutes
- Backups: Veeam B&R 12
- Patching: WSUS + Intune for endpoints
- Ticketing: ServiceNow — format INC0000000
- All PowerShell examples: PS 7.x
- On-call rotation: follow PagerDuty escalation policy
```

---

## Increasing Output Length

The default `max_tokens` is set to `1000` — enough for most documents.
For longer, more detailed runbooks, change it in the fetch call:

```javascript
max_tokens: 2000,   // detailed runbooks
max_tokens: 4000,   // very long documents (checklist with 50+ steps, etc.)
```

---

## Keyboard Shortcuts

| Key | Action |
|---|---|
| `Enter` | Send message |
| `Shift+Enter` | New line in input |
