import styled from 'styled-components';

export const ProjectPageContainer = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.platinum};
`;

export const ProjectTitle = styled.h1`
  margin: 30px;
  color: ${(props) => props.theme.oxfordBlue};
  font-size: 3.5rem;
`;

export const ProjectInfoContainer = styled.div`
  text-align: center;
  color: ${(props) => props.theme.oxfordBlue};
  b {
    font-size: 30px;
  }
  p {
    font-size: 24px;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: center;

  svg {
    font-size: 60px;
    color: ${(props) => props.theme.oxfordBlue};
  }
`;

export const Skill = styled.h4`
  font-size: 24px;
`;
