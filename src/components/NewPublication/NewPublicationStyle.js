import styled from "styled-components";

export const NewPublicationContent = styled.form`
  width: 100%;
  background: var(--shape);
  padding: 1rem;
  border-radius: 1rem;
  margin-bottom: 1rem;

  display: flex;
  flex-direction: column;

  div {
    display: inline-flex;

    img {
      width: 1.8rem;
      height: 1.8rem;
      cursor: pointer;
    }

    textarea {
      font-size: 1rem;
      font-weight: 500;
      padding: 0.2rem 0.3rem;
      border: 0;
      width: 100%;
      resize: none ;
      word-break: break-word;
      outline: none;
      overflow-y: hidden;
      
    }
  }

  div:nth-child(2) {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    font-size: 0.75rem;
    border: none;
    display: inline-flex;
    align-items: center;
    
    img {
      width: 0.95rem;
      height: 0.95rem;
      margin-right: 0.2rem;
    }

    select {
      color: var(--text-body);
      border: none;
      outline: none;
    }
  }
  button {
    max-width: 10rem;
    height: 1.8rem;
    padding: 0 2.5rem;
    border:0;
    border-radius: 1rem;
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--text-title);
    background: var(--background);

    display: inline-flex;
    align-items: center;

    transition: filter .3s;

    img {
      width: 1rem;
      height: 1rem;
      margin-right: 0.3rem
    }

    &:hover {
      filter: brightness(0.95);
    }
  }
`