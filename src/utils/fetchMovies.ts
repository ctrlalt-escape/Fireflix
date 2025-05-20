// src/utils/fetchMovies.ts
export interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const apiKey = '2713804610e1e236b1cf44bfac3a7776';

export default async function fetchMovies(page = 1, query = ''): Promise<Movie[]> {
  const url = query
    ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}&page=${page}`
    : `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`;

  const res = await fetch(url);
  const data = await res.json();
  return data.results;
}
