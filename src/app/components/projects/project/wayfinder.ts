import { Project } from '../project.model';

const projectName = 'Wayfinder';
const description =
  'Wayfinder is a dynamic Angular web application designed to visualize various pathfinding algorithms in a weighted grid. The application empowers users to explore and understand different algorithms by interactively creating custom grids, setting cell weights, selecting start and end points, and designating obstacles. With the ability to compare the efficiency of different algorithms, Wayfinder provides an engaging and educational platform for studying and visualizing pathfinding concepts.';
const skills = [
  { name: 'Angular', image: 'assets/skills/angular.png' },
  { name: 'Node', image: 'assets/skills/nodejs.png' },
];
const features = [
  'Visualize up to 4 Pathfinding Algorithms',
  'Performance Comparison of multiple pathfinding algorithms side by side',
];
const images = ['assets/projects/wayfinder/main.png'];
const link = 'http://wayfinder.com.s3-website-us-east-1.amazonaws.com/';

export const wayFinder = new Project(
  projectName,
  description,
  skills,
  features,
  images,
  link,
  true
);
