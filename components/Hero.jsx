import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroContainer = styled.div`
  // background-image: url('../src/assets/movies.jpg');
  // background-size: cover;
  // background-positon: center;
  background: grey;
  color: #fff;
  text-align: center;
  padding: 100px 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 80px 0; /* Adjust padding for smaller screens */
  }
`;
const HeroTitle = styled.h1`
  font-size: 3rem;
  margin: 0;
  margin-bottom: 20px;
  color: black;

  @media (max-width: 768px) {
    font-size: 2rem; /* Decrease font size for smaller screens */
  }
`;
const HeroDescription = styled.p`
  font-size: 1.5rem;
  max-width: 800px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.2rem; /* Decrease font size for smaller screens */
  }
`;
const GetStartedLink = styled(Link)`
  background-color: #007bff;
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 1.2rem; /* Decrease font size for smaller screens */
  }

  &:hover {
    background-color: #0056b3;
  }
`;

function Hero() {
  return (
    <HeroContainer>
      <HeroTitle>Movie Recommendation App</HeroTitle>
      <HeroDescription>
        Imagine you are all set for a cozy movie night, but there is a big
        challenge – you can not decide which movie to watch. You have probably
        faced this situation before scrolling endlessly through streaming
        platforms, reading countless movie descriptions, and still feeling
        unsure about your choice. This struggle to find the perfect movie can be
        frustrating and time-consuming.
      </HeroDescription>
      <HeroDescription>
        The Movie Recommendation App is here to solve this movie night dilemma.
        It is like having a movie expert at your side, ready to recommend movies
        you wll love. No more hours of scrolling; this app helps you find the
        ideal movie quickly and easily. It is like having a personal movie
        advisor to make your movie nights more enjoyable and less puzzling.
      </HeroDescription>
      <GetStartedLink to='/movies'>Get Started</GetStartedLink>
    </HeroContainer>
  );
}

export default Hero;
