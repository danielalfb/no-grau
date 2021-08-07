import styled from 'styled-components';

export const CardTitle = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 16px;
  align-items: center;
  line-height: 23px;
  font-family: 'Roboto', sans-serif;
  color: #000;
`;

export const CardText = styled.p`
  font-family:  'Roboto', sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  display: flex;
align-items: center;
  color: #000;
`;

export const CardDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 16px;
  // text-align: center;
  color: #000;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Cards = styled.div`
display: flex;
justify-content: center;

  @media screen and (max-width: 768px) {
    height: 200px;
  }
`;

export const CardFlex = styled.div`

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 200px;
  }
`;

export const Img = styled.div`
  @media screen and (max-width: 768px) {
    width: 161px;
    height: 65px;
  }
`;

// testar outros tamanhos de imagens
