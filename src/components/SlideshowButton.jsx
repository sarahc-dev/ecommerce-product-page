import styled from "styled-components";
import { ReactComponent as Next } from "../images/icon-next.svg";
import { ReactComponent as Previous } from "../images/icon-previous.svg";

const Button = styled.button`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 100px;
  background-color: var(--clr-white);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline: 1rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${(props) => props.name === "next" && "0"};

  &:focus {
    outline-offset: 5px;
  }

  @media (min-width: 1000px) {
    height: 3.5rem;
    width: 3.5rem;
    left: ${(props) => props.name === "previous" && "-2.75rem"};
    right: ${(props) => props.name === "next" && "-2.75rem"};
  }
`;

const StyledPrevious = styled(Previous)`
  @media (min-width: 1000px) {
    path {
      transition: stroke 0.2s;
    }

    ${Button}:hover & {
      path {
        stroke: var(--clr-highlight);
      }
    }
  }
`;

const StyledNext = styled(Next)`
  @media (min-width: 1000px) {
    path {
      transition: stroke 0.2s;
    }

    ${Button}:hover & {
      path {
        stroke: var(--clr-highlight);
      }
    }
  }
`;

const SlideshowButton = ({ direction, switchImage }) => {
  return (
    <Button name={direction} onClick={switchImage}>
      {direction === "next" ? <StyledNext /> : <StyledPrevious />}
      <span className="sr-only">{`${direction} image`} </span>
    </Button>
  );
};

export default SlideshowButton;
