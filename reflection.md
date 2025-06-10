# Reflection: Using Microsoft Copilot in Full-Stack Development

This project, InventoryHub, was built by integrating a Blazor WebAssembly front-end and a .NET Minimal API back-end with the assistance of Microsoft Copilot at each development stage.

## How Copilot Helped:

- **Generating Integration Code**:
  Copilot auto-completed my Blazor component logic, especially the structure of API calls using `HttpClient`.

- **Debugging**:
  It detected my incorrect endpoint `/api/products` and suggested switching to `/api/productlist`. It also recommended adding CORS headers in the API.

- **Creating JSON Structures**:
  Copilot structured nested category objects for the product model automatically, reducing manual work.

- **Optimizing Performance**:
  It flagged redundant code blocks and simplified my `OnInitializedAsync()` method. Suggested use of `JsonSerializerOptions` with `PropertyNameCaseInsensitive`.

## What I Learned:

- Copilot is not perfect, but it drastically improves productivity.
- Suggestions must be validated and tested, especially for serialization and API routes.
- It's best for scaffolding and catching repetitive errors fast.

Overall, Copilot acted like a second brain during coding, reviewing, and fixing each layer of this full-stack app.

