import React from 'react';
import {
  BackImage,
  Container,
  LogoImg,
  EmailInput,
  PasswordInput,
  ButtonSubmit,
  CreateAcout,
} from './styles';

function Login() {
  return (
    <>
      <BackImage />
      <Container>
        <LogoImg />
        <EmailInput />
        <PasswordInput />
        <ButtonSubmit onClick={ () => alert('entrar') }>Entrar</ButtonSubmit>
        <CreateAcout onClick={ () => alert('criar conta') }>Criar conta</CreateAcout>
      </Container>
    </>
  );
}

export default Login;
