import styled from "styled-components";

export const Container = styled.div`
  padding: 5rem 10rem;

  h2 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    color: var(--text-color);
    margin-bottom: 3rem;
    text-align: center;
  }

  .projects {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .project {
    background: var(--card-background);
    padding: 3rem;
    border-radius: 1rem;
    box-shadow: 0 4px 8px var(--card-shadow);
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 8px 16px var(--card-shadow);
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      svg {
        width: 4rem;
        height: 4rem;
      }

      .project-links {
        a {
          margin-left: 1rem;

          img {
            width: 2.5rem;
            height: 2.5rem;
          }
        }
      }
    }

    .body {
      margin-top: 2rem;

      h3 {
        font-size: clamp(1.8rem, 3vw, 2.4rem);
        margin-bottom: 1rem;
      }

      p {
        font-size: clamp(1.4rem, 2.5vw, 1.8rem);
        color: var(--text-color);
      }

      ul {
        margin-top: 1rem;
        padding-left: 1.5rem;

        li {
          font-size: clamp(1.2rem, 2vw, 1.6rem);
          margin-bottom: 0.5rem;
        }
      }
    }

    footer {
      margin-top: 2rem;

      .tech-list {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;

        li {
          background: var(--green);
          color: #fff;
          padding: 0.5rem 1rem;
          border-radius: 1rem;
          font-size: clamp(1rem, 2vw, 1.4rem);
        }
      }
    }
  }

  @media (min-width: 768px) {
    .projects {
      grid-template-columns: 1fr 1fr;
    }
  }
`;