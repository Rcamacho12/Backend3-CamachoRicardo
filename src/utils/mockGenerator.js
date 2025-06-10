import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

const roles = ['user','admin'];

export function generateUsers(count=50) {
  const users = [];
  for (let i=0; i<count; i++) {
    const firstName = `User${i}`;
    const lastName  = `Mock${i}`;
    const email     = `user${i}@mock.com`;
    const pwdHash   = bcrypt.hashSync('coder123', 10);
    const role      = roles[Math.floor(Math.random()*roles.length)];
    users.push({
      _id:        uuid(),
      firstName,
      lastName,
      email,
      password:   pwdHash,
      role,
      pets:       []
    });
  }
  return users;
}

export function generatePets(count=20) {
  const pets = [];
  for (let i=0; i<count; i++) {
    pets.push({
      _id: uuid(),
      name: `Pet${i}`,
      type: 'dog',
      owner: null
    });
  }
  return pets;
}
