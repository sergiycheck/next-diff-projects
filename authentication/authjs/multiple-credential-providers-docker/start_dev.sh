#!/bin/sh

# docker compose -f docker-compose-dev.yml up --build
# docker compose -f docker-compose-dev.yml up 
docker compose -f docker-compose-dev.yml down --volumes
