import { useParams } from 'react-router-dom';
import { PROJECTS } from '../../utils/projects';
import { GitHub, Link } from '@mui/icons-material';
import Carousel from '../../components/carousel/carousel';
import { Links, ProjectInfoContainer, ProjectPageContainer, ProjectTitle } from './project.styles';
import './project.css';

const Project = () => {
  const { id } = useParams();
  const project = PROJECTS[id];
  const images = project.images;
  return (
    <ProjectPageContainer>
      <ProjectTitle>{project.name}</ProjectTitle>
      <Carousel slides={images} />
      <ProjectInfoContainer>
        <Links>
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
        </Links>
        <p>
          <b>Skills:</b> {project.skills}
        </p>
        <p>
          <b>Description:</b> {project.description}
        </p>
      </ProjectInfoContainer>
    </ProjectPageContainer>
  );
};

export default Project;
