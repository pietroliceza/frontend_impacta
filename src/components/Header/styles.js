import styled from 'styled-components';
import img from '../../assets/logo-ajustada.png';
import perfil from '../../assets/perfil-elipse.png';

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 32px;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  height: 10%;
  background: var(--color-roxo);
`;

export const Menu = styled.h1`
  color: var(--color-primary);
  margin-left: 6.5rem;
`;

export const Logo = styled.img.attrs({
  src: `${img}`,
})`
  width: 250px;
  margin-left: 40px;
  cursor: pointer;
`;

export const Perfil = styled.img.attrs({
  src: `${perfil}`,
})`
  width: 65px;
  cursor: pointer;
`;
