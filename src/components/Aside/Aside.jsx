import { AsideContent } from "./AsideStyle";

import birthdayImg from '../../assests/imagens/bolo.png'
import HourglassImg from '../../assests/imagens/Hourglass.png'

export function Aside() {
  return (
    <AsideContent>
      <section className='birthday'>
        <div>
          <img src={ birthdayImg } alt="Bolo de aniversario" />
          <h3>Aniversariantes</h3>
        </div>
        <p>Nenhum dos seus amigos comemora aniversario hoje</p>
      </section>
      <section className='pendency'>
        <div>
          <img src={ HourglassImg } alt="Ampulheta do tempo" />
          <h3>Pendências</h3>
        </div>
        <span>Seg, 21 de jun</span>
        <p>Voce nao possui nenhuma pendencia para hoje</p>
      </section>
    </AsideContent>
  )
}