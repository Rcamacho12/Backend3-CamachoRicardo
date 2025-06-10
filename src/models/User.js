import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema({
  email:    String,
  firstName:String,
  lastName: String,
  password: String,
  role:     String,
  pets:     [String]
});
export default mongoose.model('User', UserSchema);
