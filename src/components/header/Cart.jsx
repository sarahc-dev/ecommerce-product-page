import { useContext, useRef } from "react";
import CartContext from "../../contexts/CartContext";
import styled from "styled-components";
import CartItem from "./CartItem";
import ClickOutside from "../ClickOutside";

const Container = styled.div`
  border-radius: 10px;
  font-size: 1rem;
  margin-inline: 0.5rem;
  width: calc(100% - 1rem);
  max-width: 22.5rem;
  position: absolute;
  top: 4.75rem;
  right: 0;
  background-color: var(--clr-white);
  box-shadow: 0px 20px 50px -20px hsla(220, 13%, 13%, 0.503143);
  z-index: 2;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;

  &.open {
    max-height: 100vh;
  }

  @media (min-width: 800px) {
    margin-inline: 89px;
    top: 5.875rem;
  }
`;

const CartHeader = styled.p`
  padding: 1.5rem 1.5rem 1.6875rem;
  font-weight: 700;
  line-height: 1.25rem;
`;

const Contents = styled.div`
  border-top: 1px solid var(--clr-line);
  color: var(--clr-text);
  font-weight: 700;
  padding: 1.5rem 1.5rem 2rem;
  min-height: 11.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Cart = () => {
  const { cartOpen, items, cartBtnRef, openCart } = useContext(CartContext);
  const cartRef = useRef();

  return (
    <Container ref={cartRef} className={cartOpen ? "open" : ""}>
      <CartHeader>Cart</CartHeader>
      <Contents>
        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          items.map((item) => {
            return <CartItem key={item.productName} item={item} />;
          })
        )}
        {cartOpen && <ClickOutside parentRef={cartRef} onClickOutside={openCart} secondRef={cartBtnRef}></ClickOutside>}
      </Contents>
    </Container>
  );
};

export default Cart;
