import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchWeatherData = async (location, date = null) => {
  try {
    const endpoint = date ? 'historical' : 'current';
    const url = `${API_BASE_URL}${endpoint}`;
    const params = { access_key: API_KEY, query: location };

    if (date) {
      params.historical_date = date;
    }

    const response = await axios.get(url, { params });

    if (response.data.error) {
      throw new Error(response.data.error.info);
    }
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    throw error;
  }
};
