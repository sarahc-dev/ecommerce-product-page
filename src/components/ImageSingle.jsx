import styled from "styled-components";

const Image = styled.img`
  background-color: var(--clr-text);
  border-radius: 15px;
  cursor: pointer;
`;

const ImageSingle = ({ image, alt, openLightbox }) => {
  return <Image src={image} alt={alt} height="445" width="445" onClick={openLightbox} />;
};

export default ImageSingle;
