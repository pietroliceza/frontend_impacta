import React from 'react';
import { useHistory } from 'react-router';
import {
  BackImage,
  Container,
  LogoImg,
  EmailInput,
  PasswordInput,
  ButtonSubmit,
} from './styles';

function Login() {
  const history = useHistory();
  return (
    <>
      <BackImage />
      <Container>
        <LogoImg />
        <EmailInput />
        <PasswordInput />
        <ButtonSubmit onClick={ () => history.push('/products') }>Entrar</ButtonSubmit>
      </Container>
    </>
  );
}

export default Login;
