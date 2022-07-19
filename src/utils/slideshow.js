const handlesMobileScroll = (position, width) => {
  if (position === 0) return 0;
  else if (width >= 550) {
    if (position === 562) return 1;
    if (position === 1124) return 2;
    if (position === 1686) return 3;
  } else {
    if (position === width + 12) return 1;
    if (position === width * 2 + 24) return 2;
    if (position === width * 3 + 36) return 3;
  }
};

const handlesLightboxScroll = (position, active) => {
  if (position === 0) return 0;
  if (position === 574) return 1;
  if (position === 1148) return 2;
  if (position === 1722) return 3;
  else return active;
};

const handlesSlideshowButtons = (direction, active) => {
  if (direction === "previous") {
    if (active === 0) return 3;
    else return active - 1;
  } else if (direction === "next") {
    if (active === 3) return 0;
    else return active + 1;
  }
};

export { handlesMobileScroll, handlesLightboxScroll, handlesSlideshowButtons };
