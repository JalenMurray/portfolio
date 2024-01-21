import styled from 'styled-components';

export const PageContainer = styled.div`
  min-height: calc(100vh - 100px);
  height: fit-content;
  background-color: ${(props) => props.theme.platinum};
  text-align: center;
  overflow: hidden;
`;

export const Header = styled.h1`
  font-size: 4rem;
  margin: 20px;
`;

export const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px;
`;
