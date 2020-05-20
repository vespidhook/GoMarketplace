import React from 'react';
import { Image, Switch } from 'react-native';

import Logo from '../../assets/logo.png';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Image source={Logo} />
    </Container>
  );
};

export default Header;
