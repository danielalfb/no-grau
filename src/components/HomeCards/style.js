import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 0 0 80px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 270px;
  height: 250px;
  padding: 20px;
  margin: 0 0 0 30px;
  background-color: #fff;
  border-radius: 8px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  img {
    width: 222px;
    height: auto;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    margin: 0 0 30px 0;
  }
`;

export const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  text-align: center;
  color: #1d293f;
`;
