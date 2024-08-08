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
  }
`;