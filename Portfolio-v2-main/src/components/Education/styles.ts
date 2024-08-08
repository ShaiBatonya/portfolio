import styled from "styled-components";

export const Container = styled.div`
  padding: 5rem 10rem;

  h2 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    color: var(--text-color);
    margin-bottom: 3rem;
    text-align: center;
  }

  .education-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .education-item {
    background: var(--card-background);
    padding: 2.5rem;
    border-radius: 1rem;
    box-shadow: 0 6px 10px var(--card-shadow);
    transition: transform 0.3s, box-shadow 0.3s;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 12px 20px var(--card-shadow);
    }

    .education-header {
      display: flex;
      flex-direction: column;
      align-items: center;

      h3 {
        font-size: clamp(2rem, 3vw, 2.4rem);
        color: var(--primary-color);
        margin-bottom: 0.5rem;
      }

      h4 {
        font-size: clamp(1.6rem, 2.5vw, 2rem);
        color: var(--secondary-color);
        margin-bottom: 0.5rem;
      }
    }

    span {
      font-size: clamp(1.2rem, 2vw, 1.6rem);
      color: var(--text-color);
      display: block;
      margin-bottom: 1rem;
    }

    p {
      font-size: clamp(1.4rem, 2.5vw, 1.8rem);
      color: var(--text-color);
      line-height: 1.6;
    }
  }

  .carousel-container {
    margin-top: 3rem;
    text-align: center;

    h3 {
      font-size: clamp(2rem, 4vw, 2.5rem);
      margin-bottom: 1rem;
    }

    .carousel {
      max-width: 80%;
      margin: 0 auto;

      .slide img {
        border-radius: 1rem;
        max-height: 300px;
        object-fit: contain;
        width: 100%;
      }

      .legend {
        font-size: clamp(1.2rem, 2vw, 1.6rem);
        background: rgba(0, 0, 0, 0.5);
        color: #fff;
        padding: 0.3rem 0.6rem; /* הצרת הפס השחור */
        border-radius: 0.5rem;
      }
    }
  }

  @media (min-width: 768px) {
    .education-list {
      grid-template-columns: 1fr 1fr;
    }

    .education-item {
      flex-direction: column;
      text-align: left;

      p {
        text-align: left;
      }
    }

    .carousel-container .carousel {
      max-width: 60%;
    }
  }

  @media (min-width: 480px) {
    .carousel-container .carousel {
      max-width: 75%;
    }
  }

  @media (max-width: 480px) {
    .carousel-container .carousel {
      max-width: 90%;
    }
  }
`;