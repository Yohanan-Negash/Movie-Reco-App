import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
`;

// eslint-disable-next-line react/prop-types
function SearchField({ value, onChange, onSearch }) {
  return (
    <Container>
      <Input
        type='text'
        value={value}
        onChange={onChange}
        placeholder='Enter a movie title'
      />
      <Button onClick={onSearch}>Search Movie</Button>
    </Container>
  );
}

export default SearchField;
