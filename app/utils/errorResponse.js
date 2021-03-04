export const errorResponse = (e) => {
  let error = '';
  console.log(e.response.data);
  if (e.response && e.response.data) {
    if (e.response.data.pesan) {
      error = e.response.data.pesan || '';
    } else if (e.response.data.message) {
      error = e.response.data.message;
    }
  }
  if (!error) {
    error = 'Something went wrong!';
  }
  return error;
};
