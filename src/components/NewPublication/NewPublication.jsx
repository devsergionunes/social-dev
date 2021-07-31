import React from "react";
import { api } from "../../services/api";

import { NewPublicationContent } from "./NewPublicationStyle";

import writeImg from '../../assests/imagens/write.svg'
import photographImg from '../../assests/imagens/photograph.svg'
import videoImg from '../../assests/imagens/video.svg'
import sendImg from '../../assests/imagens/send.svg'
import publicImg from '../../assests/imagens/public.svg'
import privateImg from '../../assests/imagens/private.svg'

// objeto simulando os dados do usuario logado
import user2Img from '../../assests/imagens/user2.jpg'
const user = {
  name: 'Sergio Nunes',
  image: user2Img,
}

export function NewPublication({setPublications}) {
  const [text, setText] = React.useState('');
  const [privacy, setPrivacy] = React.useState('public');

  async function hendlePublication(event) {
    event.preventDefault();
    if (!text.trim() || !user || !privacy) return;

    const publication = {
      id:3,
      ...user,
      text,
      privacy,
      date: new Date(),
      like: 0,
      coments: 0,
      share: 0
    }
    const { data } = await api.post('/publication', publication)
    setPublications((publications => [data.publication, ...publications]))
    
    setText('');
  }


  return (
    <NewPublicationContent onSubmit={(event) => hendlePublication(event)}>
      <div>
        <label htmlFor="escrever">
          <img src={ writeImg } alt="escrever"/>
        </label>
        <textarea
          name="escrever"
          id="escrever"
          placeholder='Escreva uma publicação...'
          value={text}
          onChange={({target}) => setText(target.value)}
        />
        <img
          src={photographImg}
          alt="buscar foto"
          style={{marginRight: '0.5rem'}}
        />
        <img src={ videoImg } alt="buscar video" />
      </div>
      <div>
        <p>
          <img src={ privacy === 'public' ? publicImg : privateImg } alt="privacidade" />
          <select onChange={({target}) => setPrivacy(target.value) }>
            <option value="public">
              Público
            </option>
            <option value="private">
              Somente eu
            </option>
          </select>
        </p>
        <button>
          <img src={ sendImg } alt="publicar" />
          Publicar
        </button>
      </div>
    </NewPublicationContent>
  )
}