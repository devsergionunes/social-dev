import React from "react";
import { Details, Interactions, PublicationContent, Statistics, TextContent } from "./PublicationStyle";

import { ReactComponent as Like2Img} from '../../assests/imagens/like2.svg'
import { ReactComponent as LikeImg} from '../../assests/imagens/like.svg'
import privateImg from '../../assests/imagens/private.svg'
import publicImg from '../../assests/imagens/public.svg'
import clockImg from '../../assests/imagens/clock.svg'
import shareImg from '../../assests/imagens/share.svg'
import comentsImg from '../../assests/imagens/coments.svg'
import arrowImg from '../../assests/imagens/arrow.svg'

export function Publication({ publication }) {
  const [like, setLike] = React.useState(false);
  
  function dateFormat(puvlicationDate) {
    const date = (new Date().getTime() - new Date(puvlicationDate).getTime())
    const Format = {
      days: Math.floor(date / (24 * 60 * 60 * 1000)),
      hours: Math.floor(date / (60 * 60 * 1000) % 24),
      minutes: Math.floor(date / (60 * 1000) % 60),
      secunds: Math.floor(date / 1000 % 60)
    }
    if (Format.days) return `há ${Format.days} dias`
    if (Format.hours) return `há cerca de ${Format.hours} horas`
    if (Format.minutes) return `há cerca de  ${Format.minutes} minutos`
    else return "agora mesmo"
  }

  function hendleLiked() {
    if (like) {
      publication.like -= 1
      setLike(false)
    } else {
      publication.like += 1
      setLike(true)
    }
  }

  return (
    <PublicationContent>
      <img className='arrow' src={ arrowImg } alt="detalhes" />
      <Details>
        <div className='img'>
          <img src={ publication.image } alt="foto do usuario" />
        </div>
        <div className='details-name'>
          <h3>{ publication.name }</h3>
          <p>
            <span>
              <img src={clockImg} alt="icone de horario" />{ dateFormat(publication.date) }
            </span>
            <span>
              <img src={`${publication.privacy === 'public' ? publicImg : privateImg}`}
                alt={`${publication.privacy === 'public' ? 'Publico' : 'Privado'}`} />
              { `${publication.privacy === 'public' ? 'Púlico' : 'Somente eu'}`} 
            </span>
          </p>
        </div>
      </Details>

      <TextContent>
        <p>{ publication.text }</p>
      </TextContent>

      <Statistics>
        <p>
         <LikeImg/>
          { publication.like === 0 ? 'Seja o primeiro a curtir isso' : `${publication.like === 1 ? `${publication.like} pessoa curtiu isso` : `${publication.like} pessoas curtiram isso` }` }
        </p>

        <div>
          <p>{ publication.coments === 1 ? '1 comentario' : `${publication.coments} comentarios`}</p>
          <p>{ publication.share === 1 ? '1 compartilhamento' : `${publication.share} compartilhamentos`}</p>
        </div>
      </Statistics>

      <Interactions like={ like }>
        <button onClick={ hendleLiked }>
          { like ? <Like2Img/> : <LikeImg/> }
          Curtir
        </button>
        <button>
          <img src={ comentsImg } alt="comentar" />
          Comentar
        </button>
        <button>
          <img src={ shareImg } alt="compartilhar" />
          Compartilhar
        </button>
      </Interactions>
    </PublicationContent>
  )
}