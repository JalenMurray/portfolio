import { useNavigate } from 'react-router-dom';

const Project = ({ image, name, id }) => {
  const navigate = useNavigate();

  const navigateHandler = () => navigate(`/project/${id}`);

  return (
    <div className="projectItem" onClick={navigateHandler}>
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
    </div>
  );
};

export default Project;
