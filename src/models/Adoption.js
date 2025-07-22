import mongoose from 'mongoose';

/**
 * @swagger
 * components:
 *   schemas:
 *     Adoption:
 *       type: object
 *       required:
 *         - pet
 *         - user
 *       properties:
 *         _id:
 *           type: string
 *           description: ID único de la adopción
 *         pet:
 *           type: string
 *           format: ObjectId
 *           description: ID de la mascota adoptada
 *         user:
 *           type: string
 *           format: ObjectId
 *           description: ID del usuario que adopta
 *         date:
 *           type: string
 *           format: date-time
 *           description: Fecha de adopción
 */
const AdoptionSchema = new mongoose.Schema({
  pet: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now }
});
export default mongoose.model('Adoption', AdoptionSchema);
