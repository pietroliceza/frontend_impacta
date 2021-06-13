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

function AddEstimate() {
  return (
    <>
      <Header />
      <Aside />
      <Main>
        <TitlePage>Adicionar Orçamento</TitlePage>
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

export default AddEstimate;
