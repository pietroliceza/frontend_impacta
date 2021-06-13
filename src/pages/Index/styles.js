import styled from 'styled-components';

export const ProductSearch = styled.input.attrs({
  placeholder: 'Digite o nome do produto',
})`
  border: 1px solid var(--color-gray);
  border-radius: 50px;
  padding: 16px 32px;
  width: 70rem;
  outline: none;
  margin: 4rem 12rem 0;
`;

export const Main = styled.main`
  margin-top: 6rem;
  margin-left: 25rem;
`;

export const Categories = styled.div`
  display: flex;
  width: 70rem;
  flex-direction: row;
  margin: 3rem 12rem;
  justify-content: space-between;
`;

export const Category = styled.div`
  border: 1px solid var(--color-gray);
  padding: 8px 32px;
  border-radius: 50px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? '#524230' : 'wite')};
  color: ${(props) => (props.selected ? 'white' : 'black')};
`;

export const Title = styled.div`
  width: 80rem;
  background-color: #9364F1;
  color: var(--color-primary);
  padding: 8px 16px;
  text-align: center; 
  margin: 0 8rem 2rem;
`;

export const ProductsList = styled.div`
  width: 80rem;
  padding: 8px 16px;
  margin: 0 8rem 3rem;
`;

export const Product = styled.div`
  border: 1px solid var(--color-gray);
  border-radius: 50px;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const Name = styled.p`
  margin-left: 0.25rem;
`;

export const Quantity = styled.p`
`;

export const Price = styled.p``;

export const ProductCategory = styled.p``;

export const Provider = styled.p``;
