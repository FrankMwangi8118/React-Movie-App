const API_KEY='66d550222813135b12c0a979116b82c1';
const BASE_URL="https://api.themoviedb.org/3";

export const getPopularMovies= async()=>{
    const response=await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data= await response.json()
    return data.results;
}

export const searchMovies= async()=>{
    const response=await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}
    `);
    const data= await response.json()
    return data.results;
}