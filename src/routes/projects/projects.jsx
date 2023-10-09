import Project from '../../components/project/project';
import { PROJECTS } from '../../utils/projects';
import './projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList">
        {PROJECTS.map((project, i) => {
          return <Project key={i} id={i} name={project.name} image={project.images[0].image} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
