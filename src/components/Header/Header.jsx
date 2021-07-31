import { HeaderContent } from "./HeaderStyle";

import logoImg from '../../assests/imagens/logo.png'

export function Header() {
  return (
    <HeaderContent>
      <img src={logoImg} alt="Logo" />
      <h1>Social Dev</h1>
    </HeaderContent>
  )
}