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

function Sales() {
  const history = useHistory();
  return (
    <>
      <Header />
      <Aside />
      <Main>
        <PageTitle>LISTA DE VENDAS</PageTitle>
        <SalesList>
          <Sale>
            <Name>Nome do produto</Name>
            <ClientName>Nome do cliente</ClientName>
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
          onClick={ () => history.push('/sales/add') }
        />
      </Main>
    </>
  );
}

export default Sales;
