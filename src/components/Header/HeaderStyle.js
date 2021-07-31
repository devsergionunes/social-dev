import styled from "styled-components";

export const HeaderContent = styled.header`
  width: 100%;
  padding: 1rem 4rem;
  background: var(--blue);
  display :flex;
  align-items: center;
  gap: 1rem;
  
  h1 {
    font-size: 1.5rem;
    color: var(--title-primery);
    text-shadow: 1px 1px 1px rgba(0,0,0, 0.2);
  }

  @media (min-width:550px) and (max-width:720) {
    padding: 0.5rem 2rem;
  }
  @media  (max-width:549px) {
    padding: 0.3rem 1rem;
  }
`