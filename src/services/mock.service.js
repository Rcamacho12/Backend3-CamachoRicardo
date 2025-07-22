import User from '../models/User.js';
import Pet from '../models/Pet.js';
import { generateUsers, generatePets } from '../utils/mockGenerator.js';

export const getMockingUsers = (count=50) => generateUsers(count);
export const insertMockData = async ({ users=0, pets=0 }) => {
  const mockUsers = generateUsers(users);
  const mockPets = generatePets(pets);
  await User.insertMany(mockUsers);
  await Pet.insertMany(mockPets);
  return { insertedUsers: users, insertedPets: pets };
};