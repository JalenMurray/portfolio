import styled from 'styled-components';

export const NavbarContainer = styled.div`
  width: 100%;
  height: 100px;
  background: ${(props) => props.theme.oxfordBlue};
`;

export const Links = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    margin: 20px;
    font-size: 24px;
    color: ${(props) => props.theme.platinum};
  }
`;
