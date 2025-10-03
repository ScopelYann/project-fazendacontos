import styled from "styled-components";

export const MainWraper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  .custom-prev {
    position: absolute;
    left: 2%;
    top: 45%;
    width: 37px;
  }

  .custom-next {
    position: absolute;
    left: 95%;
    top: 45%;
    width: 37px;
    transform: rotate(180deg);
  }

  .swiper {
    max-width: 1140px; /* Largura exata para 3 cards de 360px + espaçamentos */
    width: 100%;
    overflow: hidden;
    padding: 0 50px; /* Espaço para os botões de navegação */
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
  }

  .swiper-wrapper {
    align-items: center;
  }
`;

export const InfosComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #111;
  border-radius: 4px;
  text-align: center;
  width: 360px;
  height: 450px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease;
  position: relative;
  flex-shrink: 0; /* Impede que os cards encolham */
`;

export const CustomSwiperButton = styled.div<{ verifbullet: number }>`
  opacity: ${(props) => (props.verifbullet == 1 ? 0.5 : 1)};
  cursor: ${props => props.verifbullet == 1 ? 'not-allowed' : 'pointer'};
  transition: all 1s;
`;
