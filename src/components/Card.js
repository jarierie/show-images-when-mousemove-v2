import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap, Linear } from "gsap";
const CardContainer = styled.div`
  top: 0;
  left: 0;
  width: 300px;
  height: 400px;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  visibility: hidden;
  overflow: hidden;
`;

const Card = (props) => {
  const ref = useRef(null);
  const { img, currentItem, index, position } = props;

  //animation
  const animation = () => {
    const tl = gsap.timeline();
    tl.to(ref.current, {
      x: position.x,
      y: position.y,
      autoAlpha: 1,
      duration: 0.15,
      delay: index * 0.2,
      ease: Linear.easeNone,
    }).to(
      ref.current,
      {
        visibility: "hidden",

        delay: 2,
        duration: 0,
      },
      1
    );
  };

  useEffect(() => {
    if (index === currentItem) {
      animation();
    } else {
      return;
    }
  });
  return (
    <>
      <CardContainer ref={ref}>
        <img src={img} alt=''></img>
      </CardContainer>
    </>
  );
};

export default Card;
