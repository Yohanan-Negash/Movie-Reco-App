import Navbar from '../components/Navbar';
import { useState } from 'react';
import SearchField from '../components/SearchField';
import MovieDetails from '../components/MovieDetails';

function MoviesPage() {
  const [movie, setMovie] = useState('');
  const [movieDetails, setMovieDetails] = useState(null);

  const findMovie = async () => {
    const url = `http://localhost:4000/api/movies/find?title=${movie}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.movieDetails) {
        const { title, overview, release_date, poster_path } =
          data.movieDetails;
        setMovieDetails({
          title,
          overview,
          releaseDate: release_date,
          posterPath: poster_path,
        });
      } else {
        setMovieDetails(null);
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
      {movieDetails && (
        <MovieDetails
          title={movieDetails.title}
          overview={movieDetails.overview}
          releaseDate={movieDetails.releaseDate}
          posterPath={movieDetails.posterPath}
        />
      )}
    </>
  );
}

export default MoviesPage;
