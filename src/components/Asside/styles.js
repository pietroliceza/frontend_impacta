import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 4.9%;
  height: 100%;
`;

export const NavLink = styled(Link)`
  padding: 1.78% 0 1.78% 0;
  background: #291F3BCC;
  text-align: center;
  text-decoration: none;
  width: 370px;
  border-bottom: 1px solid var(--color-gray);
  font-size: 20px;
  color: var(--color-primary);
`;
