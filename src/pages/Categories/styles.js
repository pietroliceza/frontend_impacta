import styled from 'styled-components';

export const Main = styled.div`
  margin-top: 8rem;
  margin-left: 25rem;
`;

export const PageTitle = styled.h1`
  margin: 2rem 36rem;
`;

export const CategoriesList = styled.div`
  display: grid;
  margin-right: 5rem;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
`;

export const Category = styled.div`
  text-align: center;
  padding: 16px 32px;
  border-radius: 50px;
  border: 1px solid var(--color-gray);
  &:nth-child(3) {
    margin-right: 5rem;
  }
`;
