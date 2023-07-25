import { Project } from '../project.model';

const projectName = 'Eullo, Secure Web Application';
const description =
  'Eullo is a secure chat web application that provides end-to-end encryption using asymmetric encryption and RSA key pairs.' +
  ' It aims to provide a secure and private communication platform for users.';
const skills = [
  {
    name: 'Angular',
    image: 'assets/skills/angular.png',
  },
  {
    name: 'Terraform',
    image: 'assets/skills/terraform.png',
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
