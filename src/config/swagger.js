import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Router } from 'express';

const router = Router();
const options = {
  definition: {
    openapi: '3.0.0',
    info: { title: 'API Proyecto', version: '1.0.0', description: 'Documentación de endpoints' },
  },
  apis: ['./src/routes/*.js', './src/models/*.js'],
};
const swaggerSpec = swaggerJSDoc(options);
router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
export default router;