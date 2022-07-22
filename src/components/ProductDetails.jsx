import styled from "styled-components";
import AddToCart from "./AddToCart";
import getDiscountPrice from "../utils/getDiscountPrice";

const Container = styled.div`
  padding: 1.5rem 1.5rem 5.5rem;

  @media (min-width: 1000px) {
    padding: 0;
    max-width: 700px;
  }
`;

const Company = styled.h2`
  color: var(--clr-highlight);
  font-size: 0.75rem;
  letter-spacing: 1.84615px;
  line-height: 0.9375rem;
  margin-bottom: 1rem;
  text-transform: uppercase;

  @media (min-width: 825px) {
    font-size: 0.8125rem;
    letter-spacing: 2px;
    line-height: 1rem;
  }
`;

const ProductName = styled.h1`
  color: var(--clr-headers);
  font-size: 1.75rem;
  line-height: 2rem;

  @media (min-width: 825px) {
    font-size: 2.75rem;
    line-height: 3rem;
  }
`;

const Description = styled.p`
  color: var(--clr-text);
  margin: 0.9375rem 0 1.5rem;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: end;

  @media (min-width: 825px) {
    width: 11rem;
    flex-wrap: wrap;
    row-gap: 10px;
  }
`;

const Price = styled.h2`
  color: var(--clr-headers);
  font-size: 1.75rem;
  line-height: 2.1875rem;
`;

const Discount = styled.p`
  background-color: var(--clr-highlight-light);
  border-radius: 6px;
  color: var(--clr-highlight);
  display: inline-block;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.25rem;
  margin: 0 auto 0 1rem;
  padding: 3.5px 8px;

  &:not(.discount) {
    display: none;
  }
`;

const OriginalPrice = styled.p`
  color: var(--clr-text-price);
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.625rem;
  text-decoration: line-through;
`;

const ProductDetails = ({ company, name, description, discount, price }) => {
  return (
    <Container>
      <Company>{company}</Company>
      <ProductName>{name}</ProductName>
      <Description>{description}</Description>
      <PriceContainer>
        <Price>{discount ? `$${getDiscountPrice(price, discount).toFixed(2)}` : `$${price.toFixed(2)}`}</Price>
        <Discount className={discount && "discount"}>{discount && `${discount}%`}</Discount>
        <OriginalPrice>{discount && `$${price.toFixed(2)}`}</OriginalPrice>
      </PriceContainer>

      <AddToCart productName={name} />
    </Container>
  );
};

export default ProductDetails;
