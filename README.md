# SysAdmin Documentation Agent

> AI-powered infrastructure documentation generator. Runbooks, checklists, troubleshooting trees, and templates — on demand.

Built with [Claude](https://claude.ai) by Anthropic. Runs as an interactive Artifact inside Claude.ai — no server, no database, no setup.

---

## What It Does

Describe what you need in plain English. Get a structured, production-ready document in seconds.

**Document types:**
- **Runbooks** — step-by-step procedures with prerequisites, commands, rollback, and verification
- **Checklists** — ordered task lists with pass/fail criteria
- **Troubleshooting Trees** — IF/THEN/ELSE decision logic for diagnosing failures
- **Templates** — blank-fill frameworks for incidents, change requests, handoffs

**Domains covered:**

| Domain | Examples |
|---|---|
| Active Directory | User lockout, password reset, GPO rollout, OU restructure |
| DNS | Resolution failures, zone delegation, record propagation |
| DHCP | Scope exhaustion, lease audit, failover config |
| Backups | Verification, restoration, retention review |
| Patching | Patch Tuesday, emergency CVE, rollback procedure |
| Incident Response | P1/P2 triage, post-mortem, escalation tree |

---

## Quick Start

1. Open [Claude.ai](https://claude.ai)
2. Start a new conversation
3. Paste the contents of `agent/sysadmin-agent.html` as an Artifact prompt, **or** simply describe the agent to Claude and paste the code when asked
4. Use the sidebar, quick-chips, or type your own request

See `docs/USAGE.md` for detailed instructions.

---

## Project Structure

```
sysadmin-agent/
├── README.md                  ← you are here
├── agent/
│   └── sysadmin-agent.html    ← the full agent (Claude Artifact source)
├── docs/
│   ├── USAGE.md               ← how to use and customise the agent
│   ├── ARCHITECTURE.md        ← technical design notes
│   └── DEMO_VIDEO_SCRIPT.md   ← ~3 min screencast script
├── prompts/
│   ├── SAMPLE_PROMPTS.md      ← 60+ ready-to-use prompts
│   └── SYSTEM_PROMPT.md       ← the agent's system prompt, standalone
└── .gitignore
```

---

## Customising

The agent's behaviour is controlled by the `SYSTEM_PROMPT` constant inside `agent/sysadmin-agent.html`. Open that file in any editor and find:

```javascript
const SYSTEM_PROMPT = `...`;
```

Add your environment context:

```
Our environment: Windows Server 2022, AD forest acme.local,
Azure AD Connect sync every 30 min, Veeam B&R for backups,
WSUS for patching. Tickets in ServiceNow format INC0000000.
All PowerShell examples should target PS 7.
```

---

## Contributing

PRs welcome. Good first contributions:
- New domain coverage (VMware, Azure, Kubernetes)
- Additional sample prompts
- Persistent document history via Artifact storage API
- Export to PDF or DOCX

---

## License

MIT
