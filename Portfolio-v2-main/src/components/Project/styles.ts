import styled from "styled-components";

export const Container = styled.div`
  padding: clamp(2rem, 4vw, 5rem) clamp(1rem, 4vw, 10rem);

  h2 {
    font-size: clamp(2.2rem, 3.5vw, 4rem);
    color: var(--text-color);
    margin-bottom: clamp(2rem, 4vw, 3rem);
    text-align: center;
    text-wrap: balance;
    letter-spacing: -0.01em;
    line-height: 1.2;
  }

.project-links .live-demo-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 36px;
  background: linear-gradient(180deg, var(--green) 0%, #1ea856 100%);
  color: white;
  padding: 0.6rem 1rem;
  margin-left: 10px;
  text-decoration: none;
  border-radius: 12px;
  border: 1px solid transparent;
  font-size: 14px;
  font-weight: 500;
  transition: transform 0.12s ease, box-shadow 0.12s ease, border-color 0.12s ease;
}

.project-links .live-demo-button:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 12px rgba(35, 206, 107, 0.3);
}

.project-links .live-demo-button:active {
  transform: scale(0.98);
}


  .carousel-container {
    margin-bottom: 3rem;

    .carousel .slide img {
      border-radius: 1rem;
      max-height: 400px;
      object-fit: contain;
      width: auto;
      margin: 0 auto;
      max-width: 100%;
    }
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: clamp(12px, 3.2vw, 20px);
  }

  .project {
    background: var(--card-background);
    padding: clamp(2rem, 3.2vw, 3rem);
    border-radius: var(--radius);
    border: 1px solid var(--border);
    box-shadow: var(--shadow-sm);
    transition: transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;

    &:hover {
      transform: translateY(-2px);
      border-color: #334155;
      box-shadow: 0 8px 24px rgba(0,0,0,0.25);
    }

    &:focus-within {
      transform: translateY(-2px);
      border-color: var(--primary);
      box-shadow: 0 8px 24px rgba(0,0,0,0.25);
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
          border-radius: 8px;
          transition: transform 0.12s ease;

          &:hover {
            transform: scale(1.05);
          }

          &:active {
            transform: scale(0.95);
          }

          img {
            width: 2.5rem;
            height: 2.5rem;
          }
        }
      }
    }
/* Duplicate styles removed - using styles above */

    .body {
      margin-top: 2rem;

      h3 {
        font-size: clamp(1.8rem, 2.5vw, 2.4rem);
        margin-bottom: 1rem;
        text-wrap: balance;
        letter-spacing: -0.01em;
        line-height: 1.2;
      }

      p {
        font-size: clamp(1.6rem, 1.8vw, 1.8rem);
        color: var(--text-color);
        line-height: 1.6;
        text-wrap: pretty;
      }

      ul {
        margin-top: 1rem;
        padding-left: 1.5rem;

        li {
          font-size: clamp(1.4rem, 1.6vw, 1.6rem);
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }
      }
    }

    footer {
      margin-top: 2rem;

      .tech-list {
        display: flex;
        flex-wrap: wrap;
        gap: clamp(0.8rem, 1vw, 1rem);

        li {
          background: var(--green);
          color: #fff;
          padding: 0.5rem 1rem;
          border-radius: 1rem;
          font-size: clamp(1.2rem, 1.4vw, 1.4rem);
          font-weight: 500;
          transition: transform 0.12s ease, box-shadow 0.12s ease;

          &:hover {
            transform: translateY(-1px);
            box-shadow: 0 2px 8px rgba(35, 206, 107, 0.3);
          }
        }
      }
    }
  }

  @media (min-width: 1200px) {
    .projects {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .projects {
      grid-template-columns: 1fr;
    }
    
    .carousel-container {
      margin-bottom: 2rem;
    }
  }
`;
