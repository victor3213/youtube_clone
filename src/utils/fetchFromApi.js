const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const axios = require("axios");

const options = {
  url: BASE_URL,
  params: {
    maxResults: '50',

  },
  headers: {
    'X-RapidAPI-Key': 'b834a4786dmsh2daa6ffa9fef776p1fd541jsn636de9dbfc92',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)

    return data
}