import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../src/routes/home/home';
import Projects from '../src/routes/projects/projects';
import Experiences from './routes/experiences/experiences';
import Navbar from './components/navbar/navbar';
import Project from './routes/project/project';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/experiences" element={<Experiences />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
