package handlers

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/assert"
)

func TestAPIHandler_Hello(t *testing.T) {
	// Set Gin to test mode to reduce log output
	gin.SetMode(gin.TestMode)

	// Create a new API handler
	handler := NewAPIHandler()

	// Create a Gin router
	router := gin.New()
	router.GET("/api/hello", handler.Hello)

	// Create a test HTTP request
	req, err := http.NewRequest(http.MethodGet, "/api/hello", nil)
	if err != nil {
		t.Fatalf("Failed to create request: %v", err)
	}

	// Create a response recorder
	w := httptest.NewRecorder()

	// Perform the request
	router.ServeHTTP(w, req)

	// Assert status code
	assert.Equal(t, http.StatusOK, w.Code, "Expected status code 200")

	// Parse the response body
	var response map[string]interface{}
	err = json.Unmarshal(w.Body.Bytes(), &response)
	if err != nil {
		t.Fatalf("Failed to parse response: %v", err)
	}

	// Assert response content
	assert.Equal(t, "Hello from Go backend!", response["message"], "Expected message to match")
	assert.Len(t, response, 1, "Expected response to have exactly one field")
}

func TestAPIHandler_Hello_InvalidMethod(t *testing.T) {
	// Set Gin to test mode
	gin.SetMode(gin.TestMode)

	// Create a new API handler
	handler := NewAPIHandler()

	// Create a Gin router
	router := gin.New()
	router.GET("/api/hello", handler.Hello)

	// Create a POST request (should return 404 since route doesn't exist for POST)
	req, err := http.NewRequest(http.MethodPost, "/api/hello", nil)
	if err != nil {
		t.Fatalf("Failed to create request: %v", err)
	}

	// Create a response recorder
	w := httptest.NewRecorder()

	// Perform the request
	router.ServeHTTP(w, req)

	// Assert status code (404 Not Found - Gin returns 404 for unmatched routes)
	assert.Equal(t, http.StatusNotFound, w.Code, "Expected status code 404 for POST request on GET-only route")
}
