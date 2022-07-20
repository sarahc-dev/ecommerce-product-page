import { useContext } from "react";
import styled from "styled-components";
import ImageSingle from "./ImageSingle";
import ThumbnailContainer from "./ThumbnailContainer";
import ModalContext from "../contexts/ModalContext";

const Container = styled.div`
  width: 445px;
`;

const ProductImagesDestop = ({ images, active, activeImage, activeImageAlt, selectImage }) => {
  // Open lightbox at this level?
  const { toggleModal } = useContext(ModalContext);

  return (
    <Container>
      <ImageSingle image={activeImage} alt={activeImageAlt} openLightbox={() => toggleModal(active)} />
      <ThumbnailContainer images={images} active={active} selectImage={(id) => selectImage(id)} />
    </Container>
  );
};

export default ProductImagesDestop;
