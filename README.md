# API Integration and Applications

## Overview
This assignment explores Application Programming Interfaces (APIs), their role in modern software development, major API styles, integration techniques, and real-world business use cases.

## 1. What is an API?
An Application Programming Interface (API) is a defined set of rules and endpoints that allows one software system to communicate with another. APIs hide implementation details and expose useful functionality or data through a predictable interface.

### Why APIs are important
- Enable communication between independent applications and services.
- Encourage reusable and modular software architecture.
- Allow organizations to expose selected capabilities securely.
- Speed up development by reusing existing services.
- Support web, mobile, IoT, cloud, and third-party integrations.

## 2. Major Types of APIs

### REST
REST (Representational State Transfer) is an architectural style commonly used with HTTP. REST APIs typically represent resources with URLs and use HTTP methods such as GET, POST, PUT/PATCH, and DELETE.

**Advantages:** simple, lightweight, cache-friendly, widely supported, and easy to consume.

### SOAP
SOAP (Simple Object Access Protocol) is a protocol that commonly uses XML messages and formal service contracts.

**Advantages:** strong standards, structured contracts, and features suitable for formal enterprise integrations.

### GraphQL
GraphQL is an API query language and runtime that lets clients request exactly the fields they need, usually through a single endpoint.

**Advantages:** flexible queries, reduced over-fetching, and a strongly typed schema.

| Feature | REST | SOAP | GraphQL |
|---|---|---|---|
| Style | Architectural style | Protocol | Query language/runtime |
| Typical format | JSON | XML | JSON responses |
| Common transport | HTTP | HTTP and others | Usually HTTP |
| Data fetching | Resource endpoints | Operations/messages | Client-selected fields |
| Best suited for | Web/mobile services | Formal enterprise services | Flexible client applications |

## 3. Benefits of API Integration
1. Connect internal systems with external services.
2. Automate repetitive business workflows.
3. Provide live information such as maps, payments, weather, or shipping status.
4. Enable partners to build on a company's platform.
5. Reduce development time and duplication.
6. Create scalable service-oriented architectures.

## 4. Steps to Integrate an API
### Step 1: Read the documentation
Identify the base URL, endpoints, HTTP methods, required parameters, request body, response format, authentication, and rate limits.

### Step 2: Obtain credentials
APIs may use API keys, OAuth 2.0 access tokens, or other credentials. Store secrets in environment variables rather than source control.

### Step 3: Make a request
Use `fetch`, Axios, Postman, or curl.

```js
const response = await fetch("https://api.example.com/users");
const data = await response.json();
```

### Step 4: Send data when required
```js
const response = await fetch("https://api.example.com/orders", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${process.env.API_TOKEN}`
  },
  body: JSON.stringify({ productId: 101, quantity: 2 })
});
```

### Step 5: Handle responses and errors
Check HTTP status codes, validate response data, and handle timeouts and network errors.

### Step 6: Test the integration
Test success, authentication failures, invalid input, rate limits, unavailable services, and unexpected responses.

### Step 7: Secure and monitor
Never expose private credentials in frontend code or GitHub. Use HTTPS, least-privilege access, logging, monitoring, retries where appropriate, and rate-limit protection.

## 5. Common API Techniques
- HTTP methods: GET, POST, PUT, PATCH, DELETE
- JSON request/response bodies
- Authorization and Content-Type headers
- API keys and OAuth 2.0
- Pagination, filtering, and sorting
- Webhooks for event notifications
- Caching
- Retry and timeout strategies
- Input validation and error handling

## 6. Real-World Business Use Cases

### Uber
A ride-hailing platform can integrate mapping/location services, payment providers, notifications, identity systems, and trip-management services. Mapping APIs can provide route information while payment APIs can process fares. The exact internal APIs used by Uber are proprietary; this is a general industry pattern.

### Amazon
An e-commerce platform can connect product catalogs, inventory, orders, payments, shipping, recommendations, and seller services through APIs. The exact internal APIs and architecture used by Amazon are proprietary; this illustrates common e-commerce API patterns.

### Other examples
- Banking: payment and account APIs
- Travel: airline, hotel, and mapping APIs
- Weather: current conditions and forecasts
- Logistics: shipping labels and tracking
- Social platforms: approved third-party integrations

## 7. Example API Application
This project includes a small Node.js demonstration that consumes a public API and displays selected results in the terminal.

### Run the example
```bash
npm start
```

The example demonstrates an HTTP GET request, JSON parsing, status checking, and error handling.

## 8. Security and Best Practices
1. Keep API secrets in `.env` files and exclude them from Git.
2. Use HTTPS.
3. Validate incoming data.
4. Apply authentication and authorization appropriately.
5. Respect provider rate limits.
6. Avoid logging sensitive credentials.
7. Handle third-party failures gracefully.
8. Keep dependencies updated.

## Conclusion
APIs are a foundation of modern software development. REST, SOAP, and GraphQL solve communication problems in different ways, while authentication, error handling, testing, and security practices make integrations reliable. Businesses use APIs to connect specialized services and deliver richer applications.
