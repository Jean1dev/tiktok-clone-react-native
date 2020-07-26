import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { Container } from './styles';

const Button: React.FC = () => {
  return (
      <Container>
          <Entypo name="plus" size={24} color="black" />
      </Container>
  )
}

export default Button;