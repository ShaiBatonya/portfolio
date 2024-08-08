import styled from "styled-components";

export const Container = styled.div`
  padding: 5rem 10rem;

  h2 {
    font-size: 4rem;
    color: var(--text-color);
    margin-bottom: 3rem;
    text-align: center;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
        font-size: 2.4rem;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1.8rem;
        color: var(--text-color);
      }

      ul {
        margin-top: 1rem;
        padding-left: 1.5rem;

        li {
          font-size: 1.6rem;
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
          font-size: 1.4rem;
        }
      }
    }
  }

  @media (min-width: 1200px) {
    .projects {
      grid-template-columns: repeat(2, 1fr);
    }

    .project {
      padding: 3.5rem;
      
      .body {
        h3 {
          font-size: 2.6rem;
        }

        p {
          font-size: 2rem;
        }

        ul {
          li {
            font-size: 1.8rem;
          }
        }
      }

      footer {
        .tech-list {
          li {
            font-size: 1.6rem;
          }
        }
      }
    }
  }

  @media (max-width: 1200px) {
    padding: 4rem 8rem;

    h2 {
      font-size: 3.5rem;
    }

    .project {
      padding: 2.5rem;

      .body {
        h3 {
          font-size: 2.2rem;
        }

        p {
          font-size: 1.7rem;
        }

        ul {
          li {
            font-size: 1.5rem;
          }
        }
      }

      footer {
        .tech-list {
          li {
            font-size: 1.3rem;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;

    h2 {
      font-size: 3rem;
    }

    .project {
      padding: 2rem;

      .body {
        h3 {
          font-size: 2rem;
        }

        p {
          font-size: 1.6rem;
        }

        ul {
          li {
            font-size: 1.4rem;
          }
        }
      }

      footer {
        .tech-list {
          li {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
`;
