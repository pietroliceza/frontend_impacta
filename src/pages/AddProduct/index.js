import React from 'react';
import Aside from '../../components/Aside';
import Header from '../../components/Header';
import { Main, TitlePage, NameInput, SelectCategory, CostInput } from './styles';

function AddProduct() {
  return (
    <>
      <Header />
      <Aside />
      <Main>
        <TitlePage>Adicionar produto</TitlePage>
        <NameInput />
        <SelectCategory>
          <option value="" hidden>
            Selecione a categoria
          </option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </SelectCategory>
        <CostInput />
      </Main>
    </>
  );
}

export default AddProduct;
