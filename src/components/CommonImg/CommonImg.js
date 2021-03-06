import React from "react";
import styled from "styled-components";
import { IMAGE_BASE_URL } from "../../Config";
import { handleImgError } from "../../ErrorImg";

const ImageContainer = styled.img(({ theme, customStyle }) => ({
  marginRight: theme.smallGap,
  borderRadius: theme.smallGap,
  display: "block",
  cursor: "pointer",
  ...customStyle,
}));

function CommonImg({ path, size, alt, customStyle }) {
  const src = `https://${IMAGE_BASE_URL}/w${size}/${path}`;
  return path && size ? (
    <ImageContainer
      src={src}
      alt={alt}
      customStyle={customStyle || {}}
      onError={handleImgError}
    />
  ) : null;
}

export default CommonImg;
