import React from 'react';
import { Container } from '../../styles/General.styled';

function Details() {
  return (
    <Container columnBased>
      <h1>How to Play</h1>
      <p>Take turns placing X and O. First player to make a row, column, or diagonal wins.</p>
    </Container>
  );
}

export default Details;
