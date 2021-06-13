import React from 'react';

import { Container, NavLink } from './styles';

const Aside = () => (
  <Container>
    <NavLink to="/products">Produtos</NavLink>
    <NavLink to="/categories">Categorias</NavLink>
    <NavLink to="/sales">Vendas</NavLink>
    <NavLink to="/purchases">Compras</NavLink>
    <NavLink to="/">Orçamento</NavLink>
    <NavLink to="/">Fornecedores</NavLink>
    <NavLink to="/">Usuários</NavLink>
    <NavLink to="/">Clientes</NavLink>
    <NavLink>&copy; Kings of Code</NavLink>
  </Container>
);

export default Aside;
