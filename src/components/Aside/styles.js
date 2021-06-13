import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: fixed;
  top: 5.72rem;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NavLink = styled(Link)`
  padding: 2.2rem 0 2.2rem 0;
  background: #291F3BCC;
  text-align: center;
  text-decoration: none;
  width: 370px;
  border-bottom: 1px solid var(--color-gray);
  font-size: 20px;
  color: var(--color-primary);
`;
