.PHONY: help run run-backend run-frontend build clean install check-versions check-node check-go

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Available targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  %-15s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

check-node: ## Check Node.js version
	@echo "Checking Node.js version..."
	@node_version=$$(node -v 2>/dev/null | sed 's/v//' | cut -d. -f1,2); \
	if [ -z "$$node_version" ]; then \
		echo "ERROR: Node.js is not installed"; \
		exit 1; \
	fi; \
	major=$$(echo $$node_version | cut -d. -f1); \
	minor=$$(echo $$node_version | cut -d. -f2); \
	if [ $$major -lt 20 ] || ([ $$major -eq 20 ] && [ $$minor -lt 19 ]); then \
		echo "ERROR: Node.js version $$node_version is too old. Vite requires Node.js 20.19+ or 22.12+"; \
		echo "Current version: $$(node -v)"; \
		echo ""; \
		echo "Please upgrade Node.js using one of these methods:"; \
		echo "  - Using nvm: nvm install 20 && nvm use 20"; \
		echo "  - Using Homebrew: brew install node@20"; \
		echo "  - Download from: https://nodejs.org/"; \
		exit 1; \
	fi; \
	echo "✓ Node.js version $$(node -v) is compatible"

check-go: ## Check Go version
	@echo "Checking Go version..."
	@go_version=$$(go version 2>/dev/null | awk '{print $$3}' | sed 's/go//'); \
	if [ -z "$$go_version" ]; then \
		echo "ERROR: Go is not installed"; \
		exit 1; \
	fi; \
	major=$$(echo $$go_version | cut -d. -f1); \
	minor=$$(echo $$go_version | cut -d. -f2); \
	if [ $$major -lt 1 ] || ([ $$major -eq 1 ] && [ $$minor -lt 21 ]); then \
		echo "WARNING: Go version $$go_version may be too old. Recommended: Go 1.21+"; \
	else \
		echo "✓ Go version $$(go version | awk '{print $$3}') is compatible"; \
	fi

check-versions: check-node check-go ## Check all required versions

run: check-versions ## Run both backend and frontend concurrently
	@echo "Starting backend and frontend servers..."
	@trap 'kill 0' EXIT; \
	cd backend && go run ./cmd/server & \
	cd frontend && npm run dev & \
	wait

run-backend: check-go ## Run only the backend server
	@echo "Starting backend server..."
	cd backend && go run ./cmd/server

run-frontend: check-node ## Run only the frontend server
	@echo "Starting frontend server..."
	cd frontend && npm run dev

install: check-versions ## Install dependencies for both frontend and backend
	@echo "Installing frontend dependencies..."
	cd frontend && npm install
	@echo "Installing backend dependencies..."
	cd backend && go mod download

build: check-versions ## Build both frontend and backend for production
	@echo "Building frontend..."
	cd frontend && npm run build
	@echo "Building backend..."
	cd backend && go build -o bin/server ./cmd/server

clean: ## Clean build artifacts
	@echo "Cleaning build artifacts..."
	rm -rf frontend/dist
	rm -rf backend/bin
	rm -rf frontend/node_modules/.vite

test-backend: ## Run backend tests
	cd backend && go test ./...

test-frontend: check-node ## Run frontend tests
	cd frontend && npm test

