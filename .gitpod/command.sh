#!/bin/env bash

# Set environment variables.
envsubst < .env.example > .env.local

# Start dev server.
yarn dev
