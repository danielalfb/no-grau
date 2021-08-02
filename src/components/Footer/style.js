import styled from 'styled-components';

export const Box = styled.div`
  padding: 26px 50px;
  background: #f9f9f9;
  position: absolute;
  bottom: 0;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 30px;
  }
`;

export const Container = styled.div`
  display: grid;
  max-width: 1200px;
  margin: 0 auto;
  grid-template-columns: 1fr 100px 140px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #5e6e89;
`;
