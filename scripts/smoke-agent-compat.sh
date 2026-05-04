#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${BASE_URL:-http://localhost:8081}"
ORG_ID="${ORG_ID:-00000000-0000-0000-0000-000000000001}"
USER_ID="${USER_ID:-00000000-0000-0000-0000-000000000002}"
CONVERSATION_ID="${CONVERSATION_ID:-}"

auth_headers=(
  -H "Content-Type: application/json"
  -H "X-Org-Id: ${ORG_ID}"
  -H "X-User-Id: ${USER_ID}"
)

echo "1) add_agent"
curl -sS "${auth_headers[@]}" \
  -X POST "${BASE_URL}/api/agent/add_agent" \
  -d "{\"userId\":\"${USER_ID}\",\"displayName\":\"Smoke Agent\",\"email\":\"smoke.agent@example.com\"}" | jq .

if [[ -n "${CONVERSATION_ID}" ]]; then
  echo "2) update_agent_in_chat"
  curl -sS "${auth_headers[@]}" \
    -X POST "${BASE_URL}/api/agent/update_agent_in_chat" \
    -d "{\"conversationId\":\"${CONVERSATION_ID}\",\"agentId\":\"${USER_ID}\"}" | jq .
else
  echo "2) update_agent_in_chat skipped (set CONVERSATION_ID to enable)"
fi

echo "3) create_task"
create_task_resp="$(curl -sS "${auth_headers[@]}" \
  -X POST "${BASE_URL}/api/agent/create_task" \
  -d "{\"title\":\"Follow up customer\",\"priority\":\"high\",\"description\":\"Initial smoke task\"}")"
echo "${create_task_resp}" | jq .

TASK_ID="$(echo "${create_task_resp}" | jq -r '.data.id // empty')"

echo "4) get_my_task"
curl -sS "${auth_headers[@]}" \
  -X GET "${BASE_URL}/api/agent/get_my_task" | jq .

echo "5) get_my_assigned_chats"
curl -sS "${auth_headers[@]}" \
  -X GET "${BASE_URL}/api/agent/get_my_assigned_chats" | jq .

if [[ -n "${TASK_ID}" ]]; then
  echo "6) update_task"
  curl -sS "${auth_headers[@]}" \
    -X POST "${BASE_URL}/api/agent/update_task" \
    -d "{\"taskId\":\"${TASK_ID}\",\"status\":\"in_progress\"}" | jq .

  echo "7) complete_task"
  curl -sS "${auth_headers[@]}" \
    -X POST "${BASE_URL}/api/agent/complete_task" \
    -d "{\"taskId\":\"${TASK_ID}\"}" | jq .

  echo "8) delete_task"
  curl -sS "${auth_headers[@]}" \
    -X POST "${BASE_URL}/api/agent/delete_task" \
    -d "{\"taskId\":\"${TASK_ID}\"}" | jq .
else
  echo "6-8 skipped (task id missing from create_task response)"
fi

echo "Agent compatibility smoke completed."
