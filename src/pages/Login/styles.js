import styled from 'styled-components';
import img from '../../assets/fundo-login.svg';
import logo from '../../assets/logo.png';

export const Container = styled.div`
  max-height: 100vh;
  max-width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BackImage = styled.div`
  background: transparent url(${img}) 0% 0% no-repeat padding-box;
  position: fixed;
  top: -904.6494140625px;
  left: -748.2841796875px;
  width: 2247px;
  height: 2465px;
`;

export const LogoImg = styled.div`
  width: 46rem;
  height: 35rem;
  border: 1px solid red;
  background: transparent url(${logo}) 0% 0% no-repeat padding-box;
`;

export const EmailInput = styled.input.attrs({
  type: 'email',
  placeholder: 'email',
})`
  font-size: 1.2rem;
  width: 40rem;
  height: 3.2rem;
  border: 1px solid var(--color-gray);
  background: var(--color-primary) padding-box;
  border-radius: 50px;
  opacity: 1;
  outline: none;
  padding: 8px 16px;
  margin-bottom: 1rem;
`;

export const PasswordInput = styled.input.attrs({
  type: 'password',
  placeholder: 'senha',
})`
  font-size: 1.2rem;
  width: 40rem;
  height: 3.2rem;
  border: 1px solid var(--color-gray);
  background: var(--color-primary) 0% 0% no-repeat padding-box;
  border-radius: 50px;
  opacity: 1;
  outline: none;
  padding: 8px 16px;
`;

export const ButtonSubmit = styled.button.attrs({
  type: 'submit',
})`
  width: 459px;
  height: 65px;
  background: var(--color-desability);
  color: var(--color-roxo);
  border-radius: 50px;
  font-size: 20px;
  cursor: pointer;
`;

export const CreateAcout = styled.button.attrs({
  type: 'button',
})`
  cursor: pointer;
  height: 41px;
  text-align: center;
  font: normal 34px/74px Roboto;
  letter-spacing: 0px;
  color: var(--color-gray);
  opacity: 1;
`;
