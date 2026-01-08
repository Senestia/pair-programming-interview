package config

import (
	"os"
)

// Config holds all configuration for the application
type Config struct {
	ServerPort string
	Env        string
}

// Load returns the application configuration
func Load() *Config {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	env := os.Getenv("ENV")
	if env == "" {
		env = "development"
	}

	return &Config{
		ServerPort: port,
		Env:        env,
	}
}

