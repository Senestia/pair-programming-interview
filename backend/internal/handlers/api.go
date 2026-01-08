package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// APIHandler handles API requests
type APIHandler struct{}

// NewAPIHandler creates a new API handler
func NewAPIHandler() *APIHandler {
	return &APIHandler{}
}

// Hello handles GET /api/hello
func (h *APIHandler) Hello(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Hello from Go backend!",
	})
}

