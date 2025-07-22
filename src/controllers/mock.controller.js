import * as mockService from '../services/mock.service.js';

export const mockingPets = (req, res) => {
  mockService.insertMockData({ users:0, pets:20 })
    .then(result => res.json({ status:'success', payload: result }))
    .catch(err => res.status(500).json({ status:'error', message:err.message }));
};

export const mockingUsers = (req, res) => {
  const count = parseInt(req.query.count) || 50;
  const users = mockService.getMockingUsers(count);
  res.json({ status:'success', payload: users });
};

export const generateData = async (req, res) => {
  try {
    const result = await mockService.insertMockData(req.body);
    res.json({ status:'success', payload: result });
  } catch (err) {
    res.status(500).json({ status:'error', message: err.message });
  }
};