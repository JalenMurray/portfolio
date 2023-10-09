import { useParams } from 'react-router-dom';
import { PROJECTS } from '../../utils/projects';
import { GitHub, Link } from '@mui/icons-material';
import { Carousel } from 'react-bootstrap';
import './project.css';

const Project = () => {
  const { id } = useParams();
  const project = PROJECTS[id];
  const images = project.images;
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <Carousel data-bs-theme="dark">
        {images.map(({ image, caption }, i) => {
          return (
            <Carousel.Item key={i}>
              <img src={image} alt={caption} />
              <Carousel.Caption>{caption}</Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
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
