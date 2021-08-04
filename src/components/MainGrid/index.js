import styled from 'styled-components';

const MainGrid = styled.main`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 65px;

  @media (max-width: 768px) {
    margin-top: 25px;
  }
`;

export default MainGrid;
