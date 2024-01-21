import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
  align-items: center;
  font-family: 'Arial', sans-serif;
`;

export const About = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${(props) => props.theme.oxfordBlue};
`;

export const Name = styled.h2`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 80px;
  color: ${(props) => props.theme.webOrange};
  height: 50px;
`;

export const Prompt = styled.div`
  color: ${(props) => props.theme.platinum};
  width: 40%;
  font-size: 30px;

  svg {
    font-size: 60px;
    margin: 5px;
    color: ${(props) => props.theme.platinum};
  }
`;

export const Skills = styled.div`
  font-size: 35px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${(props) => props.theme.platinum};

  h1,
  h2 {
    font-weight: bold;
    color: ${(props) => props.theme.oxfordBlue};
  }

  h1 {
    font-size: 75px;
    margin-bottom: 4rem;
  }

  h2 {
    font-size: 50px;
  }

  li {
    margin-bottom: 4rem;
  }
`;

export const SkillCategories = styled.ol`
  list-style: none;
  width: 60%;
`;

export const SkillList = styled.span`
  font-size: 30px;
`;
