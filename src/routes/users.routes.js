import { Router } from 'express';
import User from '../models/User.js';
/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */
const router = Router();
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json({ status: 'success', payload: users });
});
export default router;