import P1 from '../assets/ecommerce-project.png';
import P1_Category from '../assets/ecommerce-category.png';
import P1_Checkout from '../assets/ecommerce-checkout.png';
import P1_SignIn from '../assets/ecommerce-sign-in.png';
import P2_Home from '../assets/pokemon-wiki.png';
import P2_List from '../assets/wiki-list.png';
import P2_Dex from '../assets/wiki-dex.png';
import P3_Dex from '../assets/pokemon-wiki-react.png';
import P3_Home from '../assets/wiki-react-home.png';
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
    images: [{}],
    skills: 'Node.js,MySQL,Bootstrap,CAS',
    description: 'System created for UMD professors in order to efficiently manage absences',
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
