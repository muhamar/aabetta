import FormData from 'form-data';
import axios, { axiosAuth } from './axios';

export const trackTransaction = (data) => {
  return axiosAuth().then((service) => {
    return service.get('/Api_transaksi/resi?id_tawaran=' + data.id_tawaran);
  });
};

export const uploadImage = (data) => {
  return axiosAuth().then((service) => {
    let form = new FormData();
    form.append('file', data.file);
    form.append('id_tawaran', data.id_tawaran);
    return service.post('/Api_transaksi/confirm', form);
  });
};
