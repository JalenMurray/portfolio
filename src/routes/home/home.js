import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
  align-items: center;
  font-family: 'Arial', sans-serif;
  color: #3e497a;
`;

export const About = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #21325e;
  color: #f0f0f0;
`;

export const Name = styled.h2`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 80px;
  color: #e9d35b;
  height: 50px;
`;

export const Prompt = styled.div`
  width: 40%;
  font-size: 30px;

  svg {
    font-size: 60px;
    margin: 5px;
    color: white;
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

  h1,
  h2 {
    font-weight: bold;
    color: #3e497a;
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
