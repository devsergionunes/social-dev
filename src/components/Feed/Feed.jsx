import React from 'react'
import { api } from '../../services/api'
import { NewPublication } from '../NewPublication/NewPublication'

import { Publication } from '../Publication/Publication'
import { FeedContent } from './FeedStyle'

export function Feed() {
  const [publucations, setPublications] = React.useState([])

  React.useEffect(() => {
    async function request() {
      const { data } = await api.get('/publication')
      setPublications(data.publications);
    }
    request()
  }, [])
  
  return (
    <FeedContent>
      <NewPublication setPublications={ setPublications }/>
      {publucations.map(publication => (
        <Publication key={publication.id} publication={ publication }/>
      )) }
    </FeedContent>
  )
}