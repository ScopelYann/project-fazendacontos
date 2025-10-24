import styled from "styled-components";
import { ChevronLeft } from "lucide-react";
import { style } from "framer-motion/client";

export const Container = styled.div`
  position: relative;
  bottom: 60px;
  right: 1.7px;
  width: 90%;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  font-weight: 700;
  color: #b9e6ff;
  text-align: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
`;

export const Carousel = styled.div`
  position: relative;
`;

export const Card = styled.div`
  position: relative;
  height: 24rem;
  border-radius: 1rem;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.25);
  }
`;

export const CardGradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2));
`;

export const CardContent = styled.div`
  position: absolute;
  inset: 0;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const CardTitle = styled.h3`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  transition: color 0.3s;

  ${Card}:hover & {
    color: #6ee7b7;
  }
`;

export const CardText = styled.p`
  color: #e5e5e5;
  font-size: 0.9rem;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s;

  ${Card}:hover & {
    opacity: 1;
  }

  &::before {
    content: "Ver Detalhes";
    background: rgba(255, 255, 255, 0.9);
    color: #064e3b;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    border-radius: 9999px;
    backdrop-filter: blur(4px);
  }
`;

export const NavButton = styled.button<{ $position: "left" | "right" }>`
  position: absolute;
  top: 50%;
  ${({ $position }) =>
    $position === "left" ? "left: -55px;" : "right: -55px;"}
  transform: translateY(-50%) ${({ $position }) =>
    $position === "right" && "rotate(180deg)"};
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  background: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background: #ecfdf5;
    cursor: pointer;
    width: 3.4rem;
    height: 3.4rem;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export const ArrowLeft = styled(ChevronLeft)`
  width: 1.5rem;
  height: 1.5rem;
  color: #064e3b;
`;

export const ArrowRight = styled(ArrowLeft)`
  /* transform: rotate(180deg); */
`;

export const Indicators = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

export const Dot = styled.button<{ $active: boolean }>`
  height: 0.75rem;
  border-radius: 9999px;
  background: ${({ $active }) => ($active ? "#064e3b" : "#86efac")};
  width: ${({ $active }) => ($active ? "2rem" : "0.75rem")};
  transition: all 0.3s;

  &:hover {
    background: #16a34a;
  }
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
`;

export const GalleryItem = styled.div`
  position: relative;
  height: 12rem;
  border-radius: 0.75rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Modal = styled.div`
  width: 100%;
  height: auto;
  margin: 50px;
  padding: 50px;
  background-color: rgba(255, 255, 255, 0.5);
`
