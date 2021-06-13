import React from 'react';
import Aside from '../../components/Aside';
import Header from '../../components/Header';

import {
  Main,
  TitlePage,
  NameInput,
  SaveButton,
} from './styles';

function AddCategory() {
  return (
    <>
      <Header />
      <Aside />
      <Main>
        <TitlePage>Adicionar Categoria</TitlePage>
        <NameInput />
        <SaveButton>Cadastrar</SaveButton>
      </Main>
    </>
  );
}

export default AddCategory;
