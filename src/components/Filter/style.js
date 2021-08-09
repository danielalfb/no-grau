import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BoxFilter = styled.div`
  width: 390px;
  height: 485px;
  padding: 20px !important;
  background: #ffffff;
  border-radius: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 32px;
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
  }
`;

export const BoxResult = styled.div`
  width: 730px;
  height: 485px;
  padding: 20px !important;
  background: #ffffff;
  border-radius: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
