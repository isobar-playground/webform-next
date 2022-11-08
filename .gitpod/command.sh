#!/bin/env bash

# Set environment variables.
envsubst < .env.example > .env.local

# Build app
yarn build

# Start server.
yarn start
