import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Close } from "../images/icon-close.svg";
import ImageSlider from "./ImageSlider";
import SlideshowButton from "./SlideshowButton";
import ThumbnailContainer from "./ThumbnailContainer";
import { handlesLightboxScroll, handlesSlideshowButtons } from "../utils/slideshow";

const ModalBackground = styled.div`
  background-color: hsla(0, 0%, 0%, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100vw;

  ${
    "" /* min-height: 100vh;
  z-index: 4; */
  }

  @media (max-height: 800px) {
    align-items: start;
    padding-block: 1.5rem;
  }
`;

const Container = styled.div`
  text-align: right;
  width: 550px;
`;

const Button = styled.button`
  margin-bottom: 1.5rem;
`;

const StyledClose = styled(Close)`
  height: 20px;
  width: 20px;

  path {
    fill: var(--clr-white);
    transition: fill 0.2s;
  }

  &:hover {
    path {
      fill: var(--clr-highlight);
    }
  }
`;

const ImageContainer = styled.div`
  margin-bottom: 0.5rem;
  position: relative;
`;

const Lightbox = ({ images }) => {
  const [active, setActive] = useState(0);

  // Sets active image to the scrolled to image
  function handleScroll(position) {
    setActive(handlesLightboxScroll(position, active));
  }

  // Sets active image to next/previous image
  function handleButton(direction) {
    setActive(handlesSlideshowButtons(direction, active));
  }

  return (
    <ModalBackground>
      <Container>
        <Button>
          <StyledClose />
          <span className="sr-only">Close</span>
        </Button>
        <ImageContainer>
          <SlideshowButton direction="previous" switchImage={() => handleButton("previous")} />
          <ImageSlider images={images} active={active} scrollImage={(e) => handleScroll(e.target.scrollLeft)} />
          <SlideshowButton direction="next" switchImage={() => handleButton("next")} />
        </ImageContainer>
        <ThumbnailContainer images={images} active={active} />
      </Container>
    </ModalBackground>
  );
};

export default Lightbox;
