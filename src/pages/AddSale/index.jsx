import React from 'react';
import Aside from '../../components/Aside';
import Header from '../../components/Header';
import {
  Main,
  TitlePage,
  NameInput,
  SelectCategory,
  CostInput,
  QuantityInput,
  SaveButton,
} from './styles';

function AddSale() {
  return (
    <>
      <Header />
      <Aside />
      <Main>
        <TitlePage>Adicionar Venda</TitlePage>
        <NameInput />
        <SelectCategory>
          <option value="" hidden>
            Selecione a Produto
          </option>
          <option value="vestido">Vestido Azul P</option>
          <option value="verdeGG">Vestido Verde GG</option>
        </SelectCategory>
        <QuantityInput />
        <CostInput />
        <SaveButton>Cadastrar</SaveButton>
      </Main>
    </>
  );
}

export default AddSale;
