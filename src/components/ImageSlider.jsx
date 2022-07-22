import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useWindowWidth from "../hooks/useWindowWidth";

const ImageContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-behavior: ${(props) => props.scrollStyle};
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 550px) {
    border-radius: 15px;
  }
`;

const Image = styled.img`
  aspect-ratio: 2;
  height: 300px;
  margin-right: 0.75rem;
  object-fit: cover;
  scroll-snap-align: start;

  @supports not (aspect-ratio: 2) {
    height: auto;
  }

  @media (min-width: 500px) {
    height: 400px;

    @supports not (aspect-ratio: 2) {
      height: auto;
    }
  }

  @media (min-width: 550px) {
    border-radius: 15px;
  }

  @media (min-width: 1000px) {
    height: 550px;
    margin-right: 1.5rem;
  }
`;

const ImageSlider = ({ images, active, scrollImage }) => {
  const imageRef = useRef();
  const width = useWindowWidth();

  // Changes scroll effect to smooth after initial image loads
  const [scrollEffect, setScrollEffect] = useState("auto");
  useEffect(() => {
    setScrollEffect("smooth");
  }, []);

  // Sets the scroll position to show the active image
  useEffect(() => {
    if (active === 0) imageRef.current.scrollLeft = 0;
    else if (width < 550) {
      if (active === 1) imageRef.current.scrollLeft = width + 12;
      else if (active === 2) imageRef.current.scrollLeft = width * 2 + 24;
      else if (active === 3) imageRef.current.scrollLeft = width * 3 + 36;
    } else if (width >= 550) {
      if (active === 1) imageRef.current.scrollLeft = 562;
      else if (active === 2) imageRef.current.scrollLeft = 1124;
      else if (active === 3) imageRef.current.scrollLeft = 1686;
    }
  }, [active, width]);

  return (
    <ImageContainer ref={imageRef} onScroll={scrollImage} scrollStyle={scrollEffect}>
      {images.map((image) => {
        return <Image key={image.id} src={image.image} alt={image.alt} />;
      })}
    </ImageContainer>
  );
};

export default ImageSlider;
