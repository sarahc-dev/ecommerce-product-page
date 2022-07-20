import { useState } from "react";
import ProductImagesMobile from "./ProductImagesMobile";
import ProductImagesDesktop from "./ProductImagesDesktop";
import useBreakpoints from "../hooks/useBreakpoints";
import useWindowWidth from "../hooks/useWindowWidth";
import { handlesMobileScroll, handlesSlideshowButtons } from "../utils/slideshow";

const ProductImages = ({ images }) => {
  const [active, setActive] = useState(0);
  const { isDesktop } = useBreakpoints();
  const width = useWindowWidth();

  // Sets active image to the thumbnail clicked
  function selectImage(id) {
    setActive(id);
  }

  // Sets active image to the scrolled to image
  function handleScroll(position) {
    setActive(handlesMobileScroll(position, width));
  }

  // Sets active image to next/previous image
  function handleSlideshowButtons(direction) {
    setActive(handlesSlideshowButtons(direction, active));
  }

  return (
    <div>
      {isDesktop ? (
        <ProductImagesDesktop images={images} active={active} activeImage={images[active].image} activeImageAlt={images[active].alt} selectImage={(id) => selectImage(id)} />
      ) : (
        <ProductImagesMobile images={images} active={active} scrollImage={(e) => handleScroll(e.target.scrollLeft)} switchImage={(direction) => handleSlideshowButtons(direction)} />
      )}
    </div>
  );
};

export default ProductImages;
