import { PROJECTS } from '../../utils/projects';
import ProjectCard from '../../components/projects/project-card/project-card';
import { PageContainer, Header, ProjectList } from './projects.styles';

const Projects = () => {
  return (
    <PageContainer>
      <Header>My Personal Projects</Header>
      <ProjectList>
        {PROJECTS.map((project, i) => {
          return <ProjectCard key={i} project={project} />;
        })}
      </ProjectList>
    </PageContainer>
  );
};

export default Projects;
