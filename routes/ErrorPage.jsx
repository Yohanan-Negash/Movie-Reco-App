import { useRouteError } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const CenteredContainer = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const ErrorContainer = styled.div`
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 30px;
  text-align: center;
  width: 80%;
  max-width: 400px;
`;
const Title = styled.h1`
  color: #333;
  font-size: 100px;
  margin: 0;
`;
const Message = styled.p`
  color: #555;
  font-size: 18px;
`;
const SubMessage = styled.i`
  color: #777;
  font-style: italic;
`;

function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <>
      <Navbar />
      <CenteredContainer>
        <ErrorContainer>
          <Title>404!</Title>
          <Message>Sorry, an unexpected error has occured.</Message>
          <SubMessage>Resource {error.statusText || error.message}!</SubMessage>
        </ErrorContainer>
      </CenteredContainer>
    </>
  );
}

export default ErrorPage;
