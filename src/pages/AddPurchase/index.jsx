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

function AddPurchase() {
  return (
    <>
      <Header />
      <Aside />
      <Main>
        <TitlePage>Adicionar Compra</TitlePage>
        <NameInput />
        <SelectCategory>
          <option value="" hidden>
            Selecione o Fornecedor
          </option>
          <option value="nike">Nike</option>
          <option value="adidas">Adidas</option>
        </SelectCategory>
        <CostInput />
        <QuantityInput />
        <SaveButton>Cadastrar</SaveButton>
      </Main>
    </>
  );
}

export default AddPurchase;
