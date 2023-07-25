import { Project } from '../project.model';

const projectName = 'Covid GPS Tracker (Confidential)';
const description =
  'The back-end of a GPS tracker mobile application to track previous positions of infected users and track the' +
  'quarantined user.  ';
const skills = [
  {
    name: 'Node',
    image: 'assets/skills/nodejs.png',
  },
  {
    name: 'DynamoDB',
    image: 'assets/skills/dynamodb.png',
  },
  {
    name: 'AWS SAM',
    image: 'assets/skills/sam.png',
  },
  {
    name: 'AWS Lambda',
    image: 'assets/skills/aws-lambda.png',
  },
];
const features = [
  'Store and query user positions using Geo Hash library',
  'Selfie request for quarantined users',
];
const images = ['assets/projects/gps/GPS.jpg'];

export const gps = new Project(
  projectName,
  description,
  skills,
  features,
  images,
  null,
  false
);
