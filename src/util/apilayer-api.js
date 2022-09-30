import axios from 'axios';

const options = {
  headers: {
    apikey: 'v0IjMpN3LUEdX80HWlsvdyrmPNxd8j9w',
  },
};

export const getCurrecy = () => {
  return axios
    .get('https://api.apilayer.com/exchangerates_data/symbols', options)
    .then(resp => {
      console.log(resp);
      return resp;
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const getRates = () => {
  return axios
    .get('https://api.apilayer.com/exchangerates_data/latest', options)
    .then(resp => {
      console.log(resp);
      return resp;
    });
};
