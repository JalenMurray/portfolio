import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { School, Work } from '@mui/icons-material';

const iconStyles = {
  school: { background: '#14213D', color: '#E5E5E5' },
  work: { background: '#FCA311', color: '#E5E5E5' },
};

const iconTypes = {
  school: <School />,
  work: <Work />,
};

const Experience = ({ experience }) => {
  const { type, dates, title, description } = experience;
  return (
    <VerticalTimelineElement
      className={`vertical-timeline-element--${type}`}
      date={dates}
      iconStyle={iconStyles[type]}
      icon={iconTypes[type]}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      {description}
    </VerticalTimelineElement>
  );
};

export default Experience;
