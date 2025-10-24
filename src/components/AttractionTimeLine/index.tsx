import React, { useRef, useEffect } from "react";
import CLOUD from "vanta/dist/vanta.clouds.min";
import * as THREE from "three";
import { Clock, Sun, Cloud, Moon, Sparkles } from "lucide-react";
import Image from "next/image";
import person from "../../../public/teste.png";
import {
  ActivitiesContainer,
  ActivityCard,
  ActivityItem,
  ActivityTitle,
  CardHeader,
  Container,
  Description,
  IconCircle,
  Time,
  TimelineLine,
  TimelineWrapper,
  Title,
  Wrapper,
  PersonImg,
} from "../AttractionTimeLine/style";

const iconMap = {
  sun: Sun,
  cloud: Cloud,
  moon: Moon,
  sparkles: Sparkles,
  clock: Clock,
} as const;

type IconKey = keyof typeof iconMap;

export type Activity = {
  id: string;
  time: string;
  title: string;
  description: string;
  icon?: IconKey;
};

interface RoutineDayProps {
  activities: Activity[];
}

export const RoutineDay: React.FC<RoutineDayProps> = ({ activities }) => {
  const myRef = useRef(null);

  useEffect(() => {
    const effect = CLOUD({
      el: myRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 800.0,
      minWidth: 200.0,
      skyColor: 0x6bbad9,
      cloudColor: 0xafc2de,
      sunColor: 0xff9615,
      sunGlareColor: 0xff6533,
    });

    return () => {
      effect?.destroy(); // destrói o efeito ao desmontar
    };
  }, []);

  return (
    <Container ref={myRef}>
      <Wrapper>
        <Title>Rotina do Dia</Title>
        <TimelineWrapper>
          <TimelineLine />
          <ActivitiesContainer>
            {activities.map((activity, index) => {
              const Icon = iconMap[activity.icon ?? "clock"] || iconMap.clock;

              return (
                <ActivityItem
                  key={activity.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <IconCircle>
                    <Icon />
                  </IconCircle>
                  <ActivityCard>
                    <CardHeader>
                      <Time>{activity.time}</Time>
                    </CardHeader>
                    <ActivityTitle>{activity.title}</ActivityTitle>
                    <Description>{activity.description}</Description>
                  </ActivityCard>
                </ActivityItem>
              );
            })}
          </ActivitiesContainer>
        </TimelineWrapper>
        <div>
          <Image
            src={person}
            alt="personagem-teatro"
            width={700}
            height={700}
            loading="lazy"
            className="img-person"
          />
        </div>
      </Wrapper>
    </Container>
  );
};
