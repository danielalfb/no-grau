import styled from 'styled-components';

export const CardTitle = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 16px;
  align-items: center;
  line-height: 23px;
  font-family: 'Roboto', sans-serif;
  color: #000;

  @media screen and (max-width: 768px) {
    font-size: 17px;
    margin: 10px 0;
  }
`;

export const CardText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  text-align: left;
  display: flex;
  align-items: center;
  color: #000;

  @media (max-width: 768px) {
    max-width: 150px;
    font-size: 16px;
  }
`;

export const CardDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 20px;
  color: #000;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const CardFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  height: 380px;
  padding: 20px;
  margin: 15px 15px 90px;
  justify-content: space-around;
  background-color: #fff;
  border-radius: 10px;
  border-top: none;
  border-right: 2px solid #e5e5e5;
  border-bottom: none;
  border-left: 2px solid #e5e5e5;
  img {
    width: 250px;
    height: auto;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    height: 150px;
    width: 100%;
    margin: 15px 0;
    border-right: none;
    border-bottom: 2px solid #e5e5e5;
    border-left: none;
    img {
      width: 100px;
      height: auto;
      margin-bottom: 20px;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 0 0 80px 0;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
