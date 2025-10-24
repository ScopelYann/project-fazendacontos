"use client";

import Header from "@/components/Header";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import CLOUD from "vanta/dist/vanta.clouds.min";
import { Apresentacion, ContainerAprent, Main } from "./style";
import AttractionsCarousel from "../components/AttractionCaroussel/index";
import { RoutineDay } from "../components/AttractionTimeLine/index";
import { Attraction } from "../components/AttractionCaroussel/index";
import { Activity } from "../components/AttractionTimeLine/index";
import fazenda from "../../public/fazenda.jpg";

export default function Home() {
  const myRef = useRef(null);

  const attractions: Attraction[] = [
    {
      id: "1",
      name: "Peças de Teatro",
      description: "Um caminho mágico repleto de árvores e luzes coloridas.",
      full_description:
        "Nesta trilha encantada, as crianças exploram o mundo das fadas com sons, aromas e uma atmosfera de fantasia.",
      image_url: `${fazenda.src}`,
      category: "aventura",
      gallery_images: ["/images/trilha-fadas-1.jpg"],
    },
    {
      id: "2",
      name: "Trilha das Fadas",
      description: "Um caminho mágico repleto de árvores e luzes coloridas.",
      full_description:
        "Nesta trilha encantada, as crianças exploram o mundo das fadas com sons, aromas e uma atmosfera de fantasia.",
      image_url: "/images/trilha-fadas.jpg",
      category: "aventura",
      gallery_images: ["/images/trilha-fadas-1.jpg"],
    },
    {
      id: "3",
      name: "Trilha das Fadas",
      description: "Um caminho mágico repleto de árvores e luzes coloridas.",
      full_description:
        "Nesta trilha encantada, as crianças exploram o mundo das fadas com sons, aromas e uma atmosfera de fantasia.",
      image_url: "/images/trilha-fadas.jpg",
      category: "aventura",
      gallery_images: ["/images/trilha-fadas-1.jpg"],
    },
    {
      id: "4",
      name: "Trilha das Fadas",
      description: "Um caminho mágico repleto de árvores e luzes coloridas.",
      full_description:
        "Nesta trilha encantada, as crianças exploram o mundo das fadas com sons, aromas e uma atmosfera de fantasia.",
      image_url: "/images/trilha-fadas.jpg",
      category: "aprendizado",
      gallery_images: ["/images/trilha-fadas-1.jpg"],
    },
    {
      id: "5",
      name: "Trilha das Fadas",
      description: "Um caminho mágico repleto de árvores e luzes coloridas.",
      full_description:
        "Nesta trilha encantada, as crianças exploram o mundo das fadas com sons, aromas e uma atmosfera de fantasia.",
      image_url: "/images/trilha-fadas.jpg",
      category: "especial",
      gallery_images: ["/images/trilha-fadas-1.jpg"],
    },
    {
      id: "6",
      name: "Trilha das Fadas",
      description: "Um caminho mágico repleto de árvores e luzes coloridas.",
      full_description:
        "Nesta trilha encantada, as crianças exploram o mundo das fadas com sons, aromas e uma atmosfera de fantasia.",
      image_url: "/images/trilha-fadas.jpg",
      category: "lazer",
      gallery_images: ["/images/trilha-fadas-1.jpg"],
    },
    {
      id: "7",
      name: "Trilha das Fadas",
      description: "Um caminho mágico repleto de árvores e luzes coloridas.",
      full_description:
        "Nesta trilha encantada, as crianças exploram o mundo das fadas com sons, aromas e uma atmosfera de fantasia.",
      image_url: "/images/trilha-fadas.jpg",
      category: "natureza",
      gallery_images: ["/images/trilha-fadas-1.jpg"],
    },
    {
      id: "8",
      name: "Trilha das Fadas",
      description: "Um caminho mágico repleto de árvores e luzes coloridas.",
      full_description:
        "Nesta trilha encantada, as crianças exploram o mundo das fadas com sons, aromas e uma atmosfera de fantasia.",
      image_url: "/images/trilha-fadas.jpg",
      category: "natureza",
      gallery_images: ["/images/trilha-fadas-1.jpg"],
    },
    {
      id: "9",
      name: "Trilha das Fadas",
      description: "Um caminho mágico repleto de árvores e luzes coloridas.",
      full_description:
        "Nesta trilha encantada, as crianças exploram o mundo das fadas com sons, aromas e uma atmosfera de fantasia.",
      image_url: "/images/trilha-fadas.jpg",
      category: "natureza",
      gallery_images: ["/images/trilha-fadas-1.jpg"],
    },
  ];
  const activities: Activity[] = [
    {
      id: "0",
      time: "9h00",
      title: "Abertura dos Portões",
      description: "Recepção calorosa das crianças e organização dos grupos",
      icon: "sun",
    },
    {
      id: "1",
      time: "9h30",
      title: "Café da Manhã",
      description: "Um excelente e nutritivo café da manhã!",
      icon: "clock",
    },
    {
      id: "2",
      time: "10h00",
      title: "Teatro Encantado",
      description: "Experiência incrivel!",
      icon: "sparkles",
    },
    {
      id: "3",
      time: "11h00",
      title: "Almoço",
      description: "Almoço saboroso e nutritivo!",
      icon: "clock",
    },
    {
      id: "4",
      time: "12h00",
      title: "Teatro Principal",
      description: "Um Teatro pra ficar guardado na memória",
      icon: "sparkles",
    },
  ];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/vanta/dist/vanta.clouds.min.js";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    CLOUD({
      el: myRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 500.0,
      minWidth: 200.0,
      skyColor: 0x6bbad9,
      cloudColor: 0xafc2de,
      sunColor: 0xff9615,
      sunGlareColor: 0xff6533,
    });
  });

  return (
    //Apresentação
    <Main>
      <ContainerAprent ref={myRef}>
        <Header />
      </ContainerAprent>
      <Apresentacion>
        <AttractionsCarousel attractions={attractions} />
        <RoutineDay activities={activities} />
      </Apresentacion>
    </Main>
  );
}
