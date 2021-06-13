import styled from 'styled-components';

export const Main = styled.div`
  margin-top: 8rem;
  margin-left: 25rem;
`;

export const TitlePage = styled.h1`
  margin: 2rem 36rem;
`;

export const NameInput = styled.input.attrs({
  placeholder: 'Digite o nome da categoria',
})`
  border: 1px solid var(--color-gray);
  border-radius: 50px;
  padding: 16px 32px;
  width: 70rem;
  outline: none;
  margin: 7rem 12rem 0;
`;

export const SaveButton = styled.button`
  border-radius: 50px;
  padding: 16px 32px;
  outline: none;
  margin: 10rem;
  font-size: 20px;
  background: var(--color-roxo);
  color: var(--color-primary);
  width: 18rem;
  margin-left: 37rem;
  cursor: pointer;
`;
