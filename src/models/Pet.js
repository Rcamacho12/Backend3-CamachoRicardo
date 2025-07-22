import mongoose from 'mongoose';

/**
 * @swagger
 * components:
 *   schemas:
 *     Pet:
 *       type: object
 *       required:
 *         - name
 *         - type
 *       properties:
 *         _id:
 *           type: string
 *           description: ID único de la mascota
 *         name:
 *           type: string
 *           description: Nombre de la mascota
 *         type:
 *           type: string
 *           description: Tipo de animal (p.ej. dog, cat)
 *         owner:
 *           type: string
 *           format: ObjectId
 *           description: ID del usuario que es propietario
 */
const PetSchema = new mongoose.Schema({
  name: String,
  type: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});
export default mongoose.model('Pet', PetSchema);
