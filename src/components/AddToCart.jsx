import { useContext, useState } from "react";
import CartContext from "../contexts/CartContext";
import styled from "styled-components";
import { ReactComponent as Plus } from "../images/icon-plus.svg";
import { ReactComponent as Minus } from "../images/icon-minus.svg";
import { ReactComponent as Cart } from "../images/icon-cart.svg";

const Container = styled.div`
  margin-top: 1.25rem;

  @media (min-width: 1000px) {
    margin-top: 2rem;
    display: flex;
  }
`;

const InputContainer = styled.div`
  background-color: var(--clr-input-background);
  border-radius: 10px;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1000px) {
    width: 8rem;
  }

  @media (min-width: 1250px) {
    width: 9.8125rem;
  }
`;

const Button = styled.button`
  display: flex;
  padding: 1rem 1.5rem;
`;

const Number = styled.p`
  color: var(--clr-headers);
  font-size: 1rem;
  font-weight: 700;
`;

const StyledMinus = styled(Minus)`
  transition: all 0.3s;
  ${Button}:hover & {
    use {
      fill: var(--clr-highlight-hover);
    }
  }
`;
const StyledPlus = styled(Plus)`
  transition: all 0.3s;
  ${Button}:hover & {
    use {
      fill: var(--clr-highlight-hover);
    }
  }
`;

const Add = styled.button`
  background-color: var(--clr-highlight);
  border-radius: 10px;
  color: var(--clr-white);
  font-size: 1rem;
  font-weight: 700;
  height: 3.5rem;
  width: 100%;
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 20px 50px -20px var(--clr-highlight);
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--clr-highlight-hover);
  }

  @media (min-width: 1000px) {
    margin-top: 0;
    margin-left: 1rem;
    width: unset;
    flex-grow: 1;
  }
`;

const StyledCart = styled(Cart)`
  path {
    fill: var(--clr-white);
  }
`;

const AddToCart = ({ productName }) => {
  let [amount, setAmount] = useState(0);
  const { addToCart } = useContext(CartContext);

  return (
    <Container>
      <InputContainer aria-label="Select amount">
        <Button
          onClick={() => {
            if (amount > 0) setAmount(amount - 1);
          }}
        >
          <span className="sr-only">Remove</span>
          <StyledMinus />
        </Button>
        <Number>{amount}</Number>
        <Button onClick={() => setAmount(amount + 1)}>
          <span className="sr-only">Add</span>
          <StyledPlus />
        </Button>
      </InputContainer>
      <Add
        onClick={() => {
          amount > 0 && addToCart(productName, amount);
          setAmount(0);
        }}
      >
        <StyledCart />
        <span>Add to cart</span>
      </Add>
    </Container>
  );
};

export default AddToCart;
