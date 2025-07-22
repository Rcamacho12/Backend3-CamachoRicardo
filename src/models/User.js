import mongoose from 'mongoose';
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         email:
 *           type: string
 *         firstName:
 *           type: string
 *         lastName:
 *           type: string
 *         role:
 *           type: string
 */
const UserSchema = new mongoose.Schema({
  email: String,
  firstName: String,
  lastName: String,
  password: String,
  role: String,
  pets: [String]
});
export default mongoose.model('User', UserSchema);