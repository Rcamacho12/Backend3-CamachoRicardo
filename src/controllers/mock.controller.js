import * as mockService from '../services/mocks.service.js';

export const mockingPets = (req, res) => {
  // Si ya tenías /mockingpets, reusa esta acción
  const pets = mockService.insertMockData({ users:0, pets:20 })
    .then(() => res.json({ status:'success', payload:pets }))
    .catch(err => res.status(500).json({ status:'error', message:err.message }));
};

export const mockingUsers = (req, res) => {
  const count = parseInt(req.query.count) || 50;
  const users = mockService.getMockingUsers(count);
  res.json({ status:'success', payload: users });
};

export const generateData = async (req, res) => {
  const { users, pets } = req.body;
  try {
    const result = await mockService.insertMockData({ users, pets });
    res.json({ status:'success', payload: result });
  } catch (err) {
    res.status(500).json({ status:'error', message: err.message });
  }
};
