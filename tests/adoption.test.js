import request from 'supertest';
import app from '../src/app.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI_TEST);
});
afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe('Adoption API', () => {
  let id;
  const sample = { user: '000000000000000000000000', pet: '000000000000000000000001' };

  it('POST /api/adoptions', async () => {
    const res = await request(app).post('/api/adoptions').send(sample);
    expect(res.statusCode).toBe(201);
    expect(res.body.payload).toHaveProperty('_id');
    id = res.body.payload._id;
  });

  it('GET /api/adoptions', async () => {
    const res = await request(app).get('/api/adoptions');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.payload)).toBe(true);
  });

  it('GET /api/adoptions/:id', async () => {
    const res = await request(app).get(`/api/adoptions/${id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.payload._id).toBe(id);
  });

  it('PUT /api/adoptions/:id', async () => {
    const res = await request(app).put(`/api/adoptions/${id}`).send({});
    expect(res.statusCode).toBe(200);
  });

  it('DELETE /api/adoptions/:id', async () => {
    const res = await request(app).delete(`/api/adoptions/${id}`);
    expect(res.statusCode).toBe(200);
  });
});