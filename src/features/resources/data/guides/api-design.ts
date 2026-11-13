import type { Resource } from "@/features/resources/types";

export const apiDesignGuide: Resource = {
  slug: "rest-api-design-basics",
  title: "REST API Design Basics",
  summary:
    "Methods and idempotency, status codes, consistent errors and cursor pagination — conventions clients can rely on.",
  category: "api",
  level: "Beginner",
  sections: [
    {
      id: "resources-and-methods",
      heading: "Resources and methods",
      blocks: [
        {
          type: "paragraph",
          text: "Name endpoints after resources (plural nouns) and let the HTTP method express the action. Idempotent methods can be retried safely after a timeout.",
        },
        {
          type: "table",
          columns: ["Method", "Example", "Purpose", "Idempotent"],
          rows: [
            ["GET", "`/users/42`", "Read a resource", "Yes"],
            ["POST", "`/users`", "Create a resource", "No"],
            ["PUT", "`/users/42`", "Replace a resource", "Yes"],
            ["PATCH", "`/users/42`", "Update some fields", "Not guaranteed"],
            ["DELETE", "`/users/42`", "Remove a resource", "Yes"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          text: "Accept an `Idempotency-Key` header on POST endpoints that charge money or send messages, so retries do not duplicate side effects.",
        },
      ],
    },
    {
      id: "status-codes",
      heading: "Status codes that carry meaning",
      blocks: [
        {
          type: "table",
          columns: ["Code", "When to return it"],
          rows: [
            ["`200 OK`", "Successful read or update with a body"],
            ["`201 Created`", "Resource created; include a `Location` header"],
            ["`204 No Content`", "Success without a body (e.g. DELETE)"],
            ["`400 Bad Request`", "Malformed request or invalid JSON"],
            ["`401 Unauthorized`", "Missing or invalid credentials"],
            ["`403 Forbidden`", "Authenticated but not allowed"],
            ["`404 Not Found`", "Resource does not exist (or is hidden)"],
            ["`409 Conflict`", "State conflict, e.g. duplicate email"],
            ["`422 Unprocessable Content`", "Valid JSON that fails validation"],
            ["`429 Too Many Requests`", "Rate limited; include `Retry-After`"],
          ],
        },
      ],
    },
    {
      id: "errors",
      heading: "One error format everywhere",
      blocks: [
        {
          type: "paragraph",
          text: "Use the same shape for every error so clients can handle them generically. RFC 9457 (Problem Details) is a widely supported standard.",
        },
        {
          type: "code",
          language: "json",
          title: "422 response",
          code: `{
  "type": "https://api.example.com/problems/validation",
  "title": "Validation failed",
  "status": 422,
  "errors": [
    { "field": "email", "message": "Must be a valid email address" }
  ]
}`,
        },
      ],
    },
    {
      id: "pagination",
      heading: "Cursor pagination",
      blocks: [
        {
          type: "paragraph",
          text: "Offset pagination (`?page=3`) skips or repeats items when rows are inserted. A cursor points at the last item seen, so pages stay stable and queries stay fast on large tables.",
        },
        {
          type: "code",
          language: "json",
          title: "GET /v1/orders?limit=2&cursor=b3JkXzEw",
          code: `{
  "data": [
    { "id": "ord_11", "total": 4900 },
    { "id": "ord_12", "total": 1200 }
  ],
  "nextCursor": "b3JkXzEy",
  "hasMore": true
}`,
        },
      ],
    },
  ],
};
