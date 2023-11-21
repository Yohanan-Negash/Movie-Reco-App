import styled from 'styled-components';

const Container = styled.div`
  margin-top: 20px;
`;
function MovieDetails({ title, overview, releaseDate, posterPath }) {
  return (
    <Container>
      <h2>{title}</h2>
      <img src={posterPath} alt={title} />
      <p>{overview}</p>
      <p>Release Data: {releaseDate}</p>
    </Container>
  );
}

export default MovieDetails;
