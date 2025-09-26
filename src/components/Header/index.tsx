import { Search } from "lucide-react";
import { HeaderContainer } from "./style";

export default function Header() {
  return (
    <HeaderContainer className="relative">
      <a href="">Sobre</a>
      <a href="">Explorar</a>
      <div className="Logo"><a>LOGO</a></div>
      <a href="">Galeria</a>
      <p className="flex"><Search className="w-5"/> Search</p>
    </HeaderContainer>
  );
}
