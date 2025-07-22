import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
const roles = ['user','admin'];
export function generateUsers(count=50) {
  return Array.from({ length: count }, (_, i) => ({
    _id: uuid(),
    firstName: `User${i}`,
    lastName: `Mock${i}`,
    email: `user${i}@mock.com`, 
    password: bcrypt.hashSync('coder123', 10),
    role: roles[Math.floor(Math.random()*roles.length)],
    pets: []
  }));
}
export function generatePets(count=20) {
  return Array.from({ length: count }, (_, i) => ({
    _id: uuid(),
    name: `Pet${i}`,
    type: 'dog',
    owner: null
  }));
}