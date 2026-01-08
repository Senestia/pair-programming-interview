package main

import (
	"fmt"
	"log"

	"backend/internal/config"
	"backend/internal/router"
)

func main() {
	// Load configuration
	cfg := config.Load()

	// Setup router
	r := router.Setup(cfg)

	// Start server
	addr := fmt.Sprintf(":%s", cfg.ServerPort)
	log.Printf("Server starting on %s", addr)
	if err := r.Run(addr); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}
