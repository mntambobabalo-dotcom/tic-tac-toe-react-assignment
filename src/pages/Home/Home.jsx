import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { Container, Subtitle, Title } from '../../styles/General.styled';

function Home() {
  const navigate = useNavigate();

  return (
    <Container columnBased>
      <Title>TicTacToe</Title>
      <Subtitle>Play with a friend — highest score wins.</Subtitle>
      <Button onClick={() => navigate('/game-on')}>Play Now</Button>
    </Container>
  );
}

export default Home;
