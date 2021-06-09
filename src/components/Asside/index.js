import React from 'react';

import { Container, NavLink } from './styles';

const Asside = () => (
  <Container>
    <NavLink to="/">Produtos</NavLink>
    <NavLink to="/">Categorias</NavLink>
    <NavLink to="/">Vendas</NavLink>
    <NavLink to="/">Compras</NavLink>
    <NavLink to="/">Orçamento</NavLink>
    <NavLink to="/">Fornecedores</NavLink>
    <NavLink to="/">Usuários</NavLink>
    <NavLink to="/">Clientes</NavLink>
    <NavLink to="/">Suporte</NavLink>
  </Container>
);

export default Asside;
