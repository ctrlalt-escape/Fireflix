// src/App.tsx
import { useEffect, useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Section from './components/Section';
import MovieModal from './components/MovieModal';
import fetchMovies, { Movie } from './utils/fetchMovies';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [topMovies, setTopMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const load = async () => {
      const results = await fetchMovies();
      setMovies(results);
      setTopMovies(results.sort(() => 0.5 - Math.random()).slice(0, 10));
    };
    load();
  }, []);

  useEffect(() => {
    const search = async () => {
      const results = await fetchMovies(1, searchTerm);
      setMovies(results);
    };
    if (searchTerm.length > 0) search();
    else fetchMovies().then(setMovies);
  }, [searchTerm]);

  return (
    <div>
      <audio src="/meteor.wav" autoPlay loop />
      <Header />
      <SearchBar onChange={setSearchTerm} />
      <Section title="Top 10 Today" movies={topMovies} onSelect={setSelectedMovie} />
      <Section title="All" movies={movies} onSelect={setSelectedMovie} />
      <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      <footer className="text-center py-4 bg-[#1c1c2e] text-white">&copy; 2025 FireFlix</footer>
    </div>
  );
}

export default App;
