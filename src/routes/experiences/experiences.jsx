import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Experience from '../../components/experience/experience';
import { ExperiencePageContainer } from './experiences.styles';

const EXPERIENCE = [
  {
    type: 'school',
    dates: '2016 - 2020',
    title: 'Cisco Networking Academy',
    description: <p>CCNA and CCENT Certifications</p>,
  },
  {
    type: 'school',
    dates: '2020 - 2023',
    title: 'University of Maryland College Park',
    description: <p>Bachelors of Science - Computer Science</p>,
  },
  {
    type: 'work',
    dates: '2021 - 2023',
    title: 'System Administrator - UMIACS',
    description: (
      <div>
        <p>Worked at a helpdesk and assisted users</p>
        <p>Software and hardware installation and configuration</p>
        <p>Development of internal software using Django and Python</p>
      </div>
    ),
  },
  {
    type: 'work',
    dates: '2023 - Present',
    title: 'Software Developer - UMIACS',
    description: (
      <div>
        <p>Developed internal software using Python and Django Framework</p>
        <p>Utilized Git and GitLab for version control and collaborative code management</p>
        <p>Maintianed relational databases to store and retireve data efficiently</p>
      </div>
    ),
  },
];

const Experiences = () => {
  return (
    <ExperiencePageContainer>
      <VerticalTimeline lineColor="3e497a">
        {EXPERIENCE.map((e, i) => (
          <Experience key={i} experience={e} />
        ))}
      </VerticalTimeline>
    </ExperiencePageContainer>
  );
};

export default Experiences;
