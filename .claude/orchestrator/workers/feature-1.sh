#!/bin/bash
set -e
cd '/Users/dustinober/PMP-2026'
PROMPT=$(cat '/Users/dustinober/PMP-2026/.claude/orchestrator/workers/feature-1.prompt')
claude -p "$PROMPT" --allowedTools Bash,Read,Write,Edit,Glob,Grep 2>&1 | tee '/Users/dustinober/PMP-2026/.claude/orchestrator/workers/feature-1.log'
echo 'WORKER_EXITED' >> '/Users/dustinober/PMP-2026/.claude/orchestrator/workers/feature-1.log'
