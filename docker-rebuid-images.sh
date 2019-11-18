docker build -t k8app/backendapp --no-cache -f docker/backend/Dockerfile .
docker build -t k8app/frontendapp --no-cache -f docker/frontend/Dockerfile .
docker rmi $(docker images -f dangling=true -q)
