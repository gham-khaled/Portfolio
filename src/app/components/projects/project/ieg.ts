import { Project } from '../project.model';

const projectName = 'Ecommerce Website';
const description =
  'User friendly Ecommerce Website with multiple features. Developed for local company during my internship ';
const skills = [
  {
    name: 'Symfony',
    image: 'assets/skills/symfony.png',
  },
  {
    name: 'Bootstrap',
    image: 'assets/skills/bootstrap.png',
  },
  {
    name: 'MySql',
    image: 'assets/skills/mysql.png',
  },
];
const features = ['Admin Panel to add and edit products'];
const images = [
  'assets/projects/ieg/home.png',
  'assets/projects/ieg/contact.png',
];
const link = 'http://ieg.tn/';

export const ieg = new Project(
  projectName,
  description,
  skills,
  features,
  images,
  link,
  true
);
