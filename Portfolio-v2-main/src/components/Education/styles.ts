import styled from "styled-components";

export const Container = styled.div`
  padding: 5rem 10rem;

  h2 {
    font-size: 4rem;
    color: var(--text-color);
    margin-bottom: 3rem;
    text-align: center;
  }

  .education-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .education-item {
    background: var(--card-background);
    padding: 3rem;
    border-radius: 1rem;
    box-shadow: 0 4px 8px var(--card-shadow);
    transition: transform 0.3s, box-shadow 0.3s;
    display: flex;
    align-items: center;
    gap: 2rem;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 8px 16px var(--card-shadow);
    }

    .icon {
      font-size: 4rem;
      color: var(--blue);
    }

    h3 {
      font-size: 2.4rem;
      color: var(--text-color);
      margin-bottom: 0.5rem;
    }

    h4 {
      font-size: 2rem;
      color: var(--text-color);
      margin-bottom: 0.5rem;
    }

    span {
      font-size: 1.6rem;
      color: var(--text-color);
      display: block;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.8rem;
      color: var(--text-color);
      line-height: 1.6;
    }
  }
`;
