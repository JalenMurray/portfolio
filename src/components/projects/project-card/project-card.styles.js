import styled from 'styled-components';

export const CardContainer = styled.div`
  cursor: pointer;
  text-align: left;
  margin: 15px;
  border-radius: 15px;
  border: 3px solid #21325e;
  width: 23.5%;
  height: 400px;
  overflow: hidden;

  @media only screen and (max-width: 2300px) {
    width: 31.5%;
  }

  @media only screen and (max-width: 1700px) {
    width: 47%;
  }

  @media only screen and (max-width: 1700px) {
    margin: 5px;
    margin-top: 20px;
  }

  @media only screen and (max-width: 900px) {
    height: 400px;
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    height: 300px;
    width: 100%;
    margin: 0;
    margin-top: 20px;
  }
`;

export const DisplayImage = styled.img`
  width: 100%;
  height: 80%;
  border-radius: 10px 10px 0 0;
`;

export const ProjectTitle = styled.h1`
  padding: 20px;
  font-size: 2rem;
  color: ${(props) => props.theme.platinum};
`;

export const InfoContainer = styled.div`
  background-color: ${(props) => props.theme.oxfordBlue};
  height: 20%;
`;

// @media only screen and (max-width: 1300px) {
//   .projectList {
//     grid-template-columns: 1fr 1fr;
//   }
// }

// @media only screen and (max-width: 800px) {
//   .projectList {
//     grid-template-columns: 1fr;
//   }
// }

// @media only screen and (max-width: 800px) {
//   .projectList {
//     width: 100%;
//   }
//   .projectItem {
//     width: 300px;
//     height: 300px;
//   }
// }
// .projectItem {
//   border-radius: 15px;
//   width: 300px;
//   height: 300px;
//   margin: 40px;
//   box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
//   text-align: center;
// }
// .projectItem:hover {
//   box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.5);
//   transition: 0.3s ease-in;
//   cursor: pointer;
// }

// .projectItem .bgImage {
//   border-top-left-radius: 15px;
//   border-top-right-radius: 15px;
//   width: 100%;
//   height: 200px;
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
// }

// .projectItem h1 {
//   font-size: 25px;
// }
