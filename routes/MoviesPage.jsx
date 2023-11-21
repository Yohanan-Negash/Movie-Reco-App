import Navbar from '../components/Navbar';
import { useState } from 'react';
import SearchField from '../components/SearchField';

function MoviesPage() {
  const [movie, setMovie] = useState('');
  const [movieDetails, setMovieDetails] = useState(null);

  const findMovie = async () => {
    const url = `http://localhost:4000/api/movies/find?title=${movie}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.movieDetails) {
        const { title, overview, release_date } = data.movieDetails;
        setMovieDetails({ title, overview, release_date });
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
        <div>
          <h2>{movieDetails.title}</h2>
          <p>{movieDetails.overview}</p>
          <p>Release Date: {movieDetails.release_date}</p>
        </div>
      )}
    </>
  );
}

export default MoviesPage;
