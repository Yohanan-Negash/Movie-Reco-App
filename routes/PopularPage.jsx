import Navbar from '../components/Navbar';
import MovieDetails from '../components/MovieDetails';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function PopularPage() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/movies/rated');
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setPopularMovies(data.results);
      } catch (error) {
        console.error('Error fetching popular movies:', error.message);
      }
    };

    fetchPopularMovies();
  }, []);

  return (
    <>
      <Navbar />
      <h1>Popular Movies Right Now</h1>
      <MovieContainer>
        {popularMovies.map((movie) => (
          <MovieDetails
            key={movie.id}
            title={movie.title}
            overview={movie.overview}
            releaseDate={movie.release_date}
            posterPath={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        ))}
      </MovieContainer>
    </>
  );
}

export default PopularPage;
