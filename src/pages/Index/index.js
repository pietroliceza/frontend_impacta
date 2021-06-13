import React, { useState } from 'react';
import { Edit, AddCircle } from '@styled-icons/material';
import Aside from '../../components/Aside';
import Header from '../../components/Header';
import {
  Main,
  ProductSearch,
  Categories,
  Category,
  Title,
  ProductsList,
  Product,
  Name,
  Quantity,
  Price,
  ProductCategory,
  Provider,
} from './styles';

const Index = () => {
  const product = {
    name: 'Vestido simples verde P',
    quantity: 12,
    category: 'Feminino',
    provider: 'Nike',
    price: 4.120,
  };
  const [selectedFeminino, setSelectedFeminino] = useState(false);
  const [selectedInfantil, setSelectedInfantil] = useState(false);
  const [selectedMasculino, setSelectedMasculino] = useState(false);
  const [selectedUnisex, setSelectedUnisex] = useState(false);
  return (
    <>
      <Header />
      <Aside />
      <Main>
        <ProductSearch />
        <Categories>
          <Category
            selected={ selectedFeminino }
            onClick={ () => setSelectedFeminino(!selectedFeminino) }
          >
            Feminino
          </Category>
          <Category
            selected={ selectedInfantil }
            onClick={ () => setSelectedInfantil(!selectedInfantil) }
          >
            Infantil
          </Category>
          <Category
            selected={ selectedMasculino }
            onClick={ () => setSelectedMasculino(!selectedMasculino) }
          >
            Masculino
          </Category>
          <Category
            selected={ selectedUnisex }
            onClick={ () => setSelectedUnisex(!selectedUnisex) }
          >
            Unisex
          </Category>
        </Categories>
        <Title>LISTA DE PRODUTOS</Title>
        <ProductsList>
          <Product>
            <Name>{product.name}</Name>
            <Quantity>
              {`${product.quantity} und.`}
            </Quantity>
            <ProductCategory>{product.category}</ProductCategory>
            <Provider>{product.provider}</Provider>
            <Price>{`R$ ${product.price}`}</Price>
            <Edit
              size={ 20 }
              onClick={ () => alert('editar produto') }
              style={ { cursor: 'pointer' } }
            />
          </Product>
          <Product>
            <Name>{product.name}</Name>
            <Quantity>
              {`${product.quantity} und.`}
            </Quantity>
            <ProductCategory>{product.category}</ProductCategory>
            <Provider>{product.provider}</Provider>
            <Price>{`R$ ${product.price}`}</Price>
          </Product>
          <Product>
            <Name>{product.name}</Name>
            <Quantity>
              {`${product.quantity} und.`}
            </Quantity>
            <ProductCategory>{product.category}</ProductCategory>
            <Provider>{product.provider}</Provider>
            <Price>{`R$ ${product.price}`}</Price>
          </Product>
          <Product>
            <Name>{product.name}</Name>
            <Quantity>
              {`${product.quantity} und.`}
            </Quantity>
            <ProductCategory>{product.category}</ProductCategory>
            <Provider>{product.provider}</Provider>
            <Price>{`R$ ${product.price}`}</Price>
          </Product>
          <Product>
            <Name>{product.name}</Name>
            <Quantity>
              {`${product.quantity} und.`}
            </Quantity>
            <ProductCategory>{product.category}</ProductCategory>
            <Provider>{product.provider}</Provider>
            <Price>{`R$ ${product.price}`}</Price>
          </Product>
          <Product>
            <Name>{product.name}</Name>
            <Quantity>
              {`${product.quantity} und.`}
            </Quantity>
            <ProductCategory>{product.category}</ProductCategory>
            <Provider>{product.provider}</Provider>
            <Price>{`R$ ${product.price}`}</Price>
          </Product>
          <Product>
            <Name>{product.name}</Name>
            <Quantity>
              {`${product.quantity} und.`}
            </Quantity>
            <ProductCategory>{product.category}</ProductCategory>
            <Provider>{product.provider}</Provider>
            <Price>{`R$ ${product.price}`}</Price>
          </Product>
          <Product>
            <Name>{product.name}</Name>
            <Quantity>
              {`${product.quantity} und.`}
            </Quantity>
            <ProductCategory>{product.category}</ProductCategory>
            <Provider>{product.provider}</Provider>
            <Price>{`R$ ${product.price}`}</Price>
          </Product>
          <Product>
            <Name>{product.name}</Name>
            <Quantity>
              {`${product.quantity} und.`}
            </Quantity>
            <ProductCategory>{product.category}</ProductCategory>
            <Provider>{product.provider}</Provider>
            <Price>{`R$ ${product.price}`}</Price>
          </Product>
          <Product>
            <Name>{product.name}</Name>
            <Quantity>
              {`${product.quantity} und.`}
            </Quantity>
            <ProductCategory>{product.category}</ProductCategory>
            <Provider>{product.provider}</Provider>
            <Price>{`R$ ${product.price}`}</Price>
          </Product>
          <Product>
            <Name>{product.name}</Name>
            <Quantity>
              {`${product.quantity} und.`}
            </Quantity>
            <ProductCategory>{product.category}</ProductCategory>
            <Provider>{product.provider}</Provider>
            <Price>{`R$ ${product.price}`}</Price>
          </Product>
          <Product>
            <Name>{product.name}</Name>
            <Quantity>
              {`${product.quantity} und.`}
            </Quantity>
            <ProductCategory>{product.category}</ProductCategory>
            <Provider>{product.provider}</Provider>
            <Price>{`R$ ${product.price}`}</Price>
          </Product>
          <Product>
            <Name>{product.name}</Name>
            <Quantity>
              {`${product.quantity} und.`}
            </Quantity>
            <ProductCategory>{product.category}</ProductCategory>
            <Provider>{product.provider}</Provider>
            <Price>{`R$ ${product.price}`}</Price>
          </Product>
          <Product>
            <Name>{product.name}</Name>
            <Quantity>
              {`${product.quantity} und.`}
            </Quantity>
            <ProductCategory>{product.category}</ProductCategory>
            <Provider>{product.provider}</Provider>
            <Price>{`R$ ${product.price}`}</Price>
          </Product>
          <Product>
            <Name>{product.name}</Name>
            <Quantity>
              {`${product.quantity} und.`}
            </Quantity>
            <ProductCategory>{product.category}</ProductCategory>
            <Provider>{product.provider}</Provider>
            <Price>{`R$ ${product.price}`}</Price>
          </Product>
          <Product>
            <Name>{product.name}</Name>
            <Quantity>
              {`${product.quantity} und.`}
            </Quantity>
            <ProductCategory>{product.category}</ProductCategory>
            <Provider>{product.provider}</Provider>
            <Price>{`R$ ${product.price}`}</Price>
          </Product>
          <Product>
            <Name>{product.name}</Name>
            <Quantity>
              {`${product.quantity} und.`}
            </Quantity>
            <ProductCategory>{product.category}</ProductCategory>
            <Provider>{product.provider}</Provider>
            <Price>{`R$ ${product.price}`}</Price>
          </Product>
          <Product>
            <Name>{product.name}</Name>
            <Quantity>
              {`${product.quantity} und.`}
            </Quantity>
            <ProductCategory>{product.category}</ProductCategory>
            <Provider>{product.provider}</Provider>
            <Price>{`R$ ${product.price}`}</Price>
          </Product>
        </ProductsList>
        <AddCircle
          style={ {
            cursor: 'pointer',
            color: '#5E17EB',
            position: 'fixed',
            bottom: '20px',
            right: '20px',
          } }
          size={ 60 }
          onClick={ () => alert('cadastrar produto') }
        />
      </Main>
    </>
  );
};

export default Index;
