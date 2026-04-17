# Migration Tracker

This is a living checklist. The monolith currently mounts `server/routes/<name>.js` under `/api/<name>/*`.

Status legend:
- `planned`: identified, not started
- `scaffolded`: service exists, endpoints stubbed
- `partial`: some endpoints implemented
- `done`: full parity (including auth + validation + persistence)

## Route Modules (Initial Cut)

| Monolith Route Module | Monolith Base Path | Target Service | Status |
|---|---|---|---|
| `contact` | `/api/contact/*` | `crm-service` (Laravel) | partial |
| `invoice` | `/api/invoice/*` | `billing-service` (Node/Express) | partial |
| `booking` | `/api/booking/*` | `booking-service` (Node/Express) | scaffolded |
| `community` | `/api/community/*` | `community-service` (Node/Express) | planned |
| `shopv2` | `/api/shopv2/*` | `commerce-service` (Node/Express) | planned |
| `user` | `/api/user/*` | `identity-service` (Keycloak + thin BFF) | planned |

## Notes

- We’ll keep KrakenD endpoints compatible with existing client calls (`/api/...`) while services evolve behind it.
- For “done”, we also need background jobs + sockets parity (monolith uses Socket.IO namespace `/${APPNAME}`).

