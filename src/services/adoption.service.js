import Adoption from '../models/Adoption.js';
export const getAllAdoptions = () => Adoption.find().populate('pet user');
export const getAdoptionById = id => Adoption.findById(id).populate('pet user');
export const createAdoption = data => Adoption.create(data);
export const updateAdoption = (id, data) => Adoption.findByIdAndUpdate(id, data, { new: true });
export const deleteAdoption = id => Adoption.findByIdAndDelete(id);