// src/components/Section.tsx
import { FC } from 'react';
import { Movie } from '../utils/fetchMovies';
import MovieCard from './MovieCard';

interface Props {
  title: string;
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

const Section: FC<Props> = ({ title, movies, onSelect }) => {
  return (
    <div className="mt-10 px-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="flex overflow-x-auto gap-4 pb-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onClick={() => onSelect(movie)} />
        ))}
      </div>
    </div>
  );
};

export default Section;
