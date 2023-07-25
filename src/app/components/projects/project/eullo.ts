import { Project } from '../project.model';

const projectName = 'Eullo';
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
  {
    name: 'Flask',
    image: 'assets/skills/flask.png',
  },
];
const features = [
  'End-to-End Encryption: Eullo ensures secure communication through end-to-end encryption, keeping messages private and confidential.',
  'User Authentication with LDAP: Eullo implements LDAP for user authentication, enhancing security and centralized user management.',
  'Real-Time Messaging with Socket.io: Eullo enables real-time messaging using Socket.io, allowing users to exchange messages instantly',
];
const images = [
  'assets/projects/eullo/Login.png',
  'assets/projects/eullo/Chat.png',
  'assets/projects/eullo/newConversation.png',
  'assets/projects/eullo/Register.png',
];
const link = null;

export const eullo = new Project(
  projectName,
  description,
  skills,
  features,
  images,
  link,
  true
);
