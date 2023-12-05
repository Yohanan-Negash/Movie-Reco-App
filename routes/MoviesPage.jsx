import Navbar from '../components/Navbar';
import { useState } from 'react';
import SearchField from '../components/SearchField';
import MovieDetails from '../components/MovieDetails';

function MoviesPage() {
  const [movie, setMovie] = useState('');
  const [movieDetailsList, setMovieDetailsList] = useState([]);
  const findMovie = async () => {
    const url = `http://localhost:4000/api/movies/find?title=${movie}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.movies && data.movies.length > 0) {
        setMovieDetailsList(data.movies);
      } else {
        setMovieDetailsList([]);
      }
    } catch (error) {
      console.error('There is an error', error);
    }
  };

  return (
    <>
      <Navbar />
      <SearchField
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
        onSearch={findMovie}
      />
      {movieDetailsList.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {movieDetailsList.map((movie, index) => (
            <MovieDetails
              key={index}
              title={movie.title}
              overview={movie.overview}
              releaseDate={movie.releaseDate}
              posterPath={movie.posterUrl}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default MoviesPage;
