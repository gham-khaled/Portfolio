import {Project} from '../project.model';

const projectName = 'Kawer';
const description =
  'Serverless web application that allow normal users to make reservations for the local football fields' +
  ', owners to list theirs fields and manage the reservation.';
const skills = [
  {
    name: 'Node',
    image: 'assets/skills/nodejs.png',
  },
  {
    name: 'Angular',
    image: 'assets/skills/angular.png',
  },
  {
    name: 'DynamoDB',
    image: 'assets/skills/dynamodb.png',
  },
  {
    name: 'Terraform',
    image: 'assets/skills/terraform.png',
  },
  {
    name: 'Open API',
    image: 'assets/skills/openapi.png',
  },
  {
    name: 'AWS Lambda',
    image: 'assets/skills/aws-lambda.png',
  },
  {
    name: 'Step Function',
    image: 'assets/skills/step-function.png',
  },
  {
    name: 'Cognito',
    image: 'assets/skills/cognito.png',
  },
];
const features = [
  'API Gateway integration with Lambda Functions using Open API 3.0 ',
  'Angular CI/CD using GitHub, AWS CodePipeline and AWS CodeBuild',
  'Cognito Authentication with Role based Access (user, owner, admin)',
  'Dynamo DB Transactions for reservations',
];
const images = [
  "assets/projects/kawer/web.png", "assets/projects/kawer/fields.png", "assets/projects/kawer/field_detail1.png", "assets/projects/kawer/field_detail2.png", "assets/projects/kawer/addField.png", "assets/projects/kawer/profile.png"
];
const link = 'https://github.com/gham-khaled/Kawer';

export const kawer = new Project(
  projectName,
  description,
  skills,
  features,
  images,
  link,
  false
);
