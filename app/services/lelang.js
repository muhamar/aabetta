import FormData from 'form-data';
import axios, { axiosAuth } from './axios';

export const fetchLelang = () => {
  return axios.get('/Api_lelang/lelang');
};

export const pushTawaran = (data) => {
  return axiosAuth().then((service) => {
    const formData = new FormData();
    formData.append('id_lelang', data.id_lelang);
    formData.append('tawaran', data.tawaran);
    return service.post('/Api_lelang/tawaran', formData);
  });
};
