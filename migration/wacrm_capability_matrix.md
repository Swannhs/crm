# WACRM Capability Migration Matrix

This matrix tracks the migration of operational features from `wacrm/` to the MyManager microservice platform.

## Domain 1: Channel Sessions (WhatsApp & Telegram)
| Endpoint | Method | Auth | DB Tables | Target Service | Status |
|----------|--------|------|-----------|----------------|--------|
| `/api/qr/gen_qr` | POST | User | `instance` | `integrations-service` | `done` |
| `/api/qr/get_all` | GET | User | `instance` | `integrations-service` | `done` |
| `/api/qr/del_instance` | POST | User | `instance` | `integrations-service` | `done` |
| `/api/qr/change_instance_status` | POST | User | `instance` | `integrations-service` | `done` |
| `/api/telegram/send_otp` | POST | User | `web_private` | `integrations-service` | `done` |
| `/api/telegram/verify_otp` | POST | User | - | `integrations-service` | `done` |
| `/api/telegram/sessions` | GET | User | - | `integrations-service` | `done` |
| `/api/telegram/delete_session/:sessionId` | GET | User | - | `integrations-service` | `done` |

## Domain 2: Inbox & Messaging
| Endpoint | Method | Auth | DB Tables | Target Service | Status |
|----------|--------|------|-----------|----------------|--------|
| `/api/inbox/get_chats` | GET | User | `chats`, `contact` | `realtime-service` | `done` |
| `/api/inbox/get_convo` | POST | User | (JSON Files) | `realtime-service` | `done` |
| `/api/inbox/send_text` | POST | User | - | `realtime-service` | `done` |
| `/api/inbox/send_image` | POST | User | - | `realtime-service` | `done` |
| `/api/inbox/webhook/:uid` | ANY | Public | `meta_api`, `user` | `realtime-service` | `done` |

## Domain 3: Agent Management
| Endpoint | Method | Auth | DB Tables | Target Service | Status |
|----------|--------|------|-----------|----------------|--------|
| `/api/agent/add_agent` | POST | User | `agents` | `realtime-service` | `done` |
| `/api/agent/update_agent_in_chat` | POST | User | `agent_chats` | `realtime-service` | `done` |
| `/api/agent/get_my_assigned_chats` | GET | Agent | `agent_chats`, `chats` | `realtime-service` | `done` |
| `/api/agent/get_my_task` | GET | Agent | `agent_task` | `realtime-service` | `done` |

## Domain 4: Automation & Chatbots
| Endpoint | Method | Auth | DB Tables | Target Service | Status |
|----------|--------|------|-----------|----------------|--------|
| `/api/chat_flow/insert_flow_beta` | POST | User | `beta_flows` | `automation-service` | `done` |
| `/api/chat_flow/get_flows_beta` | GET | User | `beta_flows` | `automation-service` | `done` |
| `/api/chatbot/add_beta_chatbot` | POST | User | `beta_chatbot`, `beta_flows` | `automation-service` | `done` |
| `/api/wa_call/insert_flow` | POST | User | `wa_call_flows` | `automation-service` | `done` |

## Domain 5: Marketing & Broadcasts
| Endpoint | Method | Auth | DB Tables | Target Service | Status |
|----------|--------|------|-----------|----------------|--------|
| `/api/broadcast/create_template_campaign`| POST | User | `beta_campaign`, `beta_campaign_logs` | `marketing-service` | `done` |
| `/api/broadcast/dashboard` | GET | User | `beta_campaign`, `beta_campaign_logs` | `marketing-service` | `done` |
| `/api/wa_call/create_broadcast` | POST | User | `wa_call_broadcasts` | `automation-service` | `done` |
| `/api/templet/add_new` | POST | User | `templets` | `marketing-service` | `done` |

## Domain 6: CRM & Contacts
| Endpoint | Method | Auth | DB Tables | Target Service | Status |
|----------|--------|------|-----------|----------------|--------|
| `/api/phonebook/add` | POST | User | `phonebook` | `legacy-crm` | `done` |
| `/api/phonebook/import_contacts` | POST | User | `contact` | `legacy-crm` | `done` |
| `/api/phonebook/get_uid_contacts` | GET | User | `contact` | `legacy-crm` | `done` |

## Domain 7: Outbound API & AI
| Endpoint | Method | Auth | DB Tables | Target Service | Status |
|----------|--------|------|-----------|----------------|--------|
| `/api/apiv2/send-message` | POST | Token | `user`, `meta_api`, `beta_api_logs` | `integrations-service` | `missing` |
| `/api/ai/translate` | POST | User | - | `realtime-service` | `done` |
| `/api/ai/suggest_reply` | POST | User | - | `realtime-service` | `done` |

## Domain 8: User & Integration Settings
| Endpoint | Method | Auth | DB Tables | Target Service | Status |
|----------|--------|------|-----------|----------------|--------|
| `/api/user/update_meta` | POST | User | `meta_api` | `integrations-service` | `done` |
| `/api/user/update_profile` | POST | User | `user` | `identity-service` | `done` |
| `/api/user/return_media_url` | POST | User | - | `realtime-service` | `done` |
