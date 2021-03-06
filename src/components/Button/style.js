import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 75px;
`;

export const Button = styled.a`
  width: 200px;
  padding: 16px;
  background: #000;
  border-radius: 6px;
  color: #fff;
  font-size: 18px;
  text-align: center;
  border: none;
  text-decoration: none;

  &:hover {
    background: #5e6e89;
    color: #fff;
  }
`;
