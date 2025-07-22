import { Router } from 'express';
import {
  mockingPets,
  mockingUsers,
  generateData
} from '../controllers/mock.controller.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Mocks
 *     description: Endpoints para generar datos de prueba
 */

/**
 * @swagger
 * /api/mocks/mockingpets:
 *   get:
 *     summary: Genera 20 mascotas de ejemplo en BD
 *     tags: [Mocks]
 *     responses:
 *       200:
 *         description: Resultado de la inserción
 */
router.get('/mockingpets', mockingPets);

/**
 * @swagger
 * /api/mocks/mockingusers:
 *   get:
 *     summary: Genera 50 usuarios de ejemplo en memoria
 *     tags: [Mocks]
 *     parameters:
 *       - in: query
 *         name: count
 *         schema:
 *           type: integer
 *           default: 50
 *         description: Cantidad de usuarios a generar
 *     responses:
 *       200:
 *         description: Lista de usuarios generados
 */
router.get('/mockingusers', mockingUsers);

/**
 * @swagger
 * /api/mocks/generateData:
 *   post:
 *     summary: Genera usuarios y mascotas según el body
 *     tags: [Mocks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               users:
 *                 type: integer
 *               pets:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Resultado de la inserción
 */
router.post('/generateData', generateData);

export default router;
