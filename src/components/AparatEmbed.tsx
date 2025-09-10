import { styled } from "@/styled-system/jsx";
import React from "react";

interface AparatEmbedProps {
  videohash: string;
  aspectRatio?: number;
}

const Wrapper = styled("div", {
  base: {
    position: "relative",
    width: "100%",
    aspectRatio: "16 / 9",
  },
});

const Iframe = styled("iframe", {
  base: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    border: 0,
  },
});

const AparatEmbed: React.FC<AparatEmbedProps> = ({
  videohash,
  aspectRatio,
}) => (
  <Wrapper style={aspectRatio ? { aspectRatio: `${aspectRatio}` } : undefined}>
    <Iframe
      src={`https://www.aparat.com/video/video/embed/videohash/${videohash}/vt/frame?titleShow=true`}
      allowFullScreen
      title={`Aparat video ${videohash}`}
    />
  </Wrapper>
);

export default AparatEmbed;
