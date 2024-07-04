import {
  commerce,
  pokeWiki,
  reactPokeWiki,
  ams,
  sorting,
  pathfinding,
  grademaster1,
  grademaster2,
  pokenamer,
} from '../assets/projectImages';

export const PROJECTS = [
  {
    id: 0,
    name: 'Grade Master 2.0',
    images: [
      { image: grademaster2.cls, label: 'Class Page' },
      { image: grademaster2.at, label: 'Assignment Type Dropdown' },
      { image: grademaster2.guest, label: 'Guest Class Page' },
      { image: grademaster2.documentation, label: 'Documentation Page' },
    ],
    skills:
      'Fullstack, Next.js, React, Typescript, AWS, AWS Amplify, Google Cloud Functions, Tailwind, DaisyUI, Cypress',
    description:
      '(MVP currently deployed) Tool used to manage grades by calculating future and current grade possibilities. Includes various features such as locking assignment type weights, calculating dynamic values (lost points, weighted scores, class scores, semester and cumulative gpa, and distance from desired score), login to save data to database, import/export classes to allow for sharing, import a syllabus, etc.  There is also a some documentation for the site located on the documentation page.  I am actively creating tests for this web app using the Cypress testing framework, and eventually hope to configure CI/CD using Cypress.',
    link: 'https://grademaster.app',
    github: 'https://github.com/JalenMurray/grademaster-ts',
  },
  {
    id: 1,
    name: 'PokeNamer',
    images: [
      { image: pokenamer.categories, label: 'Theme List Page' },
      { image: pokenamer.themePreview, label: 'Theme Preview Page' },
      { image: pokenamer.games, label: 'Game List Page' },
      { image: pokenamer.game, label: 'Game Detail Page' },
      { image: pokenamer.cardModal, label: 'Card Modal' },
      { image: pokenamer.selectPokemon, label: 'Select Pokemon Modal' },
    ],
    skills: 'Fullstack, Next.js, React, Typescript, AWS, AWS Amplify, Tailwind, DaisyUI, GraphQL',
    description:
      "Pokenamer is a web application designed to help Pokémon players, especially those undertaking Nuzlocke challenges, by providing themed name lists for their Pokémon. With 89 themes to choose from, users can easily find creative names and manage their Pokémon's nicknames throughout the game. The site also allows players to create game instances, assign names to specific Pokémon, and track their evolution and status.",
    link: 'https://pokenamer.com',
    github: 'https://github.com/JalenMurray/pokenamer',
  },

  {
    id: 2,
    name: 'Grade Master 1.0',
    images: [
      { image: grademaster1.cls, label: 'Class Page' },
      { image: grademaster1.at, label: 'Assignment Type' },
      { image: grademaster1.semester, label: 'Semester Page' },
      { image: grademaster1.semesters, label: 'Semesters Page' },
      { image: grademaster1.emptyCls, label: 'Empty Class' },
      { image: grademaster1.auth, label: 'Authentication Page' },
      { image: grademaster1.user, label: 'User Page' },
    ],
    skills: 'Fullstack, React, Django, Django REST framework, JWT Authentication, CSS, Tailwind',
    description:
      '(Updated in Grade Master 2.0) Tool used to manage grades by calculating future and current grade possibilities. Includes various features such as locking assignment type weights, calculating dynamic values (lost points, weighted scores, class scores, semester and cumulative gpa, and distance from desired score), login to save data to database, import/export classes to allow for sharing, create a pdf report for a class, etc.',
    github: 'https://github.com/JalenMurray/grade-master',
  },
  {
    id: 3,
    name: 'Ecommerce Website',
    images: [
      { image: commerce.home, label: 'Directory Page' },
      { image: commerce.category, label: 'Category Page' },
      { image: commerce.checkout, label: 'Checkout Page' },
      { image: commerce.signIn, label: 'Sign In Page' },
    ],
    skills: 'React, Node.js, Firebase',
    github: 'https://github.com/JalenMurray/clothing-store',
    link: 'https://main--frabjous-rolypoly-2eee33.netlify.app/',
    description: 'Ecommerce clothing store made to learn React.  Does not contain real products',
  },
  {
    id: 4,
    name: 'Pokemon Wiki',
    images: [
      { image: pokeWiki.home, label: 'Home Page' },
      { image: pokeWiki.list, label: 'Pokemon Listed in Table' },
      { image: pokeWiki.dex, label: 'Pokedex Display using Cards' },
    ],
    skills: 'Node.js, Javascript, Bootstrap,CSS',
    github: 'https://github.com/JalenMurray/Pokemon-Wiki',
    link: 'https://jalenmurray.github.io/Pokemon-Wiki/',
    description:
      'Provides information on all using the PokeAPI. Styled cards used to display the information',
  },
  {
    id: 5,
    name: 'Pokemon Wiki React',
    images: [
      { image: reactPokeWiki.dex, label: 'Pokedex Display using Cards' },
      { image: reactPokeWiki.home, label: 'Home Page' },
    ],
    skills: 'React, Node.js, Bootstrap, Styled-Components',
    github: 'https://github.com/JalenMurray/pokemon-wiki-react',
    link: 'https://main--astonishing-tarsier-248c4f.netlify.app/',
    description:
      'Provides information on all using the PokeAPI. Styled cards used to display the information (Similar to other Pokemon Wiki Currently, just uses React.  Hope to add more features in the future)',
  },
  {
    id: 6,
    name: 'Absence Management System',
    images: [
      { image: ams.classList, label: 'Instructor Class List' },
      { image: ams.dashboard, label: 'Instructor Dashboard' },
      { image: ams.absence, label: 'Instructor Absence View' },
      { image: ams.student, label: 'Instructor Student View' },
      { image: ams.createAbsence, label: 'Create Absence View' },
      { image: ams.report, label: 'Instructor Class Report' },
      { image: ams.announcements, label: 'Instructor Class Announcements' },
    ],
    skills: 'Node.js, MySQL, Bootstrap, CAS, Collaboration, GitLab, Linux',
    description:
      'System created for UMD professors in order to efficiently manage absences.  Uses CAS authentication to ensure only UMD users can enter and has further checking to ensure only authorized UMD individuals can access the site (Instructors and their students).  Contains an instructor version which allows for management of absences, assignments, and announcements.  It also contains a student view which allows students to create absences and view their absences which contains information about missed assignments and further requirements.  Has a file upload system and a MySQL database to store student information.  Professors can create assignments with dates which allow them to seamlessly see what students missed an assignment and what assignments a student missed.  Was deployed using a Linux VM using NodeJS, Nginx, and MySQL.',
  },
  {
    id: 7,
    name: 'Sorting Algorithm Visualizer',
    images: [
      { image: sorting.shuffled, label: 'Shuffled Bars' },
      { image: sorting.sorted, label: 'Sorted Bars' },
    ],
    skills: 'Node.js, React, Bootstrap, Styled-Components, Algorithms',
    description: 'Visualizer for several sorting algorithms using React.',
    github: 'https://github.com/JalenMurray/sorting-algorithm-visualizer',
    link: 'https://main--cute-banoffee-d6e980.netlify.app/',
  },
  {
    id: 8,
    name: 'Pathfinding Algorithm Visualizer',
    images: [
      { image: pathfinding.base, label: 'Base Grid' },
      { image: pathfinding.maze, label: 'Grid with user-created maze' },
      { image: pathfinding.searching, label: 'Searching but no path found' },
      { image: pathfinding.path, label: 'Path Found' },
    ],
    skills: 'Node.js, React, Bootstrap, Styled-Components, Algorithms',
    description: 'Visualizer for pathfinding algorithms.',
    github: 'https://github.com/JalenMurray/pathfinding-visualizer',
    link: 'https://main--serene-pastelito-602f17.netlify.app/',
  },
];
