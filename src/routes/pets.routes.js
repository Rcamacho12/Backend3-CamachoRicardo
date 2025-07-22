import { Router } from 'express';
import Pet from '../models/Pet.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Pets
 *     description: Endpoints para gestionar mascotas
 */

/**
 * @swagger
 * /api/pets:
 *   get:
 *     summary: Obtiene todas las mascotas
 *     tags: [Pets]
 *     responses:
 *       200:
 *         description: Lista de mascotas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 payload:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Pet'
 */
router.get('/', async (req, res) => {
  const pets = await Pet.find();
  res.json({ status: 'success', payload: pets });
});

export default router;
