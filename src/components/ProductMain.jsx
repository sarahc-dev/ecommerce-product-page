import styled from "styled-components";

const Main = styled.main`
  margin: 0 auto;
  max-width: 550px;
  min-height: calc(100vh - 4.25rem);

  @media (min-width: 1000px) {
    max-width: unset;
    min-height: calc(100vh - 7rem);
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 5.625rem clamp(2rem, 11.5%, 10.3125rem) 8.25rem;
  }

  @media (min-width: 1250px) {
    gap: 125px;
    padding: 0 10.3125rem 0 calc(10.3125rem + 3rem);
  }
`;

const ProductMain = ({ children }) => {
  return <Main>{children}</Main>;
};

export default ProductMain;
