import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 10px 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 30px;
  }
`;

export const Title = styled.h1`
  max-width: 100%;
  font-size: 26px;
  line-height: 58px;
  letter-spacing: -0.9px;
  color: #000000;
  text-align: center;
`;

export const Subtitle = styled.p`
  width: 500px;
  max-width: 100%;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.1px;
  color: #5e6e89;
  text-align: center;
`;
