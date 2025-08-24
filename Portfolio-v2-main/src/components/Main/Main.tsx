import React from 'react';
import Particles from "react-tsparticles";
import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";
import { Education } from "../Education/Education";
import reactIcon from "../../assets/react.png";
import nodeIcon from "../../assets/node.png";
import mongodbIcon from "../../assets/mongodb.png";
import awsIcon from "../../assets/aws.png";
import dockerIcon from "../../assets/docker.png";
import kubernetesIcon from "../../assets/kubernetes.png";

interface MainProps {
  id?: string;
}

export const Main: React.FC<MainProps> = ({id}) => {
  return (
    <Container id={id}>
      <Particles
        id="tsparticles"
        options={{
          fullScreen: {
            enable: true,
            zIndex: 1
          },
          detectRetina: true,
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push"
              },
              onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                  enable: false,
                  force: 60,
                  smooth: 10
                }
              },
              resize: true
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 2
              },
              push: {
                quantity: 2
              }
            }
          },
          particles: {
            color: {
              value: "#ffffff"
            },
            move: {
              enable: true,
              speed: 2
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              value: 15
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.2,
                speed: 1,
                sync: false
              },
              random: true,
              value: 1
            },
            rotate: {
              animation: {
                enable: true,
                speed: 5,
                sync: false
              },
              direction: "random",
              random: true,
              value: 0
            },
            shape: {
              image: [
                {
                  src: reactIcon,
                  width: 20,
                  height: 20
                },
                {
                  src: nodeIcon,
                  width: 20,
                  height: 20
                },
                {
                  src: mongodbIcon,
                  width: 20,
                  height: 20
                },
                {
                  src: awsIcon,
                  width: 20,
                  height: 20
                },
                {
                  src: dockerIcon,
                  width: 20,
                  height: 20
                },
                {
                  src: kubernetesIcon,
                  width: 20,
                  height: 20
                }
              ],
              type: "image"
            },
            size: {
              random: false,
              value: 16
            }
          }
        }}
      />
      <Hero />
      <About />
      <Project />
      <Education />
      <Contact />
    </Container>
  );
}
