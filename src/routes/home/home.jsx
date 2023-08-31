import React from 'react';
import { LinkedIn, Email, GitHub } from '@mui/icons-material';
import './home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Jalen</h2>
        <div className="prompt">
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
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>ReactJS | HTML, CSS | NPM | BootStrap | StyledComponents</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS | ExpressJS | Django | MySQL | NoSQL | MongoDB | Firebase</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Java | Javascript | Python | C | HTML | CSS | Kotlin</span>
          </li>
          <li className="item">
            <h2>Relevant Courses</h2>
            <span>
              Object Oriented Programming | Discrete Structures | Algorithms | Computer Systems | Organization of
              Programming Languages | Web Development with Javascript | Programming Language Paradigms | Software
              Engineering | Mobile Development - Android | Intro to Data Science | Computer and Network Security | Intro
              to Artificial Intelligence
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
