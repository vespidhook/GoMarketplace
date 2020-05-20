import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { Container, EmptyCartText } from './styles';

const EmptyCart: React.FC = () => {
  return (
    <Container>
      <FeatherIcon name="slash" size={38} color="#f3f9ff" />
      <EmptyCartText>Your cart is empty</EmptyCartText>
    </Container>
  );
};

export default EmptyCart;
