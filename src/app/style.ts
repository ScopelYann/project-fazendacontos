import styled from "styled-components";

export const Main = styled.main`
  height: 100vh;
  z-index: 10000;
  background: #04668d;
  background: linear-gradient(
    0deg,
    rgba(4, 102, 141, 0.88) 10%,
    rgba(237, 221, 83, 0) 100%
  );
  margin: 0;
`;

export const ContainerAprent = styled.div`
  position: relative;
  z-index: -1;
  height: 100vh;
`;
export const Apresentacion = styled.div`
  position: relative;
  bottom: 80px;
  background: #04668d;
`;

export const InfosEvent = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
