import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  position: relative;
  top: 60px;
  display: flex;
  flex-direction: column;
  align-items: safe;
  gap: 2rem;
  overflow: hidden;
  width: 100%;
`;

export const Wrapper = styled.div`
  background: linear-gradient(
    180deg,
    rgba(4, 102, 141, 0.99) 10%,
    rgba(4, 102, 141, 0.42) 30%,
    rgba(237, 221, 83, 0) 100%
  );

  .img-person{
    position: absolute;
    top: 0;
    left: 50%;
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
`;

export const Title = styled.h2`
  position: relative;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 60px;
  color: #b9e6ff;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

export const TimelineWrapper = styled.div`
  position: relative;
  left: 2%;
`;

export const TimelineLine = styled.div`
  position: absolute;
  left: 2rem;
  top: 0;
  bottom: 0;
  width: 0.25rem;
  background: linear-gradient(to bottom, #34d399, #10b981, #15803d);
`;

export const ActivitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;


export const ActivityItem = styled(motion.div)`
  position: relative;
  padding-left: 6rem;
`;

export const IconCircle = styled.div`
  position: absolute;
  left: 0;
  width: 4rem;
  height: 4rem;
  background: linear-gradient(to bottom right, #34d399, #16a34a);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  svg {
    width: 2rem;
    height: 2rem;
    color: white;
  }
`;

export const ActivityCard = styled.div`
  position: relative;
  width: 900px;
  background-color: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border: 1px solid #dcfce7;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
`;

export const Time = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: #14532d;
`;

export const ActivityTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #166534;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  color: #4b5563;
  line-height: 1.625;
`;

export const PersonImg = styled.div `
  width: 500px;
  height: 500px;
`