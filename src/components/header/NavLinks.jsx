import { useRef } from "react";
import styled from "styled-components";
import IconClose from "../../images/icon-close.svg";
// import useClickOutside from "../hooks/useClickOutside";

const Background = styled.div`
  background-color: var(--clr-lightbox);
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 3;
  display: none;

  &.open {
    display: block;
  }

  @media (min-width: 1000px) {
    &.open {
      display: none;
    }
  }
`;

const NavWrapper = styled.div`
  background-color: var(--clr-white);
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.625rem;
  height: 100%;
  width: 66.6667%;
  padding: 1.5625rem;
  transform: translateX(-100%);
  transition: transform 0.3s;
  position: absolute;
  top: 0;
  left: 0;

  &.open {
    display: block;
    transform: translateX(0);
    z-index: 4;
  }

  & a {
    cursor: pointer;
    text-decoration: none;
    color: var(--clr-headers);

    &:focus {
      outline-offset: 5px;
    }
  }

  @media (min-width: 1000px) {
    transform: unset;
    position: unset;
    padding: 0;
    margin-left: 16.5px;
    & img {
      display: none;
    }
  }
`;

const Nav = styled.nav`
  margin-top: 3.375rem;

  & li + li {
    margin-top: 1.25rem;
  }

  @media (min-width: 1000px) {
    margin-top: 0;

    font-size: 0.9375rem;
    font-weight: 400;

    & a {
      color: var(--clr-text);
    }

    & li {
      display: inline;
      position: relative;
    }

    & li + li {
      margin-top: 0;
      margin-left: 2rem;
    }

    & li::after {
      content: "";
      position: absolute;
      left: 0;
      top: 4.05rem;
      height: 4px;
      width: 0;
      background-color: var(--clr-highlight);
      transition: 0.3s;
    }

    & li:hover {
      color: var(--clr-headers);

      &::after {
        width: 100%;
      }
    }
  }
`;

const NavLinks = ({ isMenuOpen, closeMenu, buttonRef }) => {
  const menuRef = useRef();

  function handleOutsideClick(e) {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      closeMenu();
    }
  }

  // useClickOutside(
  //   menuRef,
  //   () => {
  //     closeMenu();
  //   },
  //   buttonRef
  // );

  return (
    <>
      <Background className={isMenuOpen ? "open" : ""} onClick={(e) => handleOutsideClick(e)}></Background>
      <NavWrapper ref={menuRef} className={isMenuOpen ? "open" : ""}>
        <img src={IconClose} alt="Close menu" onClick={closeMenu} />
        <Nav id="primary-nav">
          <ul>
            <li>
              <a href="/">Collections</a>
            </li>
            <li>
              <a href="/">Men</a>
            </li>
            <li>
              <a href="/">Women</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </Nav>
      </NavWrapper>
    </>
  );
};

export default NavLinks;
