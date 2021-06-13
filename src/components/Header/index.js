import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Menu, Logo, Perfil } from './styles';

const Header = () => {
  const history = useHistory();
  return (
    <Container>
      <Menu>Menu</Menu>
      <Logo onClick={ () => history.push('/products') } />
      <Perfil/>
    </Container>
  );
};

export default Header;
