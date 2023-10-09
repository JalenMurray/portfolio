import P1 from '../assets/ecommerce-project.png';
import P1_Category from '../assets/ecommerce-category.png';
import P1_Checkout from '../assets/ecommerce-checkout.png';
import P1_SignIn from '../assets/ecommerce-sign-in.png';
import P2_Home from '../assets/pokemon-wiki.png';
import P2_List from '../assets/wiki-list.png';
import P2_Dex from '../assets/wiki-dex.png';
import P3_Dex from '../assets/pokemon-wiki-react.png';
import P3_Home from '../assets/wiki-react-home.png';
import P4_ClassList from '../assets/ams-class-list.png';
import P4_Dashboard from '../assets/ams-dashboard.png';
import P4_Absence from '../assets/ams-absence.png';
import P4_Student from '../assets/ams-student.png';
import P4_CreateAbsence from '../assets/ams-create-absence.png';
import P4_Report from '../assets/ams-report.png';
import P4_Announcements from '../assets/ams-announcements.png';
import P5_Shuffled from '../assets/sorting-shuffled.png';
import P5_Sorted from '../assets/sorting-sorted.png';
import P6_Base from '../assets/pathfinding-base-grid.png';
import P6_Maze from '../assets/pathfinding-maze.png';
import P6_Searching from '../assets/pathfinding-searching.png';
import P6_Path from '../assets/pathfinding-path.png';

export const PROJECTS = [
  {
    name: 'Ecommerce Website',
    images: [
      { image: P1, caption: 'Directory Page' },
      { image: P1_Category, caption: 'Category Page' },
      { image: P1_Checkout, caption: 'Checkout Page' },
      { image: P1_SignIn, caption: 'Sign In Page' },
    ],
    skills: 'React,Node.js,Firebase',
    github: 'https://github.com/JalenMurray/clothing-store',
    link: 'https://main--frabjous-rolypoly-2eee33.netlify.app/',
    description: 'Ecommerce clothing store made to learn React.  Does not contain real products',
  },
  {
    name: 'Pokemon Wiki',
    images: [
      { image: P2_Home, caption: 'Home Page' },
      { image: P2_List, caption: 'Pokemon Listed in Table' },
      { image: P2_Dex, caption: 'Pokedex Display using Cards' },
    ],
    skills: 'Node.js,Javascript,Bootstrap,CSS',
    github: 'https://github.com/JalenMurray/Pokemon-Wiki',
    link: 'https://jalenmurray.github.io/Pokemon-Wiki/',
    description: 'Provides information on all using the PokeAPI. Styled cards used to display the information',
  },
  {
    name: 'Pokemon Wiki React',
    images: [
      { image: P3_Dex, caption: 'Pokedex Display using Cards' },
      { image: P3_Home, caption: 'Home Page' },
    ],
    skills: 'React,Node.js,Bootstrap,Styled-Components',
    github: 'https://github.com/JalenMurray/pokemon-wiki-react',
    link: 'https://main--astonishing-tarsier-248c4f.netlify.app/',
    description:
      'Provides information on all using the PokeAPI. Styled cards used to display the information (Similar to other Pokemon Wiki Currently, just uses React.  Hope to add more features in the future)',
  },
  {
    name: 'Absence Management System',
    images: [
      { image: P4_ClassList, caption: 'Instructor Class List' },
      { image: P4_Dashboard, caption: 'Instructor Dashboard' },
      { image: P4_Absence, caption: 'Instructor Absence View' },
      { image: P4_Student, caption: 'Instructor Student View' },
      { image: P4_CreateAbsence, caption: 'Create Absence View' },
      { image: P4_Report, caption: 'Instructor Class Report' },
      { image: P4_Announcements, caption: 'Instructor Class Announcements' },
    ],
    skills: 'Node.js,MySQL,Bootstrap,CAS,Collaboration,GitLab,Linux',
    description:
      'System created for UMD professors in order to efficiently manage absences.  Uses CAS authentication to ensure only UMD users can enter and has further checking to ensure only authorized UMD individuals can access the site (Instructors and their students).  Contains an instructor version which allows for management of absences, assignments, and announcements.  It also contains a student view which allows students to create absences and view their absences which contains information about missed assignments and further requirements.  Has a file upload system and a MySQL database to store student information.  Professors can create assignments with dates which allow them to seamlessly see what students missed an assignment and what assignments a student missed.  Was deployed using a Linux VM using NodeJS, Nginx, and MySQL.',
  },
  {
    name: 'Sorting Algorithm Visualizer',
    images: [
      { image: P5_Shuffled, caption: 'Shuffled Bars' },
      { image: P5_Sorted, caption: 'Sorted Bars' },
    ],
    skills: 'Node.js,React,Bootstrap,Styled-Components,Algorithms',
    description: 'Visualizer for several sorting algorithms using React.',
    github: 'https://github.com/JalenMurray/sorting-algorithm-visualizer',
    link: 'https://main--cute-banoffee-d6e980.netlify.app/',
  },
  {
    name: 'Pathfinding Algorithm Visualizer',
    images: [
      { image: P6_Base, caption: 'Base Grid' },
      { image: P6_Maze, caption: 'Grid with user-created maze' },
      { image: P6_Searching, caption: 'Searching but no path found' },
      { image: P6_Path, caption: 'Path Found' },
    ],
    skills: 'Node.js,React,Bootstrap,Styled-Components,Algorithms',
    description: 'Visualizer for pathfinding algorithms.',
    github: 'https://github.com/JalenMurray/pathfinding-visualizer',
    link: 'https://main--serene-pastelito-602f17.netlify.app/',
  },
];
