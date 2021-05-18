#!/bin/bash

## Make sure we execute from the right dir
WORKING_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

cd "${WORKING_DIR}" || exit 1

## Build the application
npm run build

## Build the container
podman build --tag registry.digitalocean.com/studiorc/server-one:studiorclv-latest .

## Push to the registry
podman push registry.digitalocean.com/studiorc/server-one:studiorclv-latest