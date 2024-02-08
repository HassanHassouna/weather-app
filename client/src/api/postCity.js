import axios from 'axios'

export const postCity = async (city) => {
    const response = await axios.post(`http://localhost:4200/api/v1/cities`, city);
    return response.data
};

