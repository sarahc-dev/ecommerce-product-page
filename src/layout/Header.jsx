import { useContext, useRef, useState } from "react";
import CartContext from "../contexts/CartContext";
import styled from "styled-components";
import NavLinks from "../components/header/NavLinks";
import IconMenu from "../images/icon-menu.svg";
import IconLogo from "../images/logo.svg";
import ImageAvatar from "../images/image-avatar.png";
import { ReactComponent as IconCart } from "../images/icon-cart.svg";

const HeaderWrapper = styled.header`
  border-bottom: 1px solid var(--clr-line);
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.1875rem 1.5rem 1.5rem;
  max-width: 550px;
  margin-inline: auto;

  @media (min-width: 500px) {
    padding-block: 2rem;
  }

  @media (min-width: 1000px) {
    gap: 2.5rem;
    padding: 1.75rem 0 2.125rem;
    max-width: unset;
    margin-inline: clamp(2rem, 11.5%, 10.3125rem);

    & button {
      display: none;
    }
  }
`;

const CartWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: end;
  height: 1.5rem;
  margin-inline: auto 6px;
  position: relative;

  &:hover {
    path {
      fill: var(--clr-headers);
    }
  }

  &:focus {
    outline-offset: 5px;
  }
`;

const StyledIconCart = styled(IconCart)`
  path {
    transition: fill 0.1s;
  }
`;

const CartBubble = styled.div`
  background-color: var(--clr-highlight);
  color: var(--clr-white);
  font-size: 0.625rem;
  font-weight: 700;
  line-height: 1;
  width: 1.1875rem;
  height: 0.8125rem;
  border-radius: 6.5px;
  position: absolute;
  top: -2px;
  right: -6px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.empty {
    display: none;
  }
`;

const Avatar = styled.img`
  border-radius: 100px;
  cursor: pointer;
  height: 1.5rem;
  width: 1.5rem;
  outline-offset: -1px;
  outline-color: var(--clr-white);
  transition: outline 0.1s;

  &:hover {
    outline: 1px solid var(--clr-highlight);
  }

  @media (min-width: 825px) {
    height: 3.125rem;
    width: 3.125rem;

    &:hover {
      outline: 2px solid var(--clr-highlight);
    }
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openCart, total } = useContext(CartContext);
  const menuBtnRef = useRef();
  const cartRef = useRef();

  function handleClose() {
    setMenuOpen(false);
  }

  return (
    <HeaderWrapper>
      <button ref={menuBtnRef} aria-controls="primary-nav" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}>
        <img src={IconMenu} alt="Menu" />
      </button>
      <img src={IconLogo} alt="sneakers" height="20" width="137.5" />
      <NavLinks isMenuOpen={menuOpen} closeMenu={handleClose} buttonRef={menuBtnRef} />
      <CartWrapper
        ref={cartRef}
        onClick={() => openCart(cartRef)}
        onKeyDown={(e) => {
          if (e.key === "Enter") openCart(cartRef);
        }}
        tabIndex="0"
      >
        <CartBubble className={total === 0 && "empty"}>{total}</CartBubble>
        <StyledIconCart />
      </CartWrapper>
      <Avatar src={ImageAvatar} alt="User avatar" />
    </HeaderWrapper>
  );
};

export default Header;
