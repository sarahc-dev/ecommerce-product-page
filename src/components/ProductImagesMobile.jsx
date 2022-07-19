import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import SlideshowButton from "./SlideshowButton";

const Container = styled.div`
  position: relative;
`;

const ProductImagesMobile = ({ images, active, scrollImage, switchImage }) => {
  return (
    <Container>
      <SlideshowButton direction="previous" switchImage={() => switchImage("previous")} />
      <ImageSlider images={images} active={active} scrollImage={scrollImage} />
      <SlideshowButton direction="next" switchImage={() => switchImage("next")} />
    </Container>
  );
};

export default ProductImagesMobile;
