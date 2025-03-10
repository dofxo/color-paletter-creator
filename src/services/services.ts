import axios from "axios";
import { PaletteType } from "../types/types";
import { dbUrl } from "../constants/constants";

export const getPalettesList = () => {
  return axios.get(`${dbUrl}/palettes`);
};

export const getPalette = (id: string) => {
  return axios.get(`${dbUrl}/palettes/${id}`);
};

export const createPalette = (data: PaletteType) => {
  return axios.post(`${dbUrl}/palettes`, data);
};

export const deletePalette = (id: string) => {
  return axios.delete(`${dbUrl}/palettes/${id}`);
};

export const addColorToPalette = (id: string, data: PaletteType) => {
  return axios.put(`${dbUrl}/palettes/${id}`, data);
};

export const removeColor = (id: string, data: PaletteType) => {
  return axios.put(`${dbUrl}/palettes/${id}`, data);
};
