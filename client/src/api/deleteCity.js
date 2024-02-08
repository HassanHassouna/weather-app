import axios from 'axios'

export const deleteCity = async (cityName) => {
    const response = await axios.delete(`http://localhost:4200/api/v1/cities/${cityName}`);
    return response.data
};

