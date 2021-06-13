import React from 'react';
import { useHistory } from 'react-router-dom';
import { Edit, AddCircle } from '@styled-icons/material';
import Header from '../../components/Header';
import Aside from '../../components/Aside';

import { Main, PageTitle, CategoriesList, Category } from './styles';

function Categories() {
  const history = useHistory();
  return (
    <>
      <Header />
      <Aside />
      <Main>
        <PageTitle>Categories</PageTitle>
        <CategoriesList>
          <Category>
            Nike
            <Edit
              size={ 20 }
              onClick={ () => alert('editar produto') }
              style={ { cursor: 'pointer' } }
            />
          </Category>
          <Category>
            Adidas
            <Edit
              size={ 20 }
              onClick={ () => alert('editar produto') }
              style={ { cursor: 'pointer' } }
            />

          </Category>
        </CategoriesList>
        <AddCircle
          style={ {
            cursor: 'pointer',
            color: '#5E17EB',
            position: 'fixed',
            bottom: '20px',
            right: '20px',
          } }
          size={ 60 }
          onClick={ () => history.push('/categories/add') }
        />
      </Main>
    </>

  );
}

export default Categories;
