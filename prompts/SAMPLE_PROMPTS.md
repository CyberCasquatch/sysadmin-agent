# SysAdmin Agent — Sample Prompts

A curated prompt library. Copy any prompt directly into the agent.

---

## 🔷 Active Directory

### Runbooks
```
AD user account lockout investigation and unlock runbook with event log queries
New OU structure deployment runbook with GPO inheritance planning
Active Directory forest trust establishment runbook
AD Connect sync troubleshooting and repair runbook
Stale computer account cleanup runbook with audit trail
Domain controller promotion runbook for Windows Server 2022
AD password policy migration from fine-grained PSO runbook
```

### Checklists
```
New AD domain user provisioning checklist including group memberships and mailbox
Quarterly AD privileged account audit checklist
Pre-migration AD health check checklist
AD site and services review checklist
Service account password rotation checklist
```

### Troubleshooting Trees
```
AD login failure decision tree covering bad password, locked, disabled, and Kerberos errors
Group Policy not applying troubleshooting tree
AD replication failure diagnosis tree with repadmin commands
"Trust relationship with domain failed" error decision tree
Kerberos pre-authentication failure troubleshooting tree
```

---

## 🌐 DNS

### Runbooks
```
DNS zone delegation runbook for subdomain handoff
Internal DNS record migration runbook
DNS server failover and recovery runbook
Split-brain DNS configuration runbook for internal/external resolution
Conditional forwarder setup runbook for merger integration
```

### Checklists
```
DNS health check checklist with nslookup and dig commands
Post-migration DNS validation checklist
DNS record audit checklist for stale entries
New DNS zone deployment checklist
```

### Troubleshooting Trees
```
DNS name resolution failure troubleshooting tree with Windows and Linux commands
DNS propagation delay decision tree
Reverse DNS lookup failure diagnosis tree
NXDOMAIN error investigation decision tree
DNS cache poisoning detection and response tree
```

---

## 📡 DHCP

### Runbooks
```
DHCP scope exhaustion emergency remediation runbook
DHCP failover pair configuration runbook for Windows Server
DHCP scope migration to new subnet runbook
DHCP lease audit and cleanup runbook
DHCP logging and monitoring setup runbook
```

### Checklists
```
DHCP scope exhaustion remediation checklist
New DHCP scope deployment checklist
DHCP server migration pre/post checklist
Weekly DHCP health check checklist
DHCP reservation audit checklist
```

### Troubleshooting Trees
```
DHCP lease assignment failure troubleshooting tree
"Unable to obtain IP address" client-side decision tree
DHCP scope exhaustion diagnosis tree with remediation branches
DHCP failover synchronization failure tree
IP address conflict investigation and resolution tree
```

---

## 💾 Backups

### Runbooks
```
Veeam backup job failure investigation and repair runbook
Bare metal recovery runbook for Windows Server 2022
SQL Server database backup and point-in-time restore runbook
Backup tape rotation and offsite shipment runbook
Cloud backup (Azure Backup) onboarding runbook
Backup retention policy review and cleanup runbook
```

### Checklists
```
Daily backup verification checklist with success criteria
Monthly backup restoration test checklist
Backup agent health check checklist
DR backup site validation checklist
Pre-decommission backup checklist for server retirement
```

### Troubleshooting Trees
```
Backup job failure troubleshooting tree for Veeam
Slow backup performance diagnosis tree
Backup agent connection failure decision tree
Repository space exhaustion troubleshooting tree
Restore failure investigation tree with checkpoint branches
```

---

## 🩹 Patching

### Runbooks
```
Patch Tuesday Windows Server patching runbook with maintenance window and rollback
Emergency zero-day CVE patching runbook with change freeze override
Linux server patching runbook with yum/apt and service restart sequencing
Third-party application patching runbook (Java, Chrome, Adobe)
WSUS approval and deployment runbook for staged ring patching
Post-patching validation runbook with health checks and reboot sequencing
```

### Checklists
```
Pre-patch maintenance window checklist
Post-patching server health check checklist
Patch rollback decision checklist
Monthly patch compliance reporting checklist
Patch dependency review checklist before deployment
```

### Troubleshooting Trees
```
Windows Update failure troubleshooting tree with error codes (0x80070002, 0x8024a105, etc.)
WSUS client not reporting decision tree
Patch-induced application failure diagnosis tree
Post-patch reboot loop investigation tree
Linux kernel update failure troubleshooting tree
```

---

## 🚨 Incident Response

### Runbooks
```
P1 major outage incident response runbook following ITIL
Ransomware detection and initial response runbook
Data breach incident response runbook with notification timeline
DDoS response runbook with ISP escalation steps
Unplanned datacenter outage response runbook
Credential compromise response runbook with AD lockdown steps
```

### Templates
```
Post-incident review (post-mortem) template with 5-why analysis
Major incident communication template for stakeholder updates
Incident severity classification matrix template
On-call escalation contact tree template
Security incident evidence collection checklist template
Change request documentation template for emergency changes
War room meeting agenda template for active P1 incidents
```

### Troubleshooting Trees
```
Service unavailable initial triage decision tree
Performance degradation investigation tree
Security alert investigation decision tree
Database connection failure incident tree
Certificate expiry incident response tree
```

---

## 🖥️ General Infrastructure

### Runbooks
```
Server decommission runbook with AD, DNS, backup, and monitoring cleanup
New server build and baseline configuration runbook
SSL/TLS certificate renewal runbook for IIS and Apache
Storage volume expansion runbook for Windows and Linux
Firewall rule change runbook with pre/post validation
Network switch replacement runbook with config backup
```

### Templates
```
IT infrastructure change request template
Vendor escalation and support case template
Capacity planning quarterly review template
IT asset retirement sign-off template
New service onboarding documentation template
SLA breach notification template
```

---

## 🔧 Advanced Prompt Patterns

### Scope with environment context
```
Windows Server 2022 AD runbook for a 500-user single-site environment using Exchange Online
```

### Request specific output format
```
Create a markdown-formatted DHCP checklist compatible with Confluence wiki
```

### Ask for PowerShell-heavy output
```
DNS troubleshooting tree that uses PowerShell commands at each decision branch
```

### Request ITIL alignment
```
P1 incident response runbook that follows ITIL v4 major incident management process
```

### Ask for role-specific output
```
Server patching runbook written for a junior sysadmin with minimal experience
```
