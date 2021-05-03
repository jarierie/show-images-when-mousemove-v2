import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import meenoi1 from "../assets/meenoi.jpg";
import meenoi2 from "../assets/meenoi2.jpg";
import meenoi3 from "../assets/meenoi3.jpg";
import meenoi4 from "../assets/meenoi4.jpg";
import meenoi5 from "../assets/meenoi5.jpg";
import Card from "./Card";

const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #0d0d0d;
`;

const TextContainer = styled.div`
  width: 900px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  font-weight: bolder;
  letter-spacing: -5px;
  z-index: 999;
  color: #f5f5f5;
  &:hover {
    cursor: pointer;
    color: gold;
  }
`;

const Main = () => {
  const array = [meenoi1, meenoi2, meenoi3, meenoi4, meenoi5];
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const set = (e) => {
      setPosition({ x: e.pageX, y: e.pageY });
    };
    window.addEventListener("mousemove", set);
    return () => {
      window.removeEventListener("mousemove", set);
    };
  }, []);

  const hoverSet = () => {
    if (currentItem === array.length - 1) {
      setCurrentItem(0);
    } else {
      setCurrentItem(currentItem + 1);
    }
  };
  return (
    <>
      <Container>
        <TextContainer onMouseMove={hoverSet}>Hover over me</TextContainer>
        {array.map((item, index) => {
          return (
            <>
              <Card
                position={position}
                index={index}
                currentItem={currentItem}
                img={item}
              ></Card>
            </>
          );
        })}
      </Container>{" "}
      <Container></Container>
    </>
  );
};

export default Main;
