import styled from "styled-components";

export const PerfilContent = styled.section`
  background: var(--shape);
  border-radius: 0.8rem;
  overflow: hidden;
  padding-bottom: 1.5rem ;
  height: max-content;

  img {
    height: 250px;
    max-width: max-content;
  }

  .datails {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media  (max-width:549px) {
      justify-content: center;
    }

    .img {
      margin-top: -80px;
      width: 110px;
      height: 110px;
      border: 2px solid var(--shape);
      border-radius: 50%;
      box-shadow: 0px 0px 1px 5px var(--text-title);
      overflow: hidden;
      
      img {
        min-width: 100px;
        max-width: 100%;
        height: auto;
      }
    }

    h2 {
      margin-top: 0.5rem;
      font-size: 1.2rem;
      color: var(--text-title)
    }

    span {
      font-size: .75rem;
      font-weight: 600;
      color: #111;
    }

    p {
      font-size: .75rem;
      color: #222;
    }

    .localization {
      align-self: flex-start;
      display: flex;
      align-items: center;
      gap:0.5rem;
      margin-top: 1rem;
      padding: 0 1rem;

      @media  (max-width:549px) {
        margin: auto;
      } 

      img {
        width: 30px;
        height: 30px;
      }
      
      p {
        font-size: 0.85rem;
        color: var(--text-body);
      }
    }

    .job-school {
      width: 100%;
      padding: 0 1rem;
      margin-top: 0.5rem;
      display: inline-flex;
      align-items: center;
      gap: 2rem;

      @media  (max-width:549px) {
        justify-content: center;
      }

      p {
      font-size: 0.85rem;
      color: var(--text-body);
      display: inline-flex;
      align-items: center;

        img {
          margin-right: 0.2rem;
          width: 25px;
          height: 25px;
        }
      }
    }
  }
`
