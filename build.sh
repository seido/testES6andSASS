#!/bin/sh

docker-compose run js bash -c 'cd /mnt/work && npm install && npm run build'
