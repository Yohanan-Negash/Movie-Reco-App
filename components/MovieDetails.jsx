import styled from 'styled-components';

const Container = styled.div`
margin-top: 5px;
margin-left: 10px; 
border: 1px solid #ddd;
border-radius: 8px;
overflow: hidden;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
width: 300px; 
max-width: 100%;
margin-right: 10px; 
flex: 0 0 auto; 
transition: transform 0.3s ease-in-out;

&:hover {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  width: 48%; 
  margin-right: 2%; 
`;
const MovieImage = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ddd;
`;

const MovieContent = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 8px;
`;

const Overview = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 12px;
`;

const ReleaseDate = styled.p`
  font-size: 0.8rem;
  color: #888;
`;

// eslint-disable-next-line react/prop-types
function MovieDetails({ title, overview, releaseDate, posterPath }) {
  return (
    <Container>
      <MovieImage src={posterPath} alt={title} />
      <MovieContent>
        <Title>{title}</Title>
        <Overview>{overview}</Overview>
        <ReleaseDate>Release Date: {releaseDate}</ReleaseDate>
      </MovieContent>
    </Container>
  );
}

export default MovieDetails;
