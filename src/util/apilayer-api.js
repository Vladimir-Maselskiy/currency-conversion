import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.apilayer.com/exchangerates_data/symbols',
  headers: {
    apikey: 'v0IjMpN3LUEdX80HWlsvdyrmPNxd8j9w',
  },
};

export const getCurrecy = () => {
  return axios
    .request(options)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.error(error);
    });
};
