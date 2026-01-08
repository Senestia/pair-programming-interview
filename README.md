# Starfall Ledger

**Starfall Ledger** is a comprehensive Wikipedia-style application dedicated to documenting and exploring meteorites, space debris, and cosmic particles. The platform provides detailed information about different types of meteorites, their compositions, origins, and the relationship between space debris and meteorites.

## About the Business

Starfall Ledger serves as an educational and research resource for:
- **Researchers and Scientists**: Access detailed classifications and compositions of meteorites
- **Students and Educators**: Learn about space objects and their impact on Earth
- **Space Enthusiasts**: Explore fascinating information about meteorites and space particles
- **Collectors**: Reference guide for meteorite identification and classification

### Key Features

- **Meteorite Types Catalog**: Comprehensive database of meteorite classifications (Iron, Stony, Chondrite, Achondrite, Pallasite, Stony-Iron, Martian, Lunar, Tektite, and Space Debris)
- **Space Objects Database**: Detailed information about individual meteorites and space debris including:
  - Composition analysis
  - Mass measurements
  - Radioactive status
  - Origin information
- **Neumorphic UI Design**: Modern, soft-shadow design system for an elegant user experience
- **Responsive Design**: Fully accessible on desktop, tablet, and mobile devices

## Project Structure

```
.
├── frontend/          # React application (Vite)
├── backend/          # Go backend (Gin)
├── Makefile          # Convenient commands to run the project
└── README.md
```

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** v20.19+ or v22.12+ (required for Vite 7.x)
- **Go** v1.21 or higher (recommended: v1.21+)
- **npm** (comes with Node.js) or **yarn**
- **make** (for using the Makefile)

## Installation Guide

### Installing Node.js

**Required Version:** Node.js v20.19+ or v22.12+

#### Option 1: Using nvm (Recommended - Node Version Manager)

nvm allows you to easily switch between Node.js versions:

1. **Install nvm:**
   - **macOS/Linux:** Follow instructions at [nvm GitHub](https://github.com/nvm-sh/nvm#installing-and-updating)
   - **Windows:** Use [nvm-windows](https://github.com/coreybutler/nvm-windows)

2. **Install Node.js v20:**
   ```bash
   nvm install 20
   nvm use 20
   ```

3. **Verify installation:**
   ```bash
   node --version  # Should show v20.19.0 or higher
   npm --version   # Should show npm version
   ```

#### Option 2: Direct Download

1. **Download Node.js:**
   - Visit [Node.js Official Website](https://nodejs.org/)
   - Download the LTS version (v20.x or v22.x)
   - Choose the installer for your operating system:
     - [macOS Installer](https://nodejs.org/en/download/)
     - [Windows Installer](https://nodejs.org/en/download/)
     - [Linux Binaries](https://nodejs.org/en/download/)

2. **Install:**
   - Run the installer and follow the setup wizard
   - Ensure "Add to PATH" is checked during installation

3. **Verify installation:**
   ```bash
   node --version  # Should show v20.19.0+ or v22.12.0+
   npm --version
   ```

**Reference Links:**
- [Node.js Official Website](https://nodejs.org/)
- [Node.js Downloads](https://nodejs.org/en/download/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Vite Requirements](https://vite.dev/guide/#browser-support)

### Installing Go

**Required Version:** Go v1.21 or higher (recommended: latest stable version)

#### Option 1: Official Installer

1. **Download Go:**
   - Visit [Go Official Website](https://go.dev/)
   - Go to [Downloads Page](https://go.dev/dl/)
   - Download the installer for your operating system:
     - **macOS:** `.pkg` installer
     - **Windows:** `.msi` installer
     - **Linux:** `.tar.gz` archive

2. **Install:**
   - **macOS/Windows:** Run the installer and follow the wizard
   - **Linux:** Extract the archive and follow [Linux installation instructions](https://go.dev/doc/install)

3. **Verify installation:**
   ```bash
   go version  # Should show go version go1.21.x or higher
   ```

#### Option 2: Using Package Managers

**macOS (Homebrew):**
```bash
brew install go
```

**Linux (apt):**
```bash
sudo apt update
sudo apt install golang-go
```

**Linux (yum):**
```bash
sudo yum install golang
```

**Windows (Chocolatey):**
```bash
choco install golang
```

4. **Set up Go workspace (if needed):**
   ```bash
   mkdir -p ~/go/{bin,pkg,src}
   export GOPATH=$HOME/go
   export PATH=$PATH:$GOPATH/bin
   ```

**Reference Links:**
- [Go Official Website](https://go.dev/)
- [Go Downloads](https://go.dev/dl/)
- [Go Installation Guide](https://go.dev/doc/install)
- [Go Documentation](https://go.dev/doc/)

### Installing Make

**macOS:**
- Make is pre-installed. Verify with: `make --version`

**Linux:**
```bash
sudo apt install build-essential  # Ubuntu/Debian
sudo yum groupinstall "Development Tools"  # CentOS/RHEL
```

**Windows:**
- Install [Chocolatey](https://chocolatey.org/), then:
  ```bash
  choco install make
  ```
- Or use [GnuWin32 Make](http://gnuwin32.sourceforge.net/packages/make.htm)
- Or use WSL (Windows Subsystem for Linux)

**Reference Links:**
- [GNU Make Manual](https://www.gnu.org/software/make/manual/)
- [Chocolatey](https://chocolatey.org/)

### Installing Project Dependencies

Once you have Node.js and Go installed, install the project dependencies:

#### Frontend Dependencies

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install npm packages:**
   ```bash
   npm install
   ```

   This will install:
   - **React 19.2.0** - UI library
   - **React DOM 19.2.0** - React rendering
   - **React Router DOM 7.11.0** - Client-side routing
   - **Vite 7.2.4** - Build tool and dev server
   - **ESLint** - Code linting
   - And other development dependencies

#### Backend Dependencies

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Download Go modules:**
   ```bash
   go mod download
   ```

   This will download:
   - **Gin v1.11.0** - Web framework
   - And all required dependencies

#### Using Makefile (All Dependencies)

From the project root, run:
```bash
make install
```

This will install dependencies for both frontend and backend automatically.

**Reference Links:**
- [npm Documentation](https://docs.npmjs.com/)
- [Go Modules Documentation](https://go.dev/ref/mod)
- [React Documentation](https://react.dev/)
- [Gin Framework](https://gin-gonic.com/)

### Verify Installation

After installing all prerequisites, verify everything is set up correctly:

```bash
# Check Node.js version (should be v20.19+ or v22.12+)
node --version

# Check npm version
npm --version

# Check Go version (should be v1.21+)
go version

# Check make (optional, for Makefile commands)
make --version
```

**Expected Output Example:**
```
node --version  # v20.19.0 or v22.12.0+
npm --version   # 10.x.x or 11.x.x
go version      # go version go1.21.x or higher
make --version  # GNU Make 4.x
```

## Getting Started

### Quick Start (Recommended)

The easiest way to run the entire system is using the Makefile:

1. **Install dependencies:**
   ```bash
   make install
   ```

2. **Run both frontend and backend:**
   ```bash
   make run
   ```

   This will start:
   - Backend server at `http://localhost:8080`
   - Frontend dev server at `http://localhost:5173`

3. **Stop the servers:** Press `Ctrl+C` to stop both servers.

### Available Make Commands

```bash
make help              # Show all available commands
make run               # Run both backend and frontend concurrently
make run-backend       # Run only the backend server
make run-frontend      # Run only the frontend server
make install           # Install dependencies for both projects
make build             # Build both for production
make clean             # Clean build artifacts
make check-versions    # Check if Node.js and Go versions are compatible
```

### Manual Setup (Alternative)

If you prefer to run services manually:

#### Frontend

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The frontend will be available at `http://localhost:5173`.

#### Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   go mod download
   ```

3. Run the server:
   ```bash
   go run ./cmd/server
   ```

   The backend will be available at `http://localhost:8080`.

## Architecture

### Frontend Architecture

The frontend is built with **React** and **Vite**, following atomic design principles and component-based architecture.

#### Technology Stack
- **React 19**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **React Router**: Client-side routing
- **CSS Modules**: Scoped styling with neumorphic design system

#### Project Structure

```
frontend/src/
├── components/
│   ├── molecules/          # Reusable molecule components
│   │   ├── card/          # Generic card component
│   │   ├── footer/        # Footer component
│   │   ├── meteorite-card/ # Meteorite-specific card
│   │   ├── navigation/    # Navigation bar
│   │   └── topic-card/    # Topic card component
│   └── pages/             # Page components
│       ├── home/          # Home page
│       ├── meteorite-types/ # Meteorite types listing
│       └── space-debris-meteorites/ # Space objects listing
├── data/                  # Static data files (JSON)
├── App.jsx               # Root component
├── main.jsx              # Application entry point
└── routes.jsx            # Route configuration
```

#### Design System

**Neumorphic Design**: The application uses a consistent neumorphic (soft UI) design system with:
- Background color: `#e0e5ec`
- Text color: `#555a7a`
- Soft shadows creating depth and elevation
- Inset shadows for pressed/active states
- Smooth transitions and hover effects

#### Component Hierarchy

1. **Pages**: Top-level route components (Home, MeteoriteTypes, SpaceDebrisMeteorites)
2. **Molecules**: Reusable components (Card, MeteoriteCard, Navigation, Footer)
3. **Atoms**: Basic building blocks (handled by CSS modules)

#### Key Features

- **Component Reusability**: Molecules can be composed and reused across pages
- **CSS Modules**: Scoped styling prevents style conflicts
- **Responsive Design**: Mobile-first approach with breakpoints
- **Type Safety**: Props-based component interfaces

### Backend Architecture

The backend is built with **Go** and **Gin**, following idiomatic Go project structure and best practices.

#### Technology Stack
- **Go 1.21+**: Modern Go with modules
- **Gin**: High-performance HTTP web framework
- **Standard Library**: Minimal external dependencies

#### Project Structure

```
backend/
├── cmd/
│   └── server/          # Application entry point
│       └── main.go      # Main function
├── internal/            # Private application code
│   ├── config/         # Configuration management
│   ├── fixtures/       # Sample data (JSON)
│   ├── handlers/       # HTTP request handlers
│   ├── middleware/     # HTTP middleware
│   └── router/         # Router setup
├── go.mod
└── go.sum
```

#### Architecture Principles

1. **Separation of Concerns**: Clear boundaries between handlers, middleware, and routing
2. **Internal Packages**: Private code that cannot be imported externally
3. **Handler Structs**: Object-oriented handlers with methods
4. **Middleware Chain**: Reusable middleware functions (CORS, logging, etc.)
5. **Configuration Management**: Centralized config with environment variable support

#### Package Structure

- **`cmd/server/`**: Application entry point following Go conventions
- **`internal/config/`**: Configuration loading from environment variables
- **`internal/handlers/`**: HTTP handlers organized by domain
  - `health.go`: Health check endpoint
  - `api.go`: API endpoints
- **`internal/middleware/`**: Reusable middleware
  - `cors.go`: CORS configuration for frontend communication
- **`internal/router/`**: Router setup and route definitions
- **`internal/fixtures/`**: Sample data files for development

#### API Design

- **RESTful**: Following REST principles
- **CORS Enabled**: Configured for frontend communication
- **Health Checks**: `/health` endpoint for monitoring
- **Extensible**: Easy to add new endpoints and handlers

## API Endpoints

- `GET /health` - Health check endpoint
- `GET /api/hello` - Example API endpoint

## Development

### Frontend Development

- **Hot Module Replacement**: Instant updates during development
- **Vite Dev Server**: Fast refresh and optimized builds
- **Proxy Configuration**: API requests proxied to backend during development

### Backend Development

- **Gin Framework**: Fast HTTP router and middleware
- **CORS Middleware**: Enabled for frontend communication
- **Environment-based Configuration**: Development and production modes

## Building for Production

### Using Makefile (Recommended)
```bash
make build
```

This will build both frontend and backend. The outputs will be:
- Frontend: `frontend/dist/`
- Backend: `backend/bin/server`

### Manual Build

#### Frontend
```bash
cd frontend
npm run build
```

The production build will be in `frontend/dist/`.

#### Backend
```bash
cd backend
go build -o bin/server ./cmd/server
```

The binary will be in `backend/bin/server`.

## Environment Variables

### Backend

- `PORT`: Server port (default: 8080)
- `ENV`: Environment mode - `development` or `production` (default: development)

Example:
```bash
PORT=3000 ENV=production go run ./cmd/server
```

## Adding New Features

### Frontend

1. **New Page**: Create a new component in `frontend/src/components/pages/`
2. **New Molecule**: Create reusable components in `frontend/src/components/molecules/`
3. **New Route**: Add route in `frontend/src/routes.jsx`
4. **Styling**: Use CSS modules with neumorphic design patterns

### Backend

1. **New Handler**: Create a new file in `internal/handlers/` or add to an existing handler file
2. **New Route**: Add route definitions in `internal/router/router.go`
3. **New Middleware**: Create middleware in `internal/middleware/`
4. **Configuration**: Add new config fields in `internal/config/config.go`

## Contributing

When contributing to this project:

1. Follow the existing architecture patterns
2. Maintain the neumorphic design system consistency
3. Write reusable components (molecules) when possible
4. Follow Go idioms and best practices for backend code
5. Ensure responsive design for all new components

## License

This project is part of a pair programming interview exercise.
