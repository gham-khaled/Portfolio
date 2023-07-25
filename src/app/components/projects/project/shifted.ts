import { Project } from '../project.model';

const projectName = 'Serverless AI Based Predictions System (Confidential)';
const description =
  'Exporting and monitoring live heaters telemetry. Deploying and generating large-scale predictions ' +
  'combining serverless workflows (Step Functions, AWS Lambda, Fargate).';

const skills = [
  { name: 'Node', image: 'assets/skills/node.png' },
  { name: 'Python', image: 'assets/skills/python.png' },
  { name: 'Step Function', image: 'assets/skills/step-function.png' },
  { name: 'Dynamodb', image: 'assets/skills/dynamodb.png' },
  { name: 'AWS SAM', image: 'assets/skills/aws.png-sam.png' },
  { name: 'AWS Lambda', image: 'assets/skills/aws.png-lambda.png' },
  { name: 'Fargate', image: 'assets/skills/fargate.png' },
];

const features = [
  'Complex Step Functions workflows',
  'Live Alerts using Cloudwatch alerts, SNS notifications and Slack Webhooks',
];
const images = [
  'assets/projects/shifted/architecture.png',
  'assets/projects/shifted/fargate.png',
];

export const shifted = new Project(
  projectName,
  description,
  skills,
  features,
  images,
  '',
  true
);
