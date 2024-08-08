import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  .about-text {
    flex: 1;
    padding: 2rem;

    h2 {
      font-size: clamp(2.5rem, 5vw, 4rem);
      color: var(--text-color);
      margin-bottom: 2rem;
      text-align: center;
    }

    p {
      font-size: clamp(1.6rem, 2.5vw, 2rem);
      color: var(--text-color);
      line-height: 1.6;
      margin-bottom: 1.5rem;
      text-align: center;

      @media (min-width: 768px) {
        text-align: left;
      }
    }

    h3 {
      font-size: clamp(2rem, 3vw, 2.5rem);
      color: var(--primary-color);
      margin-top: 2rem;
      text-align: center;

      @media (min-width: 768px) {
        text-align: left;
      }
    }

    .skills {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1.5rem;
      margin-top: 2rem;

      .skill-icon {
        width: 3rem;
        height: 3rem;
      }
    }
  }

  .about-image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    img {
      max-width: 100%;
      border-radius: 1rem;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s, box-shadow 0.3s;

      @media (min-width: 768px) {
        max-width: 80%;
      }

      @media (min-width: 1024px) {
        max-width: 70%;
      }

      &:hover {
        transform: translateY(-10px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      }
    }

    @media (min-width: 768px) {
      justify-content: flex-end;
    }
  }
`;
