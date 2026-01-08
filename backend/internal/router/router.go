package router

import (
	"backend/internal/config"
	"backend/internal/handlers"
	"backend/internal/middleware"

	"github.com/gin-gonic/gin"
)

// Setup creates and configures the Gin router
func Setup(cfg *config.Config) *gin.Engine {
	// Set Gin mode based on environment
	if cfg.Env == "production" {
		gin.SetMode(gin.ReleaseMode)
	}

	r := gin.Default()

	// Apply middleware
	r.Use(middleware.CORS())

	// Initialize handlers
	healthHandler := handlers.NewHealthHandler()
	apiHandler := handlers.NewAPIHandler()

	// Health check route
	r.GET("/health", healthHandler.Check)

	// API routes
	api := r.Group("/api")
	{
		api.GET("/hello", apiHandler.Hello)
	}

	return r
}

