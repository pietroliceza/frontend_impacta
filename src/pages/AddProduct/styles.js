import styled from 'styled-components';

export const Main = styled.div`
  margin-top: 8rem;
  margin-left: 25rem;
`;

export const TitlePage = styled.h1`
  margin: 2rem 35rem;
`;

export const NameInput = styled.input.attrs({
  placeholder: 'Digite o nome do produto',
})`
  border: 1px solid var(--color-gray);
  border-radius: 50px;
  padding: 16px 32px;
  width: 70rem;
  outline: none;
  margin: 2rem 12rem 0;
`;

export const SelectCategory = styled.select`
  border: 1px solid var(--color-gray);
  border-radius: 50px;
  opacity: 0.7;
  padding: 16px 32px;
  width: 70rem;
  outline: none;
  margin: 1rem 12rem 0;
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const CostInput = styled.input.attrs({
  placeholder: 'Digite o custo do produto',
})`
border: 1px solid var(--color-gray);
  border-radius: 50px;
  padding: 16px 32px;
  width: 70rem;
  outline: none;
  margin: 1rem 12rem 0;
`;
