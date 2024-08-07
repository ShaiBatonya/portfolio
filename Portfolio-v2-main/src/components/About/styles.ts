import styled from "styled-components";

export const Container = styled.div`
  padding: 5rem 10rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .about-text {
    flex: 1;
    margin-right: 2rem;

    h2 {
      font-size: 4rem;
      color: var(--text-color);
      margin-bottom: 2rem;
    }

    p {
      font-size: 1.8rem;
      color: var(--text-color);
      margin-bottom: 1rem;
      line-height: 1.6;
    }

    .skills {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      margin-top: 1rem;

      .skill-icon {
        width: 6rem;
        height: 6rem;
      }
    }
  }

  .about-image {
    flex: 1;
    text-align: center;

    img {
      width: 100%;
      max-width: 300px;
      border-radius: 50%;
    }
  }
`;
