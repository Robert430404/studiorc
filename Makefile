# Makes a dev build
build:
	npm run build

# Makes a production build
build-prod:
	npm run build:prod

# Starts the dev server
start-dev:
	npm run start

# Runs a lint
lint:
	npm run lint

# Deploys a fresh build to docker hub
deploy: build-prod
	# clear previous image
	docker rmi robert430404/studiorclv-site:latest

	# pull latest nginx image
	docker pull nginx:alpine

	# build the docker file
	docker build -t robert430404/studiorclv-site:latest .

	# push to the docker repo
	docker push robert430404/studiorclv-site:latest