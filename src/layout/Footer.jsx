import styled from "styled-components";

const FooterWrapper = styled.footer`
  color: var(--clr-headers);
  padding: 1.5rem;
  text-align: center;

  & a {
    color: var(--clr-highlight);
  }

  & a:hover {
    color: var(--clr-headers);
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://www.sarahclements.me/">Sarah C</a>.
      </p>
    </FooterWrapper>
  );
};

export default Footer;
