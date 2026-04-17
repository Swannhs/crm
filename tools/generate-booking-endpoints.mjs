// Helper to generate KrakenD endpoint configurations for booking service
// Usage: Manually add these endpoints to gateway/krakend/krakend.json before the closing ]

const bookingServiceEndpoints = [
  // Booking Types - Public (no auth needed, but we filter in service)
  {
    endpoint: "/api/booking/booking-types",
    method: "GET",
    backend_url: "/v1/booking-types",
    requires_auth: true
  },
  {
    endpoint: "/api/booking/booking-types-count",
    method: "GET",
    backend_url: "/v1/booking-types-count",
    requires_auth: true
  },
  {
    endpoint: "/api/booking/booking-types/{link}",
    method: "GET",
    backend_url: "/v1/booking-types/{link}",
    requires_auth: false
  },
  {
    endpoint: "/api/booking/booking-types-id/{id}",
    method: "GET",
    backend_url: "/v1/booking-types-id/{id}",
    requires_auth: false
  },
  {
    endpoint: "/api/booking/booking-types",
    method: "POST",
    backend_url: "/v1/booking-types",
    requires_auth: true
  },
  {
    endpoint: "/api/booking/booking-types/{id}",
    method: "PUT",
    backend_url: "/v1/booking-types/{id}",
    requires_auth: true
  },
  {
    endpoint: "/api/booking/booking-types/{id}",
    method: "DELETE",
    backend_url: "/v1/booking-types/{id}",
    requires_auth: true
  },
  {
    endpoint: "/api/booking/booking-types-multi",
    method: "GET",
    backend_url: "/v1/booking-types-multi",
    requires_auth: false
  },

  // Booking Groups
  {
    endpoint: "/api/booking/booking-group",
    method: "POST",
    backend_url: "/v1/booking-group",
    requires_auth: true
  },
  {
    endpoint: "/api/booking/booking-group/{id}",
    method: "PUT",
    backend_url: "/v1/booking-group/{id}",
    requires_auth: true
  },
  {
    endpoint: "/api/booking/booking-group",
    method: "GET",
    backend_url: "/v1/booking-group",
    requires_auth: true
  },
  {
    endpoint: "/api/booking/booking-group/{id}",
    method: "GET",
    backend_url: "/v1/booking-group/{id}",
    requires_auth: false
  },

  // Appointments - Public (form submissions)
  {
    endpoint: "/api/booking-appointment",
    method: "POST",
    backend_url: "/v1/appointments",
    requires_auth: false
  },

  // Appointments - User
  {
    endpoint: "/api/booking-appointment/user",
    method: "POST",
    backend_url: "/v1/appointments/user",
    requires_auth: true
  },
  {
    endpoint: "/api/booking-appointment/bulk",
    method: "POST",
    backend_url: "/v1/appointments/bulk",
    requires_auth: true
  },
  {
    endpoint: "/api/booking-appointment/bulk-membership",
    method: "POST",
    backend_url: "/v1/appointments/bulk-membership",
    requires_auth: true
  },
  {
    endpoint: "/api/booking-appointment/insert-bulk-group",
    method: "POST",
    backend_url: "/v1/appointments/insert-bulk-group",
    requires_auth: false
  },
  {
    endpoint: "/api/booking-appointment/multi-service",
    method: "POST",
    backend_url: "/v1/appointments/multi-service",
    requires_auth: false
  },
  {
    endpoint: "/api/booking-appointment/{id}",
    method: "PUT",
    backend_url: "/v1/appointments/{id}",
    requires_auth: true
  },
  {
    endpoint: "/api/booking-appointment/delete-all/{seriesId}",
    method: "PUT",
    backend_url: "/v1/appointments/delete-all/{seriesId}",
    requires_auth: true
  },
  {
    endpoint: "/api/booking-appointment/group-appointments",
    method: "GET",
    backend_url: "/v1/appointments/group-appointments",
    requires_auth: false
  },
  {
    endpoint: "/api/booking-appointment",
    method: "GET",
    backend_url: "/v1/appointments",
    requires_auth: true
  },
  {
    endpoint: "/api/booking-appointment/stats",
    method: "GET",
    backend_url: "/v1/appointments/stats",
    requires_auth: true
  },
  {
    endpoint: "/api/booking-appointment/invitedList",
    method: "GET",
    backend_url: "/v1/appointments/invitedList",
    requires_auth: true
  },
  {
    endpoint: "/api/booking-appointment/by-id/{id}",
    method: "GET",
    backend_url: "/v1/appointments/by-id/{id}",
    requires_auth: true
  },
  {
    endpoint: "/api/booking-appointment/{id}",
    method: "DELETE",
    backend_url: "/v1/appointments/{id}",
    requires_auth: true
  }
];

export function generateKrakenDEndpoint(ep) {
  const authValidatorConfig = ep.requires_auth ? {
    "auth/validator": {
      "alg": "RS256",
      "jwk_url": "http://keycloak:8080/realms/mymanager/protocol/openid-connect/certs",
      "disable_jwk_security": true,
      "cache": true,
      "propagate_claims": [
        ["sub", "X-User-Id"],
        ["org_id", "X-Org-Id"]
      ]
    }
  } : {};

  return {
    endpoint: ep.endpoint,
    method: ep.method,
    input_headers: [
      "Authorization",
      ...(["POST", "PUT", "PATCH"].includes(ep.method) ? ["Content-Type"] : []),
      ...(ep.requires_auth ? ["X-User-Id", "X-Org-Id"] : [])
    ],
    ...(Object.keys(authValidatorConfig).length > 0 ? { extra_config: authValidatorConfig } : {}),
    backend: [
      {
        host: ["http://booking-service:7040"],
        url_pattern: ep.backend_url,
        ...(Object.keys(authValidatorConfig).length > 0 ? { extra_config: { "auth/validator": {} } } : {})
      }
    ]
  };
}

console.log("# Booking Service KrakenD Endpoints");
console.log("Add these to gateway/krakend/krakend.json endpoints array:\n");
console.log(JSON.stringify(bookingServiceEndpoints.map(generateKrakenDEndpoint), null, 2));
