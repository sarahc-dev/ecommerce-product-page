import styled from "styled-components";

const Main = styled.main`
  max-width: 550px;
  margin-inline: auto;

  @media (min-width: 1000px) {
    max-width: unset;
  }
`;

const ProductMain = ({ children }) => {
  return <Main>{children}</Main>;
};

export default ProductMain;
