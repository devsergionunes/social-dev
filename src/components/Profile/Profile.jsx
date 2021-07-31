import { PerfilContent } from './ProfileStyle'

import capaImg from '../../assests/imagens/img-capa.jpg'
import user2Img from '../../assests/imagens/user2.jpg'
import localizationImg from '../../assests/imagens/localization.svg'
import jobImg from '../../assests/imagens/job.svg'
import schoolImg from '../../assests/imagens/school.svg'

export function Profile() {
  return (
    <PerfilContent>
      <img src={capaImg} alt="imagem de capa do perfil" />
      <div className='datails'>
        <div className='img'>
          <img src={ user2Img } alt="foto de perfil" />
        </div>
        <h2>Sergio Nunes</h2>
        <span>@devsergionunes</span>
        <p>Front-end Developer</p>

        <div className='localization'>
          <img src={localizationImg} alt="icone de localizaçao" />
          <p>Santa Maria /RS - Brasil</p>
        </div>
        <div className='job-school'>
          <p>
            <img src={ jobImg } alt="trabalho" /> InCicle
          </p>
          <p>
            <img src={ schoolImg } alt="falculdade" /> Unimar
          </p>
        </div>
      </div>
    </PerfilContent>
  )
} 