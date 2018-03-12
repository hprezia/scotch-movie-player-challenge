import axios from 'axios';

const url = 'https://scotch-mvplayer-api.herokuapp.com/api/v1';

export async function getMovies() {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.error(error);
  }
}
