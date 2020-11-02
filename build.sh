#!/bin/bash

# clear previous image
docker rmi robert430404/studiorclv-site:latest

# pull latest nginx image
docker pull nginx:alpine

# build the docker file
docker build -t robert430404/studiorclv-site:latest .

# push to the docker repo
docker push robert430404/studiorclv-site:latest
