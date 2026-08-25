# API Integration Guide

1. Read the API documentation and identify endpoints, methods, parameters, responses, authentication, and rate limits.
2. Obtain credentials and store secrets in environment variables.
3. Send HTTP requests using fetch, Axios, Postman, or curl.
4. Parse and validate responses.
5. Handle errors such as 400, 401, 403, 404, 429, and 500+ responses.
6. Test success and failure scenarios.
7. Add HTTPS, monitoring, logging, timeouts, retries, and rate-limit protection as appropriate.

Example:
```http
GET /posts/1 HTTP/1.1
Host: api.example.com
Accept: application/json
Authorization: Bearer <token>
```
