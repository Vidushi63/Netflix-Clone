const API_KEY = 'YOUR_API_KEY'; // Replace with your TMDb API key
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchMovies() {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}

async function fetchSeries() {
    const response = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}
