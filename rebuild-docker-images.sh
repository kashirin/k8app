docker build -t k8app/nodejs --no-cache -f docker/nodejs/Dockerfile .
docker build -t k8app/frontendapp --no-cache -f docker/frontend/Dockerfile .
docker build -t k8app/backendapp --no-cache -f docker/backend/Dockerfile .
docker rmi $(docker images -f dangling=true -q)
