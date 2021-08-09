import styled from 'styled-components';

const MainGrid = styled.main`
  max-width: 1200px;
  margin: 20px auto;

  @media (max-width: 768px) {
    margin-top: 25px;
    padding: 20px;
  }
`;

export default MainGrid;
