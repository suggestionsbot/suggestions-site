#!/bin/sh

cd /root/test
echo -e "Building server"
docker-compose build
echo -e "Built server. Starting container..."
docker-compose up-d
echo -e "Started the container"
sleep 5
