import React from 'react';
import { LinkedIn, Email, GitHub } from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  About,
  HomeContainer,
  Name,
  Prompt,
  SkillCategories,
  Skills,
  SkillList,
} from './home.styles';

const Home = () => {
  return (
    <HomeContainer>
      <About>
        <Name className="mb-4">Hi, My Name is Jalen</Name>
        <Prompt className="mt-4">
          <p>A software developer with a passion for learning and creating.</p>
          <a href="https://www.linkedin.com/in/jalen-murray/">
            <LinkedIn />
          </a>
          <a href="mailto:jalenmmurray@gmail.com">
            <Email />
          </a>
          <a href="https://github.com/JalenMurray">
            <GitHub />
          </a>
        </Prompt>
      </About>
      <Skills>
        <h1 className="fw-bold fs-105">Skills</h1>
        <SkillCategories>
          <li className="item">
            <h2> Front-End</h2>
            <SkillList>
              React | HTML | CSS | NPM | BootStrap | StyledComponents | Tailwind | DaisyUI
            </SkillList>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <SkillList>
              NodeJS | ExpressJS | Next.js | AWS | AWS Amplify | Google Cloud Platform | Django |
              Docker | Kubernetes | MySQL | NoSQL | MongoDB | Firebase | JWT Authentication |
              RESTful API | GraphQL API
            </SkillList>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <SkillList>TypeScript | Javascript | Python | Java | Kotlin | C </SkillList>
          </li>
          <li className="item">
            <h2>Relevant Courses</h2>
            <SkillList>
              Complete React Developer | Object Oriented Programming | Discrete Structures |
              Algorithms | Intro to Cloud Computing | Web Development with Javascript | Intro to
              Containers | App Development using Microservices and Serverless | Software Engineering
              | Mobile Development - Android | Intro to Data Science | Computer and Network Security
              | Intro to Artificial Intelligence |
            </SkillList>
          </li>
        </SkillCategories>
      </Skills>
    </HomeContainer>
  );
};

export default Home;
