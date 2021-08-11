import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BoxFilter = styled.div`
  width: 390px;
  height: 580px;
  padding: 20px !important;
  background: #ffffff;
  border-radius: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }

  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 36px;
    line-height: 58px;
    /* identical to box height, or 180% */

    letter-spacing: -0.9px;

    color: #000000;
  }

  .form-label {
    margin: 10px 0 5px 0;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    display: flex;
    align-items: center;

    color: #838383;

    .MuiButton-containedSecondary {
      margin-top: 15px;
    }
  }

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export const BoxResult = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 680px;
  height: auto;
  min-height: 300px;
  padding: 20px !important;
  margin-left: 30px;
  background: #ffffff;
  border-radius: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  #render-result {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  img {
    max-width: 100%;
    width: 600px;
    height: auto;
  }

  h1 {
    font-weight: 500;
    font-size: 50px;
    line-height: 59px;
    text-align: center;
    margin-bottom: 30px;
  }

  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #3a454d;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-left: 0;

    h1 {
      font-size: 24px;
    }
    p {
      font-size: 14px;
    }
  }
`;
