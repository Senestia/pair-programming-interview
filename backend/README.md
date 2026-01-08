# Backend - Go with Gin

This is the backend service built with Go and the Gin web framework, following idiomatic Go project structure.

## Project Structure

```
backend/
├── cmd/
│   └── server/          # Application entry point
│       └── main.go      # Main function
├── internal/            # Private application code
│   ├── config/          # Configuration management
│   ├── handlers/        # HTTP request handlers
│   ├── middleware/      # HTTP middleware
│   └── router/          # Router setup and route definitions
├── go.mod
└── go.sum
```

## Structure Explanation

### `cmd/server/`
Contains the main application entry point. This follows the Go standard of placing main packages in `cmd/` subdirectories.

### `internal/`
Private application code that cannot be imported by other applications. This package is enforced by the Go compiler.

- **`config/`**: Configuration loading and management
- **`handlers/`**: HTTP handlers organized by domain/feature
- **`middleware/`**: Reusable middleware functions (CORS, logging, etc.)
- **`router/`**: Router setup, route definitions, and middleware registration

## Running

### Development
```bash
go run ./cmd/server
```

Or using the Makefile from the root:
```bash
make run-backend
```

### Build
```bash
go build -o bin/server ./cmd/server
```

### Environment Variables

- `PORT`: Server port (default: 8080)
- `ENV`: Environment mode - `development` or `production` (default: development)

Example:
```bash
PORT=3000 ENV=production go run ./cmd/server
```

## API Endpoints

- `GET /health` - Health check endpoint
- `GET /api/hello` - Example API endpoint

## Adding New Features

1. **New Handler**: Create a new file in `internal/handlers/` or add to an existing handler file
2. **New Route**: Add route definitions in `internal/router/router.go`
3. **New Middleware**: Create middleware in `internal/middleware/`
4. **Configuration**: Add new config fields in `internal/config/config.go`

