#!/bin/sh

cd /root/sites/suggestions-site 
echo -e "Bringing down the server..."
docker-compose down
sleep 5
echo -e "Building server..."
docker-compose build
echo -e "Built server. Starting container..."
docker-compose up -d
echo -e "Started the container..."
