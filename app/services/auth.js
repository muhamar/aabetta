import FormData from 'form-data';
import axios, { axiosAuth } from './axios';

export const login = (data) => {
  const formData = new FormData();
  formData.append('username', data.username);
  formData.append('password', data.password);
  return axios.post('/Api_auth/login', formData);
};

export const register = (data) => {
  const formData = new FormData();
  formData.append('nama', data.nama);
  formData.append('username', data.username);
  formData.append('password', data.password);
  return axios.post('/Api_auth/daftar', formData);
};

export const profile = () => {
  return axiosAuth().then((service) => {
    return service.get('/Api_auth/profile');
  });
};

export const updateProfile = (data) => {
  return axiosAuth().then((service) => {
    const formData = new FormData();
    formData.append('nama', data.nama);
    formData.append('nohp', data.nohp);
    formData.append('alamat', data.alamat);
    return service.post('/Api_auth/profile', formData);
  });
};
