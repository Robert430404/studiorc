# Makes a dev build
build:
	npm run build

# Makes a production build
build-prod:
	npm run build:prod

# Starts the dev server
start-dev:
	npm run start-dev

# Runs unit tests
test:
	npm run test

# Runs a lint
lint:
	npm run lint

# Deploys a fresh build to docker hub
deploy: build-prod
	@echo 'Deploying build'
	scp -r ${PWD}/dist/* studiorc-server:/root/sites/studiorclv.com