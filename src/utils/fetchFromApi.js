import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    url: BASE_URL,
    params: {
        maxResults: '50',
    },
    headers: {
        'X-RapidAPI-Key': '3ba5ea9007msh433cae3f2710b2bp1d768ejsna642d9b150ed',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)

    return data;
}