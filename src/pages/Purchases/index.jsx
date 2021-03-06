import React from 'react';
import { useHistory } from 'react-router-dom';
import { AddCircle } from '@styled-icons/material';
import Aside from '../../components/Aside';
import Header from '../../components/Header';
import {
  Main,
  PageTitle,
  SalesList,
  Sale,
  Name,
  ClientName,
  Quantity,
  Price,
  Date,
} from './styles';

function Purchases() {
  const history = useHistory();
  return (
    <>
      <Header />
      <Aside />
      <Main>
        <PageTitle>LISTA DE COMPRAS</PageTitle>
        <SalesList>
          <Sale>
            <Name>Nome do produto</Name>
            <ClientName>Nome do fornecedor</ClientName>
            <Quantity>
              12 und.
            </Quantity>
            <Price>R$ 12.00,00</Price>
            <Date>13/06/2021</Date>
          </Sale>
        </SalesList>
        <AddCircle
          style={ {
            cursor: 'pointer',
            color: '#5E17EB',
            position: 'fixed',
            bottom: '20px',
            right: '20px',
          } }
          size={ 60 }
          onClick={ () => history.push('/purchases/add') }
        />
      </Main>
    </>
  );
}

export default Purchases;
