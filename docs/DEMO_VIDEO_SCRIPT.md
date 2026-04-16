# SysAdmin Agent — Demo Video Script

**Duration:** ~3 minutes  
**Format:** Screen recording with voiceover  
**Audience:** Sysadmins, IT managers, DevOps engineers

---

## INTRO (0:00–0:20)

**[Screen: Show a blank wiki page / empty document]**

> "You've just got paged at 2am. The DHCP server is down and you need to run through a scope exhaustion runbook — but there isn't one. Your wiki has a placeholder from 2019 that says 'TODO.'

> Here's how SysAdmin Agent solves that."

---

## DEMO 1: Quick Runbook (0:20–1:00)

**[Screen: Open the SysAdmin Agent artifact in Claude.ai]**

> "The agent lives right inside Claude.ai as an interactive app. Let's start with the most common request — a runbook."

**[Action: Click the "DHCP Scope" quick chip]**

> "I'll use the quick-chip to auto-fill a prompt for DHCP scope exhaustion."

**[Screen: Input fills with "DHCP scope exhaustion checklist"]**

> "Hit send."

**[Action: Click send, show thinking animation]**

> "In about ten seconds..."

**[Screen: Document appears in the output card]**

> "We get a complete, formatted runbook. It's got prerequisites, step-by-step commands with PowerShell code blocks, verification steps, rollback procedures, and a document control footer."

**[Action: Scroll through the document slowly]**

> "This took ten seconds. Writing this from scratch would have taken thirty minutes."

---

## DEMO 2: Troubleshooting Tree (1:00–1:35)

**[Action: Type "DNS resolution failure troubleshooting tree" in the input]**

> "Now let's try a troubleshooting tree — this is where the agent really shines for on-call scenarios."

**[Screen: Response shows structured IF/THEN/ELSE decision tree]**

> "Look at this — it's a branching decision tree. Start here, check the local resolver, if NXDOMAIN go to branch A, if timeout go to branch B. Each branch has the specific commands to run."

**[Action: Hover over the copy button]**

> "Copy this and paste it directly into ServiceNow, Confluence, or Notion."

---

## DEMO 3: Incident Response Template (1:35–2:10)

**[Action: Click the "Incident Response" sidebar item]**

> "The sidebar lets you jump to topics directly. Let's pull a P1 incident response template."

**[Action: Input fills, hit send]**

**[Screen: Incident response document with severity matrix, communication templates, escalation paths]**

> "This follows ITIL conventions — severity classification, stakeholder communication cadence, war room checklist, evidence preservation steps, and a post-mortem placeholder."

> "If you've ever scrambled to figure out who to call at minute 15 of a P1, this is what you wished you already had."

---

## DEMO 4: Customization (2:10–2:35)

**[Action: Type a custom prompt]**

```
AD user lockout runbook for our environment: Windows Server 2022,
acme.local forest, Azure AD Connect sync, tickets in ServiceNow INC#######
```

**[Screen: Response tailored with specific environment details]**

> "You can inject your environment context directly into the prompt — server versions, domain names, ticketing systems, tool names. The output adapts."

---

## CLOSING (2:35–3:00)

**[Screen: Show the three output examples side by side]**

> "The SysAdmin Agent isn't a template library — it generates fresh, context-aware documentation on demand. Runbooks for things that don't happen often enough to memorize. Checklists you actually want to follow. Troubleshooting trees for the 3am calls."

> "You own the output. Copy it, edit it, commit it to git. No lock-in."

**[Screen: Show the README]**

> "Check the README for the full prompt library, customization guide, and how to extend the agent with your own domains and document types."

---

## B-ROLL SUGGESTIONS

- Screen recording: type a prompt, watch it generate, copy the output
- Screen recording: click through the sidebar categories
- Screen recording: paste output into Confluence or a wiki
- Screen recording: side-by-side of blank doc vs. generated doc

## VOICEOVER NOTES

- Keep tone: practical, no-fluff, fellow sysadmin
- Avoid: "revolutionary," "game-changing," "AI-powered magic"
- Emphasize: speed, accuracy, copy-paste ready, your output to own/edit
- Sound like: "here's a tool that makes your job less painful"
