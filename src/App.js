import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeProvider, createGlobalStyle } from 'styled-components';

import Home from '../src/routes/home/home.jsx';
import Projects from '../src/routes/projects/projects';
import Experiences from './routes/experiences/experiences';
import Navbar from './components/navbar/navbar';
import Project from './routes/project/project';

const colorTheme = {
  oxfordBlue: '#14213D',
  webOrange: '#FCA311',
  platinum: '#E5E5E5',
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  a {
    text-decoration: none;
  }
`;

function App() {
  return (
    <ThemeProvider theme={colorTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/experiences" element={<Experiences />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
