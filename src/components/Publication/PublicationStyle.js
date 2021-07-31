import styled from "styled-components";

export const PublicationContent = styled.div`
  width: 100%;
  padding: 1rem;
  border-radius: 1rem;
  background: var(--shape);
  position: relative;

  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  @media  (max-width:549px) {
    padding: 0.6rem;
  }

  .arrow {
    width: 1.2rem;
    height: 1.2rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }

`

export const Details = styled.div`
  width: 100%;
  display: inline-flex;
  align-items: center;

  .img {
    width: 3rem;
    height: 3rem;
    border: 1px solid var(--shape);
    border-radius: 50%;
    box-shadow: 0 0 1px 2.5px var(--text-title);
    overflow: hidden;

    img {
      width: 3rem;
      height: auto;
      max-height: 3.5rem;
    }
  }

  .details-name {
    margin-left: 0.5rem;

    h3 {
      font-size: 1rem;
      color: var(--text-title);
      line-height: 1rem;
    }

    p {
      font-size: 0.68rem;
      
      span {
        display: inline-flex;
        align-items: center;
        padding-right: 1rem;
      }

      img {
        margin-right: 0.2rem;
        width: 0.75rem;
        height: 0.75rem;
      }
    }
  }
`
export const TextContent = styled.div`
  width: 100%;
  padding: 0.5rem 0;

  font-size: 0.9rem;
  color: var(--text-body);

`
export const Statistics = styled.div`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;

  p {
    display: inline-flex;
    align-items: center;
    font-size: 0.68rem;

    @media  (max-width:400px) {
      font-size: 0.65rem;
    }

    img , svg{
      margin-top: -0.4rem;
      width: 1.2rem;
      height: 1.2rem; 
    }
  }

  div {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
  }


`
export const Interactions = styled.div`
  width: 100%;
  margin-top: 0.3rem;
  padding: 0.3rem;
  border-top: 1px solid var(--background);
  border-bottom: 1px solid var(--background);
  display: inline-flex;
  gap: 1rem;

  button {
    width: 100%;
    height: 1.8rem;
    border: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    font-size: 0.95rem;
    color: var(--text-title);
    font-weight: 500;
    background: var(--background);
    border-radius: 1rem;
    transition: filter 0.3s;

    img , svg{
      width: 1rem;
      height: 1rem;
      margin-right: 0.2rem;
    }

    &:hover {
      filter: brightness(.95);
    }

  }
  @media  (max-width:549px) {
    gap: 0.3rem;

    button {
      padding: 0 1rem !important;
      font-size: 0.8rem;
    }
  }
`