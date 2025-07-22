import { Router } from 'express';
import * as AdoptionController from '../controllers/adoption.controller.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Adoption
 *     description: Operaciones de adopción
 */

/**
 * @swagger
 * /api/adoptions:
 *   get:
 *     summary: Lista todas las adopciones
 *     tags: [Adoption]
 *     responses:
 *       200:
 *         description: Lista de adopciones
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
 *                     $ref: '#/components/schemas/Adoption'
 */
router.get('/', AdoptionController.listAdoptions);

/**
 * @swagger
 * /api/adoptions/{id}:
 *   get:
 *     summary: Obtiene una adopción por ID
 *     tags: [Adoption]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la adopción
 *     responses:
 *       200:
 *         description: Datos de la adopción
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Adoption'
 *       404:
 *         description: No encontrado
 */
router.get('/:id', AdoptionController.getAdoption);

/**
 * @swagger
 * /api/adoptions:
 *   post:
 *     summary: Crea una nueva adopción
 *     tags: [Adoption]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [user, pet]
 *             properties:
 *               user:
 *                 type: string
 *               pet:
 *                 type: string
 *     responses:
 *       201:
 *         description: Adopción creada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Adoption'
 */
router.post('/', AdoptionController.createAdoption);

/**
 * @swagger
 * /api/adoptions/{id}:
 *   put:
 *     summary: Actualiza una adopción existente
 *     tags: [Adoption]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la adopción
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               date:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Adopción actualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Adoption'
 */
router.put('/:id', AdoptionController.updateAdoption);

/**
 * @swagger
 * /api/adoptions/{id}:
 *   delete:
 *     summary: Elimina una adopción
 *     tags: [Adoption]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la adopción
 *     responses:
 *       200:
 *         description: Eliminado correctamente
 */
router.delete('/:id', AdoptionController.deleteAdoption);

export default router;
