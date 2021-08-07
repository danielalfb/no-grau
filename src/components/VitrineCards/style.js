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
  color: #000;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Cards = styled.div`


  @media screen and (max-width: 768px) {
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    }
`;

export const CardFlex = styled.div`

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 120px; 
  }
`;

export const Img = styled.div`
  @media screen and (max-width: 768px) {
    width: 200px;
    height: 65px;
  }
`;
