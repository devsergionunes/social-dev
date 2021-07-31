import Styled from 'styled-components'

export const ConteinerContent = Styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 6fr 3.5fr;
  gap:1.5rem;

  padding: 1rem 4rem;

  @media (min-width:550px) and (max-width: 800px) {
    grid-template-columns: 3fr 6fr;
    padding: 1rem 2rem;
  }
  @media  (max-width:549px) {
    grid-template-columns: 1fr;
    padding: 0.5rem 1rem;
  }
`