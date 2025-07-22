# Proyecto Backend III

API de adopción de mascotas con Swagger, tests funcionales y Docker.

## Configuración de Entorno

Crea un archivo `.env` en la raíz con las siguientes variables:

MONGO_URI=mongodb://localhost:27017/tu_basededatos
MONGO_URI_TEST=mongodb://localhost:27017/tu_basededatos_test
PORT=8080

markdown
Copiar
Editar

También puedes usar el ejemplo `.env.example` incluido.

## Estructura

proyectobackendiii/
├── Dockerfile
├── ReadMe.md
├── package.json
├── .env.example
├── tests/
│ └── adoption.test.js
└── src/
├── app.js
├── config/
│ ├── db.config.js
│ └── swagger.js
├── controllers/
│ ├── mock.controller.js
│ └── adoption.controller.js
├── models/
│ ├── Pet.js
│ ├── User.js
│ └── Adoption.js
├── routes/
│ ├── mocks.routes.js
│ ├── pets.routes.js
│ ├── users.routes.js
│ └── adoption.routes.js
├── services/
│ ├── mock.service.js
│ └── adoption.service.js
└── utils/
└── mockGenerator.js

shell
Copiar
Editar

## Swagger

Accede a la documentación en:

GET http://localhost:8080/api/docs

bash
Copiar
Editar

## Docker

```bash
# Construir la imagen
docker build -t <tu_usuario>/proyectobackend:1.0.0 .

# Subir a Docker Hub
docker push <tu_usuario>/proyectobackend:1.0.0

# Ejecutar el contenedor
docker run -d -p 8080:8080 --env MONGO_URI=<mongo_uri> <tu_usuario>/proyectobackend:1.0.0
Tests
bash
Copiar
Editar
npm test
Imagen en Docker Hub
https://hub.docker.com/r/<tu_usuario>/proyectobackend

Copiar
Editar






