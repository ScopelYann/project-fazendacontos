"use client";

import Header from "@/components/Header";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import CLOUD from "vanta/dist/vanta.clouds.min";
import { Apresentacion, ContainerAprent, Main} from "./style";

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    const vantaEffect = CLOUD({
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
        <Apresentacion></Apresentacion>
      </ContainerAprent>
    </Main>
  );
}
