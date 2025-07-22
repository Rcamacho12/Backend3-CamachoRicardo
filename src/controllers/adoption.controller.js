import * as AdoptionService from '../services/adoption.service.js';

export const listAdoptions = async (req, res) => {
  try {
    const items = await AdoptionService.getAllAdoptions();
    res.json({ status: 'success', payload: items });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
};

export const getAdoption = async (req, res) => {
  try {
    const item = await AdoptionService.getAdoptionById(req.params.id);
    if (!item) return res.status(404).json({ status: 'error', message: 'No encontrado' });
    res.json({ status: 'success', payload: item });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
};

export const createAdoption = async (req, res) => {
  try {
    const newItem = await AdoptionService.createAdoption(req.body);
    res.status(201).json({ status: 'success', payload: newItem });
  } catch (err) {
    res.status(400).json({ status: 'error', message: err.message });
  }
};

export const updateAdoption = async (req, res) => {
  try {
    const updated = await AdoptionService.updateAdoption(req.params.id, req.body);
    res.json({ status: 'success', payload: updated });
  } catch (err) {
    res.status(400).json({ status: 'error', message: err.message });
  }
};

export const deleteAdoption = async (req, res) => {
  try {
    await AdoptionService.deleteAdoption(req.params.id);
    res.json({ status: 'success', message: 'Eliminado' });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
};