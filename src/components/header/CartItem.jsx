import { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import products from "../../products";
import styled from "styled-components";
import { ReactComponent as Delete } from "../../images/icon-delete.svg";
import getDiscountPrice from "../../utils/getDiscountPrice";

const Container = styled.div`
  font-weight: 400;
  width: 100%;
`;

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.625rem;

  & img {
    border-radius: 4px;
  }
`;

const TextContainer = styled.div`
  font-size: 1rem;
  line-height: 1.625rem;
  margin-inline: 1rem auto;

  & span {
    color: var(--clr-headers);
    font-weight: 700;
  }
`;

const DeleteButton = styled.button`
  &:focus {
    outline-offset: 5px;
  }
`;

const Button = styled.button`
  background-color: var(--clr-highlight);
  border-radius: 10px;
  color: var(--clr-white);
  font-size: 1rem;
  font-weight: 700;
  height: 3.5rem;
  width: 100%;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--clr-highlight-hover);
  }

  &:focus {
    outline-offset: 5px;
  }
`;

const StyledDelete = styled(Delete)`
  transition: all 0.3s;
  &:hover {
    use {
      fill: var(--clr-headers);
    }
  }
`;

const CartItem = ({ item }) => {
  const { deleteFromCart } = useContext(CartContext);
  const index = products.findIndex((product) => product.name === item.productName);
  const product = products[index];
  const price = product.discount ? getDiscountPrice(product.price, product.discount) : product.price;
  const total = price * item.amount;

  return (
    <Container>
      <ProductContainer>
        <img src={product.images[0].thumbnail} alt={product.images[0].alt} height="50" width="50" />
        <TextContainer>
          <p>{item.productName}</p>
          <p>
            {`$${price.toFixed(2)} x ${item.amount} `}
            <span>{`$${total.toFixed(2)}`}</span>
          </p>
        </TextContainer>
        <DeleteButton onClick={() => deleteFromCart(item.productName)} tabIndex="0">
          <StyledDelete />
          <span className="sr-only">Delete</span>
        </DeleteButton>
      </ProductContainer>
      <Button>Checkout</Button>
    </Container>
  );
};

export default CartItem;
