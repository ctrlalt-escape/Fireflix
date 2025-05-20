// src/components/MovieCard.tsx
import { FC } from 'react';
import { Movie } from '../utils/fetchMovies';

interface Props {
  movie: Movie;
  onClick: () => void;
}

const MovieCard: FC<Props> = ({ movie, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="min-w-[200px] rounded-xl overflow-hidden cursor-pointer transform transition-transform hover:scale-105 relative"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full rounded-xl hover:blur-sm transition"
      />
    </div>
  );
};

export default MovieCard;
