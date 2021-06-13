import React from 'react';

import { Container, NavLink } from './styles';

const Aside = () => (
  <Container>
    <NavLink to="/products">Produtos</NavLink>
    <NavLink to="/">Categorias</NavLink>
    <NavLink to="/">Vendas</NavLink>
    <NavLink to="/">Compras</NavLink>
    <NavLink to="/">Orçamento</NavLink>
    <NavLink to="/">Fornecedores</NavLink>
    <NavLink to="/">Usuários</NavLink>
    <NavLink to="/">Clientes</NavLink>
    <NavLink>&copy; Kings of Code</NavLink>
  </Container>
);

export default Aside;
