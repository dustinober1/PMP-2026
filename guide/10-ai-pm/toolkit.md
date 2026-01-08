<script setup>
import ConceptGrid from '../../.vitepress/theme/components/ConceptGrid.vue'
import ConceptCard from '../../.vitepress/theme/components/ConceptCard.vue'
import FlashcardCarousel from '../../.vitepress/theme/components/FlashcardCarousel.vue'
</script>

# 10.4 AI PM Toolkit (One-Stop Reference)

Use this page as a copy/paste toolkit for **safe, effective AI usage** in project management. It’s designed to match how the PMP exam phrases scenarios (“what should you do FIRST?”).

::: warning  Safety first
Never paste confidential information, PII, or client data into unapproved/public AI tools. Use sanitized inputs and follow your organization’s policy.
:::

---

## 📋 AI Working Agreement (AI Charter) Template

Add this as an appendix to your **Team Charter / Working Agreement**.

<ConceptCard title="🤖 AI Working Agreement Template">
<div style="display: grid; gap: 12px;">
  <div style="background: linear-gradient(135deg, #667eea15, #764ba215); padding: 16px; border-radius: 12px; border-left: 4px solid #667eea;">
    <strong style="color: #667eea;">📌 Purpose</strong>
    <div style="font-size: 0.9em; color: #666; margin-top: 4px;">What to decide: Why the team uses AI</div>
    <div style="background: #f8f9fa; padding: 10px; border-radius: 8px; margin-top: 8px; font-style: italic;">"AI may be used to draft, summarize, and analyze project artifacts to reduce admin time."</div>
  </div>
  <div style="background: linear-gradient(135deg, #11998e15, #38ef7d15); padding: 16px; border-radius: 12px; border-left: 4px solid #11998e;">
    <strong style="color: #11998e;">✅ Approved Tools</strong>
    <div style="font-size: 0.9em; color: #666; margin-top: 4px;">What to decide: Which tools are allowed</div>
    <div style="background: #f8f9fa; padding: 10px; border-radius: 8px; margin-top: 8px; font-style: italic;">"Only enterprise-approved tools with zero-retention are allowed (Tool A, Tool B)."</div>
  </div>
  <div style="background: linear-gradient(135deg, #f5317515, #ff6b6b15); padding: 16px; border-radius: 12px; border-left: 4px solid #f53175;">
    <strong style="color: #f53175;">🚫 Data Rules</strong>
    <div style="font-size: 0.9em; color: #666; margin-top: 4px;">What to decide: What data is prohibited</div>
    <div style="background: #f8f9fa; padding: 10px; border-radius: 8px; margin-top: 8px; font-style: italic;">"No PII, credentials, client names, financials, or proprietary IP in prompts unless explicitly approved."</div>
  </div>
  <div style="background: linear-gradient(135deg, #f7971e15, #ffd20015); padding: 16px; border-radius: 12px; border-left: 4px solid #f7971e;">
    <strong style="color: #f7971e;">📢 Disclosure</strong>
    <div style="font-size: 0.9em; color: #666; margin-top: 4px;">What to decide: When AI use must be disclosed</div>
    <div style="background: #f8f9fa; padding: 10px; border-radius: 8px; margin-top: 8px; font-style: italic;">"AI-assisted content must be labeled for external stakeholders and for audit-controlled artifacts."</div>
  </div>
  <div style="background: linear-gradient(135deg, #4facfe15, #00f2fe15); padding: 16px; border-radius: 12px; border-left: 4px solid #4facfe;">
    <strong style="color: #4facfe;">👤 Human Review (HITL)</strong>
    <div style="font-size: 0.9em; color: #666; margin-top: 4px;">What to decide: What must be reviewed and by whom</div>
    <div style="background: #f8f9fa; padding: 10px; border-radius: 8px; margin-top: 8px; font-style: italic;">"A human owner reviews for accuracy, tone, and compliance before content is shared externally."</div>
  </div>
  <div style="background: linear-gradient(135deg, #a855f715, #ec489915); padding: 16px; border-radius: 12px; border-left: 4px solid #a855f7;">
    <strong style="color: #a855f7;">⭐ Quality Bar</strong>
    <div style="font-size: 0.9em; color: #666; margin-top: 4px;">What to decide: What "good" looks like</div>
    <div style="background: #f8f9fa; padding: 10px; border-radius: 8px; margin-top: 8px; font-style: italic;">"Outputs must match current baselines, policies, and acceptance criteria; unknowns must be flagged."</div>
  </div>
  <div style="background: linear-gradient(135deg, #6366f115, #8b5cf615); padding: 16px; border-radius: 12px; border-left: 4px solid #6366f1;">
    <strong style="color: #6366f1;">📝 Audit Trail</strong>
    <div style="font-size: 0.9em; color: #666; margin-top: 4px;">What to decide: What must be logged</div>
    <div style="background: #f8f9fa; padding: 10px; border-radius: 8px; margin-top: 8px; font-style: italic;">"For regulated work: keep prompts/outputs in the project repository with version history."</div>
  </div>
  <div style="background: linear-gradient(135deg, #ef444415, #dc262615); padding: 16px; border-radius: 12px; border-left: 4px solid #ef4444;">
    <strong style="color: #ef4444;">⛔ Prohibited Uses</strong>
    <div style="font-size: 0.9em; color: #666; margin-top: 4px;">What to decide: What is never allowed</div>
    <div style="background: #f8f9fa; padding: 10px; border-radius: 8px; margin-top: 8px; font-style: italic;">"No auto-sending emails; no autonomous changes to scope/schedule/cost; no HR decisions."</div>
  </div>
  <div style="background: linear-gradient(135deg, #f9731615, #f5af1915); padding: 16px; border-radius: 12px; border-left: 4px solid #f97316;">
    <strong style="color: #f97316;">🚨 Escalation</strong>
    <div style="font-size: 0.9em; color: #666; margin-top: 4px;">What to decide: What to do when issues occur</div>
    <div style="background: #f8f9fa; padding: 10px; border-radius: 8px; margin-top: 8px; font-style: italic;">"If data exposure is suspected, stop usage and notify IT/Security immediately."</div>
  </div>
</div>
</ConceptCard>

---

## 🔒 Data Redaction Checklist (Before You Prompt)

<ConceptCard title="✂️ Sanitize Your Inputs">
<div style="display: grid; gap: 10px;">
  <div style="display: flex; align-items: center; gap: 10px; padding: 10px; background: linear-gradient(135deg, #fee2e2, #fecaca); border-radius: 8px;">
    <span style="font-size: 1.2em;">🚫</span>
    <span><strong>Remove PII</strong> – names, emails, phone numbers, addresses, IDs</span>
  </div>
  <div style="display: flex; align-items: center; gap: 10px; padding: 10px; background: linear-gradient(135deg, #fee2e2, #fecaca); border-radius: 8px;">
    <span style="font-size: 1.2em;">🔑</span>
    <span><strong>Remove credentials</strong> – passwords, tokens, API keys</span>
  </div>
  <div style="display: flex; align-items: center; gap: 10px; padding: 10px; background: linear-gradient(135deg, #fef3c7, #fde68a); border-radius: 8px;">
    <span style="font-size: 1.2em;">🏢</span>
    <span><strong>Remove client/vendor identifiers</strong> if not approved</span>
  </div>
  <div style="display: flex; align-items: center; gap: 10px; padding: 10px; background: linear-gradient(135deg, #fef3c7, #fde68a); border-radius: 8px;">
    <span style="font-size: 1.2em;">💰</span>
    <span><strong>Remove financial specifics</strong> – account numbers, detailed pricing</span>
  </div>
  <div style="display: flex; align-items: center; gap: 10px; padding: 10px; background: linear-gradient(135deg, #fef3c7, #fde68a); border-radius: 8px;">
    <span style="font-size: 1.2em;">🔐</span>
    <span><strong>Remove proprietary IP</strong> – source code, designs, strategy docs</span>
  </div>
  <div style="display: flex; align-items: center; gap: 10px; padding: 10px; background: linear-gradient(135deg, #d1fae5, #a7f3d0); border-radius: 8px;">
    <span style="font-size: 1.2em;">🔄</span>
    <span><strong>Replace with placeholders:</strong> <code>[CLIENT]</code>, <code>[ROLE]</code>, <code>[SYSTEM]</code>, <code>[BUDGET_RANGE]</code></span>
  </div>
  <div style="display: flex; align-items: center; gap: 10px; padding: 10px; background: linear-gradient(135deg, #dbeafe, #bfdbfe); border-radius: 8px;">
    <span style="font-size: 1.2em;">📉</span>
    <span><strong>Data minimization:</strong> Provide constraints, not secrets</span>
  </div>
</div>
</ConceptCard>

::: tip 💡 PMP Exam Pattern
If a scenario mentions "public/free AI tool" + "confidential data", the correct answer starts with **contain → comply → prevent recurrence**.
:::

---

## 📝 Prompt Template (Copy/Paste)

Use this to get consistent, auditable outputs:

<ConceptCard title="🎯 Standard PM Prompt Template">
<div style="background: linear-gradient(135deg, #1e293b, #334155); color: #e2e8f0; padding: 20px; border-radius: 12px; font-family: 'Fira Code', monospace; font-size: 0.9em;">
  <div style="color: #60a5fa; font-weight: bold;">Role:</div>
  <div style="margin-left: 16px; margin-bottom: 12px;">Act as a PMP-certified project manager.</div>
  
  <div style="color: #60a5fa; font-weight: bold;">Goal:</div>
  <div style="margin-left: 16px; margin-bottom: 12px; color: #fbbf24;">[What you are trying to produce]</div>
  
  <div style="color: #60a5fa; font-weight: bold;">Context (sanitized):</div>
  <div style="margin-left: 16px; margin-bottom: 12px;">
    <div>• Project type: <span style="color: #fbbf24;">[domain]</span></div>
    <div>• Delivery approach: <span style="color: #fbbf24;">[predictive/agile/hybrid]</span></div>
    <div>• Constraints: <span style="color: #fbbf24;">[time/cost/scope/quality/resources]</span></div>
    <div>• Stakeholders: <span style="color: #fbbf24;">[roles only, no names]</span></div>
  </div>
  
  <div style="color: #60a5fa; font-weight: bold;">Inputs:</div>
  <div style="margin-left: 16px; margin-bottom: 12px; color: #fbbf24;">[Paste sanitized notes/transcript/metrics]</div>
  
  <div style="color: #60a5fa; font-weight: bold;">Task:</div>
  <div style="margin-left: 16px; margin-bottom: 12px;">
    <div>1) Produce: <span style="color: #fbbf24;">[artifact]</span></div>
    <div>2) Include: <span style="color: #fbbf24;">[required sections]</span></div>
    <div>3) Flag: assumptions, missing information, risks, and open questions</div>
  </div>
  
  <div style="color: #60a5fa; font-weight: bold;">Constraints:</div>
  <div style="margin-left: 16px; margin-bottom: 12px;">
    <div>• Do not invent facts or stakeholders.</div>
    <div>• If information is missing, ask clarifying questions first.</div>
    <div>• Use concise bullets; keep to one page unless requested.</div>
  </div>
  
  <div style="color: #60a5fa; font-weight: bold;">Output format:</div>
  <div style="margin-left: 16px;">Markdown with headings and tables where useful</div>
</div>
</ConceptCard>

---

## ✅ HITL Review Checklist (Before Sharing AI Output)

<ConceptCard title="👤 Human-in-the-Loop Checklist">
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px;">
  <div style="display: flex; align-items: flex-start; gap: 12px; padding: 14px; background: linear-gradient(135deg, #ecfdf5, #d1fae5); border-radius: 10px;">
    <span style="font-size: 1.4em;">🎯</span>
    <div>
      <strong style="color: #059669;">Accuracy</strong>
      <div style="font-size: 0.9em; color: #666; margin-top: 4px;">Verify facts, dates, numbers, names, and terminology</div>
    </div>
  </div>
  <div style="display: flex; align-items: flex-start; gap: 12px; padding: 14px; background: linear-gradient(135deg, #eff6ff, #dbeafe); border-radius: 10px;">
    <span style="font-size: 1.4em;">📋</span>
    <div>
      <strong style="color: #2563eb;">Completeness</strong>
      <div style="font-size: 0.9em; color: #666; margin-top: 4px;">Confirm required sections/artifacts are present</div>
    </div>
  </div>
  <div style="display: flex; align-items: flex-start; gap: 12px; padding: 14px; background: linear-gradient(135deg, #fef3c7, #fde68a); border-radius: 10px;">
    <span style="font-size: 1.4em;">🧭</span>
    <div>
      <strong style="color: #d97706;">Alignment</strong>
      <div style="font-size: 0.9em; color: #666; margin-top: 4px;">Check against charter, baselines, and current decisions</div>
    </div>
  </div>
  <div style="display: flex; align-items: flex-start; gap: 12px; padding: 14px; background: linear-gradient(135deg, #fce7f3, #fbcfe8); border-radius: 10px;">
    <span style="font-size: 1.4em;">🔒</span>
    <div>
      <strong style="color: #db2777;">Compliance</strong>
      <div style="font-size: 0.9em; color: #666; margin-top: 4px;">Confirm data privacy, security policy, and regulatory needs</div>
    </div>
  </div>
  <div style="display: flex; align-items: flex-start; gap: 12px; padding: 14px; background: linear-gradient(135deg, #f3e8ff, #e9d5ff); border-radius: 10px;">
    <span style="font-size: 1.4em;">💬</span>
    <div>
      <strong style="color: #9333ea;">Tone</strong>
      <div style="font-size: 0.9em; color: #666; margin-top: 4px;">Ensure stakeholder-appropriate language and EI</div>
    </div>
  </div>
  <div style="display: flex; align-items: flex-start; gap: 12px; padding: 14px; background: linear-gradient(135deg, #f1f5f9, #e2e8f0); border-radius: 10px;">
    <span style="font-size: 1.4em;">📍</span>
    <div>
      <strong style="color: #475569;">Traceability</strong>
      <div style="font-size: 0.9em; color: #666; margin-top: 4px;">Record inputs used and where final version is stored</div>
    </div>
  </div>
</div>
</ConceptCard>

---

## ⚠️ AI Risk Register Add-On (Common Risks)

Use these as starter risk statements (cause → event → impact) and tailor.

<ConceptCard title="🎲 Common AI Risk Statements">
<div style="display: grid; gap: 12px;">
  <div style="background: linear-gradient(135deg, #fef2f2, #fee2e2); padding: 16px; border-radius: 12px; border-left: 4px solid #ef4444;">
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <strong style="color: #dc2626;">🔓 Data Leakage</strong>
      <span style="background: #dc2626; color: white; padding: 4px 10px; border-radius: 20px; font-size: 0.75em; font-weight: 600;">Avoid/Mitigate</span>
    </div>
    <div style="margin-top: 8px; font-size: 0.9em;">Because a team member uses an unapproved public AI tool, confidential data could be exposed, causing legal/compliance impact.</div>
    <div style="margin-top: 8px; font-size: 0.85em; color: #666;">Response: Policy, tooling controls, training</div>
  </div>
  <div style="background: linear-gradient(135deg, #fffbeb, #fef3c7); padding: 16px; border-radius: 12px; border-left: 4px solid #f59e0b;">
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <strong style="color: #d97706;">🌀 Hallucination</strong>
      <span style="background: #f59e0b; color: white; padding: 4px 10px; border-radius: 20px; font-size: 0.75em; font-weight: 600;">Mitigate</span>
    </div>
    <div style="margin-top: 8px; font-size: 0.9em;">Because GenAI can invent details, incorrect requirements could enter the baseline and create rework.</div>
    <div style="margin-top: 8px; font-size: 0.85em; color: #666;">Response: HITL review, grounding, approvals</div>
  </div>
  <div style="background: linear-gradient(135deg, #fdf4ff, #fae8ff); padding: 16px; border-radius: 12px; border-left: 4px solid #a855f7;">
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <strong style="color: #9333ea;">⚖️ Bias</strong>
      <span style="background: #a855f7; color: white; padding: 4px 10px; border-radius: 20px; font-size: 0.75em; font-weight: 600;">Mitigate</span>
    </div>
    <div style="margin-top: 8px; font-size: 0.9em;">Because training data reflects historical bias, recommendations could disadvantage stakeholder groups and harm trust.</div>
    <div style="margin-top: 8px; font-size: 0.85em; color: #666;">Response: Audits, diverse review, fairness checks</div>
  </div>
  <div style="background: linear-gradient(135deg, #eff6ff, #dbeafe); padding: 16px; border-radius: 12px; border-left: 4px solid #3b82f6;">
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <strong style="color: #2563eb;">🔄 Over-reliance</strong>
      <span style="background: #3b82f6; color: white; padding: 4px 10px; border-radius: 20px; font-size: 0.75em; font-weight: 600;">Mitigate</span>
    </div>
    <div style="margin-top: 8px; font-size: 0.9em;">Because the team treats AI output as "truth," poor decisions could be made without validation.</div>
    <div style="margin-top: 8px; font-size: 0.85em; color: #666;">Response: HITL, SME reviews, decision logs</div>
  </div>
  <div style="background: linear-gradient(135deg, #fef2f2, #fee2e2); padding: 16px; border-radius: 12px; border-left: 4px solid #ef4444;">
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <strong style="color: #dc2626;">💉 Prompt Injection</strong>
      <span style="background: #ef4444; color: white; padding: 4px 10px; border-radius: 20px; font-size: 0.75em; font-weight: 600;">Mitigate</span>
    </div>
    <div style="margin-top: 8px; font-size: 0.9em;">Because the AI tool consumes untrusted content, malicious instructions could cause disclosure or unsafe actions.</div>
    <div style="margin-top: 8px; font-size: 0.85em; color: #666;">Response: Content controls, least privilege, validation</div>
  </div>
  <div style="background: linear-gradient(135deg, #f0fdf4, #dcfce7); padding: 16px; border-radius: 12px; border-left: 4px solid #22c55e;">
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <strong style="color: #16a34a;">📋 Regulatory Noncompliance</strong>
      <span style="background: #22c55e; color: white; padding: 4px 10px; border-radius: 20px; font-size: 0.75em; font-weight: 600;">Avoid/Mitigate</span>
    </div>
    <div style="margin-top: 8px; font-size: 0.9em;">Because the model is a black box, decisions may not be explainable for audits.</div>
    <div style="margin-top: 8px; font-size: 0.85em; color: #666;">Response: XAI, audit logs, governance</div>
  </div>
  <div style="background: linear-gradient(135deg, #f1f5f9, #e2e8f0); padding: 16px; border-radius: 12px; border-left: 4px solid #64748b;">
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <strong style="color: #475569;">🔌 Vendor Availability</strong>
      <span style="background: #64748b; color: white; padding: 4px 10px; border-radius: 20px; font-size: 0.75em; font-weight: 600;">Mitigate/Transfer</span>
    </div>
    <div style="margin-top: 8px; font-size: 0.9em;">Because the AI vendor service is unavailable, key workflows could stall.</div>
    <div style="margin-top: 8px; font-size: 0.85em; color: #666;">Response: SLA, backups, manual fallback</div>
  </div>
  <div style="background: linear-gradient(135deg, #fef3c7, #fde68a); padding: 16px; border-radius: 12px; border-left: 4px solid #eab308;">
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <strong style="color: #ca8a04;">🔗 Vendor Lock-in</strong>
      <span style="background: #eab308; color: white; padding: 4px 10px; border-radius: 20px; font-size: 0.75em; font-weight: 600;">Mitigate</span>
    </div>
    <div style="margin-top: 8px; font-size: 0.9em;">Because prompts/workflows are proprietary, switching tools becomes costly.</div>
    <div style="margin-top: 8px; font-size: 0.85em; color: #666;">Response: Portability plan, export formats</div>
  </div>
</div>
</ConceptCard>

---

## 🔍 AI Tool / Vendor Due Diligence Checklist

Use this when selecting or approving AI tools.

<ConceptCard title="📋 Vendor Evaluation Criteria">
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px;">
  <div style="display: flex; gap: 10px; padding: 12px; background: linear-gradient(135deg, #fce7f3, #fbcfe8); border-radius: 10px;">
    <span style="font-size: 1.3em;">💾</span>
    <div><strong>Data retention</strong><div style="font-size: 0.85em; color: #666;">Are prompts/outputs stored? For how long?</div></div>
  </div>
  <div style="display: flex; gap: 10px; padding: 12px; background: linear-gradient(135deg, #fef3c7, #fde68a); border-radius: 10px;">
    <span style="font-size: 1.3em;">🎓</span>
    <div><strong>Training use</strong><div style="font-size: 0.85em; color: #666;">Is your data used to train models? Can you opt out?</div></div>
  </div>
  <div style="display: flex; gap: 10px; padding: 12px; background: linear-gradient(135deg, #dbeafe, #bfdbfe); border-radius: 10px;">
    <span style="font-size: 1.3em;">🌍</span>
    <div><strong>Data residency</strong><div style="font-size: 0.85em; color: #666;">Where is data processed/stored (country/region)?</div></div>
  </div>
  <div style="display: flex; gap: 10px; padding: 12px; background: linear-gradient(135deg, #fee2e2, #fecaca); border-radius: 10px;">
    <span style="font-size: 1.3em;">🔐</span>
    <div><strong>Security</strong><div style="font-size: 0.85em; color: #666;">SSO, MFA, encryption, SOC2/ISO27001</div></div>
  </div>
  <div style="display: flex; gap: 10px; padding: 12px; background: linear-gradient(135deg, #f3e8ff, #e9d5ff); border-radius: 10px;">
    <span style="font-size: 1.3em;">👥</span>
    <div><strong>Access control</strong><div style="font-size: 0.85em; color: #666;">Role-based access, admin controls, audit logs</div></div>
  </div>
  <div style="display: flex; gap: 10px; padding: 12px; background: linear-gradient(135deg, #dcfce7, #bbf7d0); border-radius: 10px;">
    <span style="font-size: 1.3em;">⚖️</span>
    <div><strong>Compliance</strong><div style="font-size: 0.85em; color: #666;">Industry/regional regulations</div></div>
  </div>
  <div style="display: flex; gap: 10px; padding: 12px; background: linear-gradient(135deg, #cffafe, #a5f3fc); border-radius: 10px;">
    <span style="font-size: 1.3em;">🔍</span>
    <div><strong>Explainability</strong><div style="font-size: 0.85em; color: #666;">Can you explain "why" for decisions?</div></div>
  </div>
  <div style="display: flex; gap: 10px; padding: 12px; background: linear-gradient(135deg, #e0e7ff, #c7d2fe); border-radius: 10px;">
    <span style="font-size: 1.3em;">⏱️</span>
    <div><strong>Reliability</strong><div style="font-size: 0.85em; color: #666;">SLA, uptime history, incident response</div></div>
  </div>
  <div style="display: flex; gap: 10px; padding: 12px; background: linear-gradient(135deg, #fef9c3, #fef08a); border-radius: 10px;">
    <span style="font-size: 1.3em;">🔗</span>
    <div><strong>Integration</strong><div style="font-size: 0.85em; color: #666;">Works with existing tools (docs, tickets, storage)</div></div>
  </div>
  <div style="display: flex; gap: 10px; padding: 12px; background: linear-gradient(135deg, #f1f5f9, #e2e8f0); border-radius: 10px;">
    <span style="font-size: 1.3em;">📤</span>
    <div><strong>Portability</strong><div style="font-size: 0.85em; color: #666;">Export prompts/outputs; avoid lock-in</div></div>
  </div>
</div>
</ConceptCard>

---

## 🚀 Pilot-to-Production Implementation Checklist

Use this to introduce AI without chaos.

<ConceptCard title="📈 AI Adoption 7-Step Roadmap">
<div style="display: grid; gap: 12px;">
  <div style="display: flex; align-items: center; gap: 16px; padding: 16px; background: linear-gradient(135deg, #ecfdf5, #d1fae5); border-radius: 12px;">
    <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #10b981, #059669); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">1</div>
    <div>
      <strong>Pick a low-risk, high-value use case</strong>
      <div style="font-size: 0.85em; color: #666;">Meeting summaries, draft status reports</div>
    </div>
  </div>
  <div style="display: flex; align-items: center; gap: 16px; padding: 16px; background: linear-gradient(135deg, #eff6ff, #dbeafe); border-radius: 12px;">
    <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #3b82f6, #2563eb); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">2</div>
    <div>
      <strong>Confirm policy and approvals</strong>
      <div style="font-size: 0.85em; color: #666;">IT/Security/Legal as needed</div>
    </div>
  </div>
  <div style="display: flex; align-items: center; gap: 16px; padding: 16px; background: linear-gradient(135deg, #fef3c7, #fde68a); border-radius: 12px;">
    <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #f59e0b, #d97706); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">3</div>
    <div>
      <strong>Define success metrics</strong>
      <div style="font-size: 0.85em; color: #666;">Time saved, rework reduction, stakeholder satisfaction</div>
    </div>
  </div>
  <div style="display: flex; align-items: center; gap: 16px; padding: 16px; background: linear-gradient(135deg, #f3e8ff, #e9d5ff); border-radius: 12px;">
    <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #a855f7, #9333ea); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">4</div>
    <div>
      <strong>Train the team</strong>
      <div style="font-size: 0.85em; color: #666;">Redaction + HITL + disclosure expectations</div>
    </div>
  </div>
  <div style="display: flex; align-items: center; gap: 16px; padding: 16px; background: linear-gradient(135deg, #fce7f3, #fbcfe8); border-radius: 12px;">
    <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #ec4899, #db2777); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">5</div>
    <div>
      <strong>Run a pilot</strong>
      <div style="font-size: 0.85em; color: #666;">Small scope, tight review, clear owners</div>
    </div>
  </div>
  <div style="display: flex; align-items: center; gap: 16px; padding: 16px; background: linear-gradient(135deg, #cffafe, #a5f3fc); border-radius: 12px;">
    <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #06b6d4, #0891b2); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">6</div>
    <div>
      <strong>Inspect and adapt</strong>
      <div style="font-size: 0.85em; color: #666;">Update prompts, checklists, and governance</div>
    </div>
  </div>
  <div style="display: flex; align-items: center; gap: 16px; padding: 16px; background: linear-gradient(135deg, #e0e7ff, #c7d2fe); border-radius: 12px;">
    <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #6366f1, #4f46e5); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">7</div>
    <div>
      <strong>Scale carefully</strong>
      <div style="font-size: 0.85em; color: #666;">Increase scope; keep auditability where required</div>
    </div>
  </div>
</div>
</ConceptCard>

---

## 📄 AI Risk Register Template (Copy/Paste)

Use this as a starting point for AI-specific risks (add to your main Risk Register).

<ConceptCard title="🗂️ Sample AI Risk Entries">
<div style="overflow-x: auto;">
<table style="width: 100%; border-collapse: collapse; font-size: 0.85em;">
<thead>
<tr style="background: linear-gradient(135deg, #667eea, #764ba2); color: white;">
<th style="padding: 12px; text-align: left; border-radius: 8px 0 0 0;">ID</th>
<th style="padding: 12px; text-align: left;">Risk Statement</th>
<th style="padding: 12px; text-align: center;">P/I</th>
<th style="padding: 12px; text-align: left;">Response</th>
<th style="padding: 12px; text-align: left; border-radius: 0 8px 0 0;">Status</th>
</tr>
</thead>
<tbody>
<tr style="background: #fef2f2;">
<td style="padding: 10px; font-weight: bold; color: #dc2626;">AI-1</td>
<td style="padding: 10px;">Data leakage: Team uses unapproved public AI with confidential data</td>
<td style="padding: 10px; text-align: center;"><span style="background: #fbbf24; padding: 2px 8px; border-radius: 12px; font-weight: 600;">M</span> / <span style="background: #ef4444; color: white; padding: 2px 8px; border-radius: 12px; font-weight: 600;">H</span></td>
<td style="padding: 10px;">Avoid: Approved tools only; redaction training</td>
<td style="padding: 10px;"><span style="background: #059669; color: white; padding: 4px 8px; border-radius: 12px;">Monitor</span></td>
</tr>
<tr style="background: #fffbeb;">
<td style="padding: 10px; font-weight: bold; color: #d97706;">AI-2</td>
<td style="padding: 10px;">Hallucination: AI generates incorrect info in Charter</td>
<td style="padding: 10px; text-align: center;"><span style="background: #fbbf24; padding: 2px 8px; border-radius: 12px; font-weight: 600;">M</span> / <span style="background: #22c55e; color: white; padding: 2px 8px; border-radius: 12px; font-weight: 600;">L</span></td>
<td style="padding: 10px;">Mitigate: HITL review + SME sign-off</td>
<td style="padding: 10px;"><span style="background: #64748b; color: white; padding: 4px 8px; border-radius: 12px;">Watch</span></td>
</tr>
<tr style="background: #fdf4ff;">
<td style="padding: 10px; font-weight: bold; color: #9333ea;">AI-3</td>
<td style="padding: 10px;">Bias: AI recommends fewer shifts to certain team members</td>
<td style="padding: 10px; text-align: center;"><span style="background: #22c55e; color: white; padding: 2px 8px; border-radius: 12px; font-weight: 600;">L</span> / <span style="background: #ef4444; color: white; padding: 2px 8px; border-radius: 12px; font-weight: 600;">H</span></td>
<td style="padding: 10px;">Mitigate: Monthly fairness audits</td>
<td style="padding: 10px;"><span style="background: #059669; color: white; padding: 4px 8px; border-radius: 12px;">Monitor</span></td>
</tr>
<tr style="background: #eff6ff;">
<td style="padding: 10px; font-weight: bold; color: #2563eb;">AI-4</td>
<td style="padding: 10px;">Over-reliance: Team treats AI forecast as certainty</td>
<td style="padding: 10px; text-align: center;"><span style="background: #fbbf24; padding: 2px 8px; border-radius: 12px; font-weight: 600;">M</span> / <span style="background: #fbbf24; padding: 2px 8px; border-radius: 12px; font-weight: 600;">M</span></td>
<td style="padding: 10px;">Mitigate: Mandatory validation step</td>
<td style="padding: 10px;"><span style="background: #64748b; color: white; padding: 4px 8px; border-radius: 12px;">Watch</span></td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 10px; font-weight: bold; color: #475569;">AI-5</td>
<td style="padding: 10px;">Vendor SaaS outage during critical phase</td>
<td style="padding: 10px; text-align: center;"><span style="background: #22c55e; color: white; padding: 2px 8px; border-radius: 12px; font-weight: 600;">L</span> / <span style="background: #ef4444; color: white; padding: 2px 8px; border-radius: 12px; font-weight: 600;">H</span></td>
<td style="padding: 10px;">Mitigate: SLA verification; manual fallback</td>
<td style="padding: 10px;"><span style="background: #059669; color: white; padding: 4px 8px; border-radius: 12px;">Monitor</span></td>
</tr>
</tbody>
</table>
</div>
</ConceptCard>

---

## 🔬 AI Quality and Defect Escape Monitoring Checklist

Use this for projects leveraging AI in test automation or defect analysis:

<ConceptCard title="🐛 Quality Monitoring for AI-Assisted Testing">
<div style="display: grid; gap: 10px;">
  <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: linear-gradient(135deg, #ecfdf5, #d1fae5); border-radius: 10px;">
    <span style="font-size: 1.3em;">📊</span>
    <div><strong>Baseline established</strong> – Defect escape rate from last 3 releases documented</div>
  </div>
  <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: linear-gradient(135deg, #eff6ff, #dbeafe); border-radius: 10px;">
    <span style="font-size: 1.3em;">🏷️</span>
    <div><strong>Defect classification</strong> – AI understands priority levels (Critical/High/Med/Low)</div>
  </div>
  <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: linear-gradient(135deg, #fef3c7, #fde68a); border-radius: 10px;">
    <span style="font-size: 1.3em;">🎯</span>
    <div><strong>Phase containment metric</strong> – Target % of bugs to catch per phase (e.g., 90% by UAT)</div>
  </div>
  <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: linear-gradient(135deg, #f3e8ff, #e9d5ff); border-radius: 10px;">
    <span style="font-size: 1.3em;">📅</span>
    <div><strong>Monthly AI review</strong> – Analyze trends: is escape rate improving or degrading?</div>
  </div>
  <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: linear-gradient(135deg, #fce7f3, #fbcfe8); border-radius: 10px;">
    <span style="font-size: 1.3em;">⚖️</span>
    <div><strong>Bias check</strong> – Are AI-predicted "risky areas" spread across all teams fairly?</div>
  </div>
  <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: linear-gradient(135deg, #cffafe, #a5f3fc); border-radius: 10px;">
    <span style="font-size: 1.3em;">👤</span>
    <div><strong>Human override</strong> – QA lead reviews AI predictions; can disagree and override</div>
  </div>
  <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: linear-gradient(135deg, #e0e7ff, #c7d2fe); border-radius: 10px;">
    <span style="font-size: 1.3em;">🔍</span>
    <div><strong>Root cause tracking</strong> – When AI misses a bug, log why (tool, data, or process issue)</div>
  </div>
  <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: linear-gradient(135deg, #fee2e2, #fecaca); border-radius: 10px;">
    <span style="font-size: 1.3em;">🚨</span>
    <div><strong>Escalation rule</strong> – If escape rate exceeds 20%, escalate to PM/sponsor</div>
  </div>
</div>
</ConceptCard>

---

## 📝 AI Decision Log Template

For high-stakes AI decisions, maintain a record (useful for audits):

<ConceptCard title="🗃️ Sample Decision Log Entries">
<div style="display: grid; gap: 16px;">
  <div style="background: linear-gradient(135deg, #eff6ff, #dbeafe); padding: 16px; border-radius: 12px; border-left: 4px solid #3b82f6;">
    <div style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
      <span style="background: #3b82f6; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8em;">2026-01-15</span>
      <span style="font-weight: 600; color: #1e40af;">Vendor Selection for Procurement</span>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; font-size: 0.9em;">
      <div><strong>AI Tool:</strong> Supplier Analysis AI</div>
      <div><strong>AI Rec:</strong> Vendor C (lowest cost, high risk)</div>
      <div><strong>Human Decision:</strong> Selected Vendor B (moderate cost, lower risk)</div>
      <div><strong>Rationale:</strong> Risk score aligns with appetite; cost savings not worth disruption probability</div>
    </div>
  </div>
  <div style="background: linear-gradient(135deg, #f0fdf4, #dcfce7); padding: 16px; border-radius: 12px; border-left: 4px solid #22c55e;">
    <div style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
      <span style="background: #22c55e; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8em;">2026-01-20</span>
      <span style="font-weight: 600; color: #166534;">Schedule Compression</span>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; font-size: 0.9em;">
      <div><strong>AI Tool:</strong> Forecasting AI</div>
      <div><strong>AI Rec:</strong> Add 2-week buffer; slow feature set</div>
      <div><strong>Human Decision:</strong> Agreed to 1-week buffer; prioritize features</div>
      <div><strong>Rationale:</strong> Partial recommendation; balances schedule and scope better</div>
    </div>
  </div>
</div>
</ConceptCard>

---

## 🎯 Exam Quick Picks (AI Scenarios)

<ConceptCard title="⚡ AI Decision Quick Reference">
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px;">
  <div style="background: linear-gradient(135deg, #fef2f2, #fee2e2); padding: 14px; border-radius: 10px; border-left: 4px solid #ef4444;">
    <strong style="color: #dc2626;">🔒 Confidentiality at risk?</strong>
    <div style="margin-top: 6px; font-size: 0.9em;">Stop, contain, notify, and follow policy</div>
  </div>
  <div style="background: linear-gradient(135deg, #eff6ff, #dbeafe); padding: 14px; border-radius: 10px; border-left: 4px solid #3b82f6;">
    <strong style="color: #2563eb;">🤖 AI provides answer/prediction?</strong>
    <div style="margin-top: 6px; font-size: 0.9em;">Validate with the team/data before acting</div>
  </div>
  <div style="background: linear-gradient(135deg, #f0fdf4, #dcfce7); padding: 14px; border-radius: 10px; border-left: 4px solid #22c55e;">
    <strong style="color: #16a34a;">👥 Outputs affect stakeholders?</strong>
    <div style="margin-top: 6px; font-size: 0.9em;">Use EI and human judgment; do not auto-send</div>
  </div>
  <div style="background: linear-gradient(135deg, #fef3c7, #fde68a); padding: 14px; border-radius: 10px; border-left: 4px solid #f59e0b;">
    <strong style="color: #d97706;">📋 Governance missing?</strong>
    <div style="margin-top: 6px; font-size: 0.9em;">Create/update working agreement and define approvals</div>
  </div>
  <div style="background: linear-gradient(135deg, #f3e8ff, #e9d5ff); padding: 14px; border-radius: 10px; border-left: 4px solid #a855f7;">
    <strong style="color: #9333ea;">⚖️ Compliance required?</strong>
    <div style="margin-top: 6px; font-size: 0.9em;">Prefer explainable/auditable approaches; document decisions</div>
  </div>
  <div style="background: linear-gradient(135deg, #fce7f3, #fbcfe8); padding: 14px; border-radius: 10px; border-left: 4px solid #ec4899;">
    <strong style="color: #db2777;">😰 Team resists AI?</strong>
    <div style="margin-top: 6px; font-size: 0.9em;">Use EI; address fears; show low-risk pilots first</div>
  </div>
</div>
</ConceptCard>

---

## 📚 Expanded Prompt Library (Copy/Paste Ready)

Use these prompts across all process groups. Customize the `[PLACEHOLDERS]` for your context.

### 🚀 Initiation Prompts

<ConceptCard title="📋 Business Case Outline">
<div style="background: linear-gradient(135deg, #1e293b, #334155); color: #e2e8f0; padding: 18px; border-radius: 12px; font-family: 'Fira Code', monospace; font-size: 0.85em;">
  <div><span style="color: #60a5fa; font-weight: bold;">Role:</span> Act as a PMP-certified PM with business analysis experience.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Task:</span> Create a Business Case outline for <span style="color: #fbbf24;">[PROJECT TYPE]</span> project.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Include:</span> Problem statement, proposed solution, benefits (quantified), costs (estimate range), risks, success criteria, go/no-go recommendation.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Constraints:</span> Do not invent financial figures; use <span style="color: #fbbf24;">[BUDGET RANGE]</span> as placeholder. Flag assumptions.</div>
</div>
</ConceptCard>

<ConceptCard title="👥 Stakeholder Identification">
<div style="background: linear-gradient(135deg, #1e293b, #334155); color: #e2e8f0; padding: 18px; border-radius: 12px; font-family: 'Fira Code', monospace; font-size: 0.85em;">
  <div><span style="color: #60a5fa; font-weight: bold;">Role:</span> Act as a stakeholder management expert.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Task:</span> Based on this project description, identify potential stakeholders.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">For each:</span> Name the role (not person), their interest, influence level (L/M/H), and engagement strategy.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Input:</span> <span style="color: #fbbf24;">[PASTE PROJECT DESCRIPTION]</span></div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Constraints:</span> Organize by internal vs external. Flag any gaps in the org structure you notice.</div>
</div>
</ConceptCard>

### 📐 Planning Prompts

<ConceptCard title="🧩 WBS Generation">
<div style="background: linear-gradient(135deg, #1e293b, #334155); color: #e2e8f0; padding: 18px; border-radius: 12px; font-family: 'Fira Code', monospace; font-size: 0.85em;">
  <div><span style="color: #60a5fa; font-weight: bold;">Role:</span> Act as a senior project planner.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Task:</span> Create a 3-level WBS for this scope statement.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Format:</span> Outline with numbering (1.0, 1.1, 1.1.1).</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Include:</span> Work packages at level 3 with brief descriptions.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Constraints:</span> Flag any scope areas that seem ambiguous or incomplete.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Input:</span> <span style="color: #fbbf24;">[PASTE SCOPE STATEMENT]</span></div>
</div>
</ConceptCard>

<ConceptCard title="⚠️ Risk Brainstorm (Pre-Mortem)">
<div style="background: linear-gradient(135deg, #1e293b, #334155); color: #e2e8f0; padding: 18px; border-radius: 12px; font-family: 'Fira Code', monospace; font-size: 0.85em;">
  <div><span style="color: #60a5fa; font-weight: bold;">Role:</span> Act as a risk management consultant.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Task:</span> Imagine this project has failed spectacularly. What went wrong?</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Generate:</span> 15 risk statements using: "Because [cause], [event] may occur, resulting in [impact]."</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Separate into:</span> 10 threats, 5 opportunities.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Input:</span> <span style="color: #fbbf24;">[PASTE PROJECT SUMMARY]</span></div>
</div>
</ConceptCard>

<ConceptCard title="📣 Communication Plan Draft">
<div style="background: linear-gradient(135deg, #1e293b, #334155); color: #e2e8f0; padding: 18px; border-radius: 12px; font-family: 'Fira Code', monospace; font-size: 0.85em;">
  <div><span style="color: #60a5fa; font-weight: bold;">Role:</span> Act as a communications specialist.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Task:</span> Draft a communication plan for this project.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Include:</span> Stakeholder group, information need, frequency, channel, owner.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Format:</span> Table with 5 columns.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Input:</span> <span style="color: #fbbf24;">[PASTE STAKEHOLDER LIST]</span></div>
</div>
</ConceptCard>

### ⚡ Execution Prompts

<ConceptCard title="📝 Meeting Minutes">
<div style="background: linear-gradient(135deg, #1e293b, #334155); color: #e2e8f0; padding: 18px; border-radius: 12px; font-family: 'Fira Code', monospace; font-size: 0.85em;">
  <div><span style="color: #60a5fa; font-weight: bold;">Role:</span> Act as a project coordinator.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Task:</span> Convert this meeting transcript into structured minutes.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Include:</span> Attendees, decisions made, action items (owner + due date), risks/issues raised, parking lot items.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Constraints:</span> If owner or date is unclear, mark as "TBD - Confirm with [role]".</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Input:</span> <span style="color: #fbbf24;">[PASTE TRANSCRIPT]</span></div>
</div>
</ConceptCard>

<ConceptCard title="📊 Status Report (Executive)">
<div style="background: linear-gradient(135deg, #1e293b, #334155); color: #e2e8f0; padding: 18px; border-radius: 12px; font-family: 'Fira Code', monospace; font-size: 0.85em;">
  <div><span style="color: #60a5fa; font-weight: bold;">Role:</span> Act as a PMO reporting specialist.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Task:</span> Draft a 1-page executive status report from these inputs.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Include:</span> Overall RAG status, key accomplishments, upcoming milestones, top 3 risks, decisions needed.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Format:</span> Bullet points with bolded headers.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Constraints:</span> Keep to 10 bullets max. Explain any RED or YELLOW items.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Inputs:</span> SV=<span style="color: #fbbf24;">[VALUE]</span>, CV=<span style="color: #fbbf24;">[VALUE]</span>, Milestones=<span style="color: #fbbf24;">[PASTE]</span>, Issues=<span style="color: #fbbf24;">[PASTE]</span></div>
</div>
</ConceptCard>

<ConceptCard title="✉️ Stakeholder Update Email">
<div style="background: linear-gradient(135deg, #1e293b, #334155); color: #e2e8f0; padding: 18px; border-radius: 12px; font-family: 'Fira Code', monospace; font-size: 0.85em;">
  <div><span style="color: #60a5fa; font-weight: bold;">Role:</span> Act as a project manager with excellent stakeholder communication skills.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Task:</span> Draft an email update for <span style="color: #fbbf24;">[STAKEHOLDER ROLE]</span> summarizing project progress.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Tone:</span> Professional, confident, transparent about challenges.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Include:</span> Progress summary, key risks, what you need from them, next touchpoint.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Constraints:</span> Keep under 200 words. Do not use jargon.</div>
</div>
</ConceptCard>

### 📈 Monitoring and Controlling Prompts

<ConceptCard title="📉 Variance Analysis">
<div style="background: linear-gradient(135deg, #1e293b, #334155); color: #e2e8f0; padding: 18px; border-radius: 12px; font-family: 'Fira Code', monospace; font-size: 0.85em;">
  <div><span style="color: #60a5fa; font-weight: bold;">Role:</span> Act as an EVM analyst.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Task:</span> Analyze these project metrics and explain the variances.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Metrics:</span> PV=<span style="color: #fbbf24;">[VALUE]</span>, EV=<span style="color: #fbbf24;">[VALUE]</span>, AC=<span style="color: #fbbf24;">[VALUE]</span>, BAC=<span style="color: #fbbf24;">[VALUE]</span></div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Calculate:</span> SV, CV, SPI, CPI, EAC (using current performance), TCPI.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Explain:</span> What do these numbers mean? What action should the PM take?</div>
</div>
</ConceptCard>

<ConceptCard title="🔍 Root Cause Analysis">
<div style="background: linear-gradient(135deg, #1e293b, #334155); color: #e2e8f0; padding: 18px; border-radius: 12px; font-family: 'Fira Code', monospace; font-size: 0.85em;">
  <div><span style="color: #60a5fa; font-weight: bold;">Role:</span> Act as a quality management consultant.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Task:</span> Perform a root cause analysis for this problem using the 5 Whys technique.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Problem:</span> <span style="color: #fbbf24;">[DESCRIBE ISSUE]</span></div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Show:</span> Each "Why" question and answer. Identify the root cause. Propose corrective action.</div>
</div>
</ConceptCard>

### 🏁 Closing Prompts

<ConceptCard title="💡 Lessons Learned Clustering">
<div style="background: linear-gradient(135deg, #1e293b, #334155); color: #e2e8f0; padding: 18px; border-radius: 12px; font-family: 'Fira Code', monospace; font-size: 0.85em;">
  <div><span style="color: #60a5fa; font-weight: bold;">Role:</span> Act as a knowledge management specialist.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Task:</span> Cluster these retrospective comments into 5 key themes.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">For each theme:</span> Summarize the insight, categorize as "Do Again" / "Avoid" / "Improve", and propose one action.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Input:</span> <span style="color: #fbbf24;">[PASTE RETRO NOTES]</span></div>
</div>
</ConceptCard>

<ConceptCard title="📄 Final Report Draft">
<div style="background: linear-gradient(135deg, #1e293b, #334155); color: #e2e8f0; padding: 18px; border-radius: 12px; font-family: 'Fira Code', monospace; font-size: 0.85em;">
  <div><span style="color: #60a5fa; font-weight: bold;">Role:</span> Act as a project closure specialist.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Task:</span> Draft an executive summary for the project final report.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Include:</span> Original objectives vs. actual outcomes, key successes, lessons learned (top 3), recommendations for future projects.</div>
  <div style="margin-top: 8px;"><span style="color: #60a5fa; font-weight: bold;">Input:</span> <span style="color: #fbbf24;">[PASTE PROJECT SUMMARY AND OUTCOMES]</span></div>
</div>
</ConceptCard>

---

## 💰 AI ROI Calculator

Use this formula to estimate whether AI is worth the investment for a given task.

<ConceptCard title="🧮 ROI Formula and Example">
<div style="background: linear-gradient(135deg, #0f172a, #1e293b); padding: 20px; border-radius: 12px; margin-bottom: 16px;">
  <div style="text-align: center; color: #60a5fa; font-size: 0.9em; margin-bottom: 8px;">THE FORMULA</div>
  <div style="background: linear-gradient(135deg, #3b82f6, #2563eb); color: white; padding: 16px; border-radius: 10px; font-family: 'Fira Code', monospace; text-align: center; font-size: 0.85em;">
    Net AI Value = (Time Saved × Uses/Month × Hourly Cost) - (Tool Cost + HITL Time × Hourly Cost)
  </div>
</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: 16px;">
  <div style="background: linear-gradient(135deg, #ecfdf5, #d1fae5); padding: 12px; border-radius: 10px; text-align: center;">
    <div style="font-size: 0.8em; color: #666;">Time saved/use</div>
    <div style="font-size: 1.4em; font-weight: bold; color: #059669;">1.5 hrs</div>
  </div>
  <div style="background: linear-gradient(135deg, #eff6ff, #dbeafe); padding: 12px; border-radius: 10px; text-align: center;">
    <div style="font-size: 0.8em; color: #666;">Uses/month</div>
    <div style="font-size: 1.4em; font-weight: bold; color: #2563eb;">8</div>
  </div>
  <div style="background: linear-gradient(135deg, #fef3c7, #fde68a); padding: 12px; border-radius: 10px; text-align: center;">
    <div style="font-size: 0.8em; color: #666;">Hourly cost</div>
    <div style="font-size: 1.4em; font-weight: bold; color: #d97706;">$75</div>
  </div>
  <div style="background: linear-gradient(135deg, #fce7f3, #fbcfe8); padding: 12px; border-radius: 10px; text-align: center;">
    <div style="font-size: 0.8em; color: #666;">Tool cost/mo</div>
    <div style="font-size: 1.4em; font-weight: bold; color: #db2777;">$50</div>
  </div>
  <div style="background: linear-gradient(135deg, #f3e8ff, #e9d5ff); padding: 12px; border-radius: 10px; text-align: center;">
    <div style="font-size: 0.8em; color: #666;">HITL review</div>
    <div style="font-size: 1.4em; font-weight: bold; color: #9333ea;">15 min</div>
  </div>
</div>

<div style="background: linear-gradient(135deg, #f0fdf4, #dcfce7); padding: 16px; border-radius: 12px; border-left: 4px solid #22c55e;">
  <strong style="color: #16a34a;">Calculation:</strong>
  <div style="font-family: 'Fira Code', monospace; font-size: 0.85em; margin-top: 8px;">
    <div>Gross savings = 1.5 hrs × 8 × $75 = <strong>$900/month</strong></div>
    <div>HITL overhead = 0.25 hrs × 8 × $75 = <strong>$150/month</strong></div>
    <div>Tool cost = <strong>$50/month</strong></div>
    <div style="margin-top: 8px; font-size: 1.1em; color: #16a34a;">Net AI Value = $900 - $150 - $50 = <strong>$700/month saved</strong></div>
    <div style="color: #16a34a;">Annual ROI = <strong>$8,400 saved</strong></div>
  </div>
</div>
</ConceptCard>

<ConceptCard title="📊 Quick Decision Table">
<div style="display: grid; gap: 10px;">
  <div style="display: flex; justify-content: space-between; align-items: center; padding: 14px; background: linear-gradient(135deg, #ecfdf5, #d1fae5); border-radius: 10px; border-left: 4px solid #22c55e;">
    <span style="font-weight: 600; color: #166534;">Over $500/month</span>
    <span style="background: #22c55e; color: white; padding: 6px 14px; border-radius: 20px; font-weight: 600;">Strong ROI - Scale Usage</span>
  </div>
  <div style="display: flex; justify-content: space-between; align-items: center; padding: 14px; background: linear-gradient(135deg, #eff6ff, #dbeafe); border-radius: 10px; border-left: 4px solid #3b82f6;">
    <span style="font-weight: 600; color: #1e40af;">$100-500/month</span>
    <span style="background: #3b82f6; color: white; padding: 6px 14px; border-radius: 20px; font-weight: 600;">Positive ROI - Monitor</span>
  </div>
  <div style="display: flex; justify-content: space-between; align-items: center; padding: 14px; background: linear-gradient(135deg, #fef3c7, #fde68a); border-radius: 10px; border-left: 4px solid #f59e0b;">
    <span style="font-weight: 600; color: #92400e;">$0-100/month</span>
    <span style="background: #f59e0b; color: white; padding: 6px 14px; border-radius: 20px; font-weight: 600;">Marginal - Evaluate</span>
  </div>
  <div style="display: flex; justify-content: space-between; align-items: center; padding: 14px; background: linear-gradient(135deg, #fef2f2, #fee2e2); border-radius: 10px; border-left: 4px solid #ef4444;">
    <span style="font-weight: 600; color: #991b1b;">Under $0/month</span>
    <span style="background: #ef4444; color: white; padding: 6px 14px; border-radius: 20px; font-weight: 600;">Negative ROI - Reconsider</span>
  </div>
</div>
</ConceptCard>

---

##  Tool Comparison Matrix (Enterprise AI Features)


Use this framework when evaluating AI tools for your organization.

<ConceptCard title="🛠️ Feature Evaluation Matrix">
<div style="overflow-x: auto;">
<table style="width: 100%; border-collapse: collapse; font-size: 0.85em;">
<thead>
<tr style="background: linear-gradient(135deg, #667eea, #764ba2); color: white;">
<th style="padding: 12px; text-align: left; border-radius: 8px 0 0 0;">Feature</th>
<th style="padding: 12px; text-align: center;">Priority</th>
<th style="padding: 12px; text-align: left; border-radius: 0 8px 0 0;">Questions to Ask</th>
</tr>
</thead>
<tbody>
<tr style="background: #fef2f2;">
<td style="padding: 10px;"><strong>🔒 Zero Data Retention</strong></td>
<td style="padding: 10px; text-align: center;"><span style="background: #ef4444; color: white; padding: 4px 10px; border-radius: 12px; font-weight: 600;">Must Have</span></td>
<td style="padding: 10px; font-size: 0.9em;">"Is our data used for training? Can we opt out contractually?"</td>
</tr>
<tr style="background: #fffbeb;">
<td style="padding: 10px;"><strong>📋 SOC2 / ISO27001</strong></td>
<td style="padding: 10px; text-align: center;"><span style="background: #ef4444; color: white; padding: 4px 10px; border-radius: 12px; font-weight: 600;">Must Have</span></td>
<td style="padding: 10px; font-size: 0.9em;">"Provide compliance certifications."</td>
</tr>
<tr style="background: #f0fdf4;">
<td style="padding: 10px;"><strong>🔑 SSO/SAML</strong></td>
<td style="padding: 10px; text-align: center;"><span style="background: #ef4444; color: white; padding: 4px 10px; border-radius: 12px; font-weight: 600;">Must Have</span></td>
<td style="padding: 10px; font-size: 0.9em;">"Integrate with our identity provider?"</td>
</tr>
<tr style="background: #eff6ff;">
<td style="padding: 10px;"><strong>📝 Audit Logging</strong></td>
<td style="padding: 10px; text-align: center;"><span style="background: #ef4444; color: white; padding: 4px 10px; border-radius: 12px; font-weight: 600;">Must Have</span></td>
<td style="padding: 10px; font-size: 0.9em;">"Can we export logs? How long retained?"</td>
</tr>
<tr style="background: #fdf4ff;">
<td style="padding: 10px;"><strong>👥 Role-Based Access</strong></td>
<td style="padding: 10px; text-align: center;"><span style="background: #ef4444; color: white; padding: 4px 10px; border-radius: 12px; font-weight: 600;">Must Have</span></td>
<td style="padding: 10px; font-size: 0.9em;">"Can we restrict who uses which features?"</td>
</tr>
<tr style="background: #f1f5f9;">
<td style="padding: 10px;"><strong>🔌 API Access</strong></td>
<td style="padding: 10px; text-align: center;"><span style="background: #3b82f6; color: white; padding: 4px 10px; border-radius: 12px; font-weight: 600;">Nice to Have</span></td>
<td style="padding: 10px; font-size: 0.9em;">"Programmatic access for automation?"</td>
</tr>
<tr style="background: #fef3c7;">
<td style="padding: 10px;"><strong>📄 Custom Prompts/Templates</strong></td>
<td style="padding: 10px; text-align: center;"><span style="background: #3b82f6; color: white; padding: 4px 10px; border-radius: 12px; font-weight: 600;">Nice to Have</span></td>
<td style="padding: 10px; font-size: 0.9em;">"Can we save and share prompts org-wide?"</td>
</tr>
<tr style="background: #fce7f3;">
<td style="padding: 10px;"><strong>🌍 Data Residency Options</strong></td>
<td style="padding: 10px; text-align: center;"><span style="background: #f59e0b; color: white; padding: 4px 10px; border-radius: 12px; font-weight: 600;">Regulated</span></td>
<td style="padding: 10px; font-size: 0.9em;">"Where is data processed? EU-only option?"</td>
</tr>
<tr style="background: #cffafe;">
<td style="padding: 10px;"><strong>🔍 Explainability Features</strong></td>
<td style="padding: 10px; text-align: center;"><span style="background: #f59e0b; color: white; padding: 4px 10px; border-radius: 12px; font-weight: 600;">Regulated</span></td>
<td style="padding: 10px; font-size: 0.9em;">"Can we see why the AI gave this answer?"</td>
</tr>
<tr style="background: #e0e7ff;">
<td style="padding: 10px;"><strong>⏱️ SLA/Uptime Guarantee</strong></td>
<td style="padding: 10px; text-align: center;"><span style="background: #3b82f6; color: white; padding: 4px 10px; border-radius: 12px; font-weight: 600;">Nice to Have</span></td>
<td style="padding: 10px; font-size: 0.9em;">"What's the SLA? Incident response process?"</td>
</tr>
<tr style="background: #dcfce7;">
<td style="padding: 10px;"><strong>🔗 Integrations (Jira, etc.)</strong></td>
<td style="padding: 10px; text-align: center;"><span style="background: #3b82f6; color: white; padding: 4px 10px; border-radius: 12px; font-weight: 600;">Nice to Have</span></td>
<td style="padding: 10px; font-size: 0.9em;">"Native integrations vs. copy/paste?"</td>
</tr>
</tbody>
</table>
</div>
</ConceptCard>

---

## 🚨 Escalation Decision Tree

When to escalate AI issues beyond the project team.

<ConceptCard title="📞 AI Issue Escalation Flow">
<div style="display: grid; gap: 12px;">
  <div style="background: linear-gradient(135deg, #fef2f2, #fee2e2); padding: 16px; border-radius: 12px; border-left: 4px solid #ef4444;">
    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
      <span style="font-size: 1.4em;">🔓</span>
      <strong style="color: #dc2626;">Data exposure (confidential data in unapproved tool)?</strong>
    </div>
    <div style="background: #dc2626; color: white; padding: 10px 14px; border-radius: 8px; font-weight: 600; margin-left: 36px;">
      → ESCALATE IMMEDIATELY to IT/Security. Contain. Document.
    </div>
  </div>
  <div style="background: linear-gradient(135deg, #fdf4ff, #fae8ff); padding: 16px; border-radius: 12px; border-left: 4px solid #a855f7;">
    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
      <span style="font-size: 1.4em;">⚖️</span>
      <strong style="color: #9333ea;">Bias/fairness concern affecting people decisions?</strong>
    </div>
    <div style="background: #a855f7; color: white; padding: 10px 14px; border-radius: 8px; font-weight: 600; margin-left: 36px;">
      → ESCALATE to HR/Legal. Pause AI use. Investigate.
    </div>
  </div>
  <div style="background: linear-gradient(135deg, #fef3c7, #fde68a); padding: 16px; border-radius: 12px; border-left: 4px solid #f59e0b;">
    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
      <span style="font-size: 1.4em;">🔌</span>
      <strong style="color: #d97706;">AI tool down during critical phase?</strong>
    </div>
    <div style="background: #f59e0b; color: white; padding: 10px 14px; border-radius: 8px; font-weight: 600; margin-left: 36px;">
      → Activate manual fallback. Escalate to vendor (per SLA). Inform sponsor.
    </div>
  </div>
  <div style="background: linear-gradient(135deg, #eff6ff, #dbeafe); padding: 16px; border-radius: 12px; border-left: 4px solid #3b82f6;">
    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
      <span style="font-size: 1.4em;">⚠️</span>
      <strong style="color: #2563eb;">AI output caused stakeholder harm (wrong info shared)?</strong>
    </div>
    <div style="background: #3b82f6; color: white; padding: 10px 14px; border-radius: 8px; font-weight: 600; margin-left: 36px;">
      → ESCALATE to sponsor/PMO. Correct with stakeholders. Update governance.
    </div>
  </div>
  <div style="background: linear-gradient(135deg, #fce7f3, #fbcfe8); padding: 16px; border-radius: 12px; border-left: 4px solid #ec4899;">
    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
      <span style="font-size: 1.4em;">👥</span>
      <strong style="color: #db2777;">Team resistance blocking adoption despite training?</strong>
    </div>
    <div style="background: #ec4899; color: white; padding: 10px 14px; border-radius: 8px; font-weight: 600; margin-left: 36px;">
      → Escalate to sponsor for executive messaging. Provide additional support.
    </div>
  </div>
  <div style="background: linear-gradient(135deg, #f0fdf4, #dcfce7); padding: 16px; border-radius: 12px; border-left: 4px solid #22c55e;">
    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
      <span style="font-size: 1.4em;">🔧</span>
      <strong style="color: #16a34a;">Routine issues (prompts not working, minor errors)?</strong>
    </div>
    <div style="background: #22c55e; color: white; padding: 10px 14px; border-radius: 8px; font-weight: 600; margin-left: 36px;">
      → Handle at team level. Log lessons. Update templates. No escalation needed.
    </div>
  </div>
</div>
</ConceptCard>

---

## 📊 AI Maturity Assessment (Self-Evaluation Checklist)

Use this to assess your team's readiness for AI adoption.

<ConceptCard title="🎯 AI Maturity Levels">
<div style="display: grid; gap: 16px;">
  <div style="background: linear-gradient(135deg, #eff6ff, #dbeafe); padding: 20px; border-radius: 14px; border-left: 4px solid #3b82f6;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
      <strong style="color: #1e40af; font-size: 1.1em;">Level 1: Awareness</strong>
      <span style="background: #3b82f6; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8em;">Score: __/10 (Pass = 6+)</span>
    </div>
    <div style="display: grid; gap: 6px; font-size: 0.9em;">
      <div>☐ Team understands what AI can and cannot do</div>
      <div>☐ Team knows GenAI vs Predictive AI vs Automation</div>
      <div>☐ Team is aware of hallucination and bias risks</div>
      <div>☐ Leadership has communicated AI strategy</div>
      <div>☐ Data classification policy exists and is known</div>
    </div>
  </div>
  
  <div style="background: linear-gradient(135deg, #f0fdf4, #dcfce7); padding: 20px; border-radius: 14px; border-left: 4px solid #22c55e;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
      <strong style="color: #166534; font-size: 1.1em;">Level 2: Experimentation</strong>
      <span style="background: #22c55e; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8em;">Score: __/10 (Pass = 6+)</span>
    </div>
    <div style="display: grid; gap: 6px; font-size: 0.9em;">
      <div>☐ Approved AI tools are available and accessible</div>
      <div>☐ Team has run at least one AI pilot successfully</div>
      <div>☐ Prompt templates exist for common tasks</div>
      <div>☐ HITL review process is defined and followed</div>
      <div>☐ Data redaction checklist is used consistently</div>
    </div>
  </div>
  
  <div style="background: linear-gradient(135deg, #fef3c7, #fde68a); padding: 20px; border-radius: 14px; border-left: 4px solid #f59e0b;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
      <strong style="color: #92400e; font-size: 1.1em;">Level 3: Optimization</strong>
      <span style="background: #f59e0b; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8em;">Score: __/10 (Pass = 6+)</span>
    </div>
    <div style="display: grid; gap: 6px; font-size: 0.9em;">
      <div>☐ AI usage is tracked (hours saved, tasks automated)</div>
      <div>☐ ROI is measured and positive</div>
      <div>☐ AI Working Agreement is documented and updated</div>
      <div>☐ Team shares successful prompts and lessons learned</div>
      <div>☐ Governance includes regular bias/quality audits</div>
    </div>
  </div>
  
  <div style="background: linear-gradient(135deg, #f3e8ff, #e9d5ff); padding: 20px; border-radius: 14px; border-left: 4px solid #a855f7;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
      <strong style="color: #7c3aed; font-size: 1.1em;">Level 4: Transformation</strong>
      <span style="background: #a855f7; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8em;">Score: __/10 (Pass = 6+)</span>
    </div>
    <div style="display: grid; gap: 6px; font-size: 0.9em;">
      <div>☐ AI is integrated into standard workflows (not "extra step")</div>
      <div>☐ Team proactively identifies new AI use cases</div>
      <div>☐ Cross-functional AI governance is in place</div>
      <div>☐ Organization shares AI best practices across projects</div>
      <div>☐ Continuous improvement loop for AI tooling exists</div>
    </div>
  </div>
</div>
</ConceptCard>

<ConceptCard title="📈 Maturity Interpretation Guide">
<div style="display: grid; gap: 10px;">
  <div style="display: flex; justify-content: space-between; align-items: center; padding: 14px; background: linear-gradient(135deg, #eff6ff, #dbeafe); border-radius: 10px; border-left: 4px solid #3b82f6;">
    <div>
      <span style="font-weight: 600; color: #1e40af;">Score 0-10</span>
      <span style="margin-left: 8px; color: #64748b;">Awareness Level</span>
    </div>
    <span style="font-size: 0.85em; color: #1e40af;">Focus on education; do not force adoption</span>
  </div>
  <div style="display: flex; justify-content: space-between; align-items: center; padding: 14px; background: linear-gradient(135deg, #f0fdf4, #dcfce7); border-radius: 10px; border-left: 4px solid #22c55e;">
    <div>
      <span style="font-weight: 600; color: #166534;">Score 11-20</span>
      <span style="margin-left: 8px; color: #64748b;">Experimentation Level</span>
    </div>
    <span style="font-size: 0.85em; color: #166534;">Run controlled pilots; build confidence</span>
  </div>
  <div style="display: flex; justify-content: space-between; align-items: center; padding: 14px; background: linear-gradient(135deg, #fef3c7, #fde68a); border-radius: 10px; border-left: 4px solid #f59e0b;">
    <div>
      <span style="font-weight: 600; color: #92400e;">Score 21-30</span>
      <span style="margin-left: 8px; color: #64748b;">Optimization Level</span>
    </div>
    <span style="font-size: 0.85em; color: #92400e;">Scale best practices; measure ROI</span>
  </div>
  <div style="display: flex; justify-content: space-between; align-items: center; padding: 14px; background: linear-gradient(135deg, #f3e8ff, #e9d5ff); border-radius: 10px; border-left: 4px solid #a855f7;">
    <div>
      <span style="font-weight: 600; color: #7c3aed;">Score 31-40</span>
      <span style="margin-left: 8px; color: #64748b;">Transformation Level</span>
    </div>
    <span style="font-size: 0.85em; color: #7c3aed;">Lead organizational AI initiatives</span>
  </div>
</div>
</ConceptCard>

---

## Quick Review

<FlashcardCarousel :cards="[
  { front: `What is the purpose of an AI Charter?`, back: `To define approved tools, prohibited data, and human review requirements for the team.` },
  { front: `What is the most critical AI risk to mitigate?`, back: `Data leakage (confidential info in public tools) - mitigate with policy and redaction.` },
  { front: `What is \\'Zero Data Retention\\'?`, back: `An enterprise feature where the AI vendor does NOT store or train on your data.` },
  { front: `What is the \\'Human in the Loop\\' (HITL) requirement?`, back: `A human must review and approve all AI outputs before they are used or shared.` },
  { front: `Describe the \\'Pre-Mortem\\' Prompt?`, back: `Asking AI to imagine a future where the project failed and generate potential causes (Risks).` },
  { front: `How do you mitigate AI Hallucinations?`, back: `Use RAG (Retrieval Augmented Generation), prompt grounding, and mandatory verification.` },
  { front: `What is Prompt Engineering?`, back: `Structuring inputs (Role, Context, Constraints) to get better quality outputs from AI.` },
  { front: `Why measure AI ROI?`, back: `To justify the cost of tools vs. time saved. Formula: (Time Saved * Rate) - Tool Cost.` },
  { front: `What is Shadow AI?`, back: `Employees using unapproved AI tools without IT oversight.` },
  { front: `Explainable AI (XAI) importance?`, back: `In regulated industries, you must be able to explain WHY an AI model made a decision.` }
]" />


