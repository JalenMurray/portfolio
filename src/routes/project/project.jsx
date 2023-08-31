import { useParams } from 'react-router-dom';
import { PROJECTS } from '../../utils/projects';
import { GitHub, Link } from '@mui/icons-material';
import './project.css';

const Project = () => {
  const { id } = useParams();
  const project = PROJECTS[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt={project.name} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <p>
        <b>Description:</b> {project.description}
      </p>
      <div className="links">
        {project.github && (
          <a href={project.github}>
            <GitHub />
          </a>
        )}
        {project.link && (
          <a href={project.link}>
            <Link />
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
