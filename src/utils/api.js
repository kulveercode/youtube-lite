import axios from "axios";

const BASE_URL="https://youtube-search-results.p.rapidapi.com";

const options = {
  params: { hl:"en" , gl:"US" },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
  }
};

const fetchDataFromApi= async(url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}` , options);
    return data;
}
