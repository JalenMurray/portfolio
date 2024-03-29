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
import GM_Auth from '../assets/grademaster-authpage.png';
import GM_AssignmentType from '../assets/grademaster-assignmenttype.png';
import GM_Class from '../assets/grademaster-class.png';
import GM_EmptyClass from '../assets/grademaster-emptyclass.png';
import GM_Semester from '../assets/grademaster-semester.png';
import GM_Semesters from '../assets/grademaster-semesters.png';
import GM_User from '../assets/grademaster-userpage.png';

export const PROJECTS = [
  {
    id: 0,
    name: 'Grade Master',
    images: [
      { image: GM_Class, label: 'Class Page' },
      { image: GM_AssignmentType, label: 'Assignment Type' },
      { image: GM_Semester, label: 'Semester Page' },
      { image: GM_Semesters, label: 'Semesters Page' },
      { image: GM_EmptyClass, label: 'Empty Class' },
      { image: GM_Auth, label: 'Authentication Page' },
      { image: GM_User, label: 'User Page' },
    ],
    skills: 'Fullstack, React, Django, Django REST framework, JWT Authentication, CSS, Tailwind',
    description:
      '(Working on deployment currently) Tool used to manage grades by calculating future and current grade possibilities. Includes various features such as locking assignment type weights, calculating dynamic values (lost points, weighted scores, class scores, semester and cumulative gpa, and distance from desired score), login to save data to database, import/export classes to allow for sharing, create a pdf report for a class, etc.',
    github: 'https://github.com/JalenMurray/grade-master',
  },
  {
    id: 1,
    name: 'Ecommerce Website',
    images: [
      { image: P1, label: 'Directory Page' },
      { image: P1_Category, label: 'Category Page' },
      { image: P1_Checkout, label: 'Checkout Page' },
      { image: P1_SignIn, label: 'Sign In Page' },
    ],
    skills: 'React, Node.js, Firebase',
    github: 'https://github.com/JalenMurray/clothing-store',
    link: 'https://main--frabjous-rolypoly-2eee33.netlify.app/',
    description: 'Ecommerce clothing store made to learn React.  Does not contain real products',
  },
  {
    id: 2,
    name: 'Pokemon Wiki',
    images: [
      { image: P2_Home, label: 'Home Page' },
      { image: P2_List, label: 'Pokemon Listed in Table' },
      { image: P2_Dex, label: 'Pokedex Display using Cards' },
    ],
    skills: 'Node.js, Javascript, Bootstrap,CSS',
    github: 'https://github.com/JalenMurray/Pokemon-Wiki',
    link: 'https://jalenmurray.github.io/Pokemon-Wiki/',
    description: 'Provides information on all using the PokeAPI. Styled cards used to display the information',
  },
  {
    id: 3,
    name: 'Pokemon Wiki React',
    images: [
      { image: P3_Dex, label: 'Pokedex Display using Cards' },
      { image: P3_Home, label: 'Home Page' },
    ],
    skills: 'React, Node.js, Bootstrap, Styled-Components',
    github: 'https://github.com/JalenMurray/pokemon-wiki-react',
    link: 'https://main--astonishing-tarsier-248c4f.netlify.app/',
    description:
      'Provides information on all using the PokeAPI. Styled cards used to display the information (Similar to other Pokemon Wiki Currently, just uses React.  Hope to add more features in the future)',
  },
  {
    id: 4,
    name: 'Absence Management System',
    images: [
      { image: P4_ClassList, label: 'Instructor Class List' },
      { image: P4_Dashboard, label: 'Instructor Dashboard' },
      { image: P4_Absence, label: 'Instructor Absence View' },
      { image: P4_Student, label: 'Instructor Student View' },
      { image: P4_CreateAbsence, label: 'Create Absence View' },
      { image: P4_Report, label: 'Instructor Class Report' },
      { image: P4_Announcements, label: 'Instructor Class Announcements' },
    ],
    skills: 'Node.js, MySQL, Bootstrap, CAS, Collaboration, GitLab, Linux',
    description:
      'System created for UMD professors in order to efficiently manage absences.  Uses CAS authentication to ensure only UMD users can enter and has further checking to ensure only authorized UMD individuals can access the site (Instructors and their students).  Contains an instructor version which allows for management of absences, assignments, and announcements.  It also contains a student view which allows students to create absences and view their absences which contains information about missed assignments and further requirements.  Has a file upload system and a MySQL database to store student information.  Professors can create assignments with dates which allow them to seamlessly see what students missed an assignment and what assignments a student missed.  Was deployed using a Linux VM using NodeJS, Nginx, and MySQL.',
  },
  {
    id: 5,
    name: 'Sorting Algorithm Visualizer',
    images: [
      { image: P5_Shuffled, label: 'Shuffled Bars' },
      { image: P5_Sorted, label: 'Sorted Bars' },
    ],
    skills: 'Node.js, React, Bootstrap, Styled-Components, Algorithms',
    description: 'Visualizer for several sorting algorithms using React.',
    github: 'https://github.com/JalenMurray/sorting-algorithm-visualizer',
    link: 'https://main--cute-banoffee-d6e980.netlify.app/',
  },
  {
    id: 6,
    name: 'Pathfinding Algorithm Visualizer',
    images: [
      { image: P6_Base, label: 'Base Grid' },
      { image: P6_Maze, label: 'Grid with user-created maze' },
      { image: P6_Searching, label: 'Searching but no path found' },
      { image: P6_Path, label: 'Path Found' },
    ],
    skills: 'Node.js, React, Bootstrap, Styled-Components, Algorithms',
    description: 'Visualizer for pathfinding algorithms.',
    github: 'https://github.com/JalenMurray/pathfinding-visualizer',
    link: 'https://main--serene-pastelito-602f17.netlify.app/',
  },
];
