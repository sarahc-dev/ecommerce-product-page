import styled from "styled-components";
import Thumbnail from "./Thumbnail";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-inline: auto;
  margin-top: 2rem;
  max-width: 445px;
`;

const ThumbnailContainer = ({ images, active }) => {
  return (
    <Container>
      {images.map((image) => {
        return <Thumbnail key={image.id} image={image} active={active} />;
      })}
    </Container>
  );
};

export default ThumbnailContainer;
