import React from 'react';

import { Container, Menu, Logo, Perfil } from './styles';

const Header = () => (
  <Container>
    <Menu>Menu</Menu>
    <Logo onClick={ () => alert('página principal') } />
    <Perfil onClick={ () => alert('perfil') } />
  </Container>
);

export default Header;
