import styled from "styled-components";

export const AsideContent = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width:800px){
    display: none;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    div {
      font-size: .875rem;
      color: var(--text-title);
      display: inline-flex;
      align-items: center;
      justify-content: center;

      background: var(--shape);
      padding: 0.5rem 0;
      border-radius: 0.8rem 0.8rem 0 0 ;

      img {
        max-width: 3rem;
      }
    }

    p {
      padding: 0.5rem;
      text-align: center;
      font-size: 0.75rem;
      color: var(--text-body);
      background: var(--shape);
      border-radius:0 0 0.8rem 0.8rem;
    }
  }

  .pendency {
    gap:0;

    span {
      padding: 0.2rem 0.5rem;
      font-size: 0.7rem;
      font-weight: 600;
      background: #eee;
    }
  }
`