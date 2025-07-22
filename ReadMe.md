# Proyecto Backend III

API de adopción de mascotas con Swagger, tests funcionales y Docker.

## Estructura
Ver árbol de carpetas.

## Swagger
Docs en `GET /api/docs`.

## Docker
```bash
# Build
docker build -t <usuario>/proyectobackend:1.0.0 .
# Push
docker push <usuario>/proyectobackend:1.0.0
# Run
docker run -d -p 8080:8080 --env MONGO_URI=<mongo_uri> <usuario>/proyectobackend:1.0.0