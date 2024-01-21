import { useNavigate } from 'react-router-dom';

import { CardContainer, DisplayImage, InfoContainer, ProjectTitle } from './project-card.styles';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  const display_image = project.images[0];

  const navigateHandler = () => navigate(`/project/${project.id}`);

  return (
    <CardContainer onClick={navigateHandler}>
      <DisplayImage src={display_image.image} alt={display_image.caption} />
      <InfoContainer>
        <ProjectTitle>{project.name}</ProjectTitle>
      </InfoContainer>
    </CardContainer>
  );
};

export default ProjectCard;
