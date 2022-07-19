import styled from "styled-components";

const Container = styled.div`
  cursor: pointer;
  position: relative;
`;

const Img = styled.img`
  border-radius: 10px;

  &.active {
    outline: 2px solid var(--clr-highlight);
  }
`;

const Overlay = styled.div`
  height: 88px;
  width: 88px;
  background-color: var(--clr-white);
  opacity: 0.75;
  border-radius: 10px;
  display: none;
  position: absolute;
  top: 0;
  transition: opacity 0.3s;

  ${Container}:hover & {
    display: block;
    opacity: 0.5;
  }

  &.active {
    display: block;
  }
`;

const Thumbnail = ({ image, active, selectImage }) => {
  return (
    <Container onClick={selectImage}>
      <Img src={image.thumbnail} alt={image.alt} height="88" width="88" className={active === image.id ? "active" : ""} />
      <Overlay className={active === image.id ? "active" : ""}></Overlay>
    </Container>
  );
};

export default Thumbnail;
