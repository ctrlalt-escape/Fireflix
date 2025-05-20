// src/components/MovieModal.tsx
import { FC, useEffect, useRef, useState } from 'react';
import { Movie } from '../utils/fetchMovies';

interface Props {
  movie: Movie | null;
  onClose: () => void;
}

const MovieModal: FC<Props> = ({ movie, onClose }) => {
  const [showPlayer, setShowPlayer] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setShowPlayer(false);
  }, [movie]);

  if (!movie) return null;

  const handlePlay = () => {
    audioRef.current?.play();
    setShowPlayer(true);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#0b0b16] z-[1000] p-10 overflow-hidden">
      <button
        onClick={() => {
          audioRef.current?.pause();
          audioRef.current?.currentTime && (audioRef.current.currentTime = 0);
          onClose();
        }}
        className="absolute top-5 left-5 text-white text-xl bg-purple-700 hover:bg-purple-800 p-3 rounded-full shadow-lg transition-transform hover:scale-110"
      >
        <i className="fas fa-arrow-left"></i>
      </button>

      <audio ref={audioRef} src="https://www.example.com/movie-audio.mp3" />

      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="absolute top-10 right-10 w-[300px] h-[400px] object-cover rounded-3xl shadow-2xl"
      />

      <div className="text-center mt-10 text-3xl font-bold">{movie.title}</div>

      <div className="flex justify-center mt-6">
        <button
          onClick={handlePlay}
          className="bg-red-500 hover:bg-red-600 text-white text-lg font-semibold px-8 py-3 rounded-full flex items-center gap-2 transition-transform hover:scale-105"
        >
          <i className="fas fa-play"></i> Play
        </button>
      </div>

      {showPlayer && (
        <div className="absolute top-0 left-0 w-full h-full bg-black z-50">
          <iframe
            className="w-full h-full"
            src={`https://vidsrc.su/embed/movie/${movie.id}`}
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
};

export default MovieModal;
