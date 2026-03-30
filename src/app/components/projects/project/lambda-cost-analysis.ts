import { Project } from '../project.model';

const projectName = 'Lambda Cost Analysis';
const description =
  'AWS Lambda cost and performance analysis tool that detects over-provisioned, under-provisioned, ' +
  'and timing-out Lambda functions at scale. Estimates potential cost savings and helps optimize ' +
  'Lambda configurations across all deployed functions using CloudWatch Logs analysis.';

const skills = [
  {
    name: 'Python',
    image: 'assets/skills/python.png',
  },
  {
    name: 'AWS',
    image: 'assets/skills/aws.png',
  },
  {
    name: 'CDK',
    image: 'assets/skills/cdk.svg',
  },
  {
    name: 'AWS Lambda',
    image: 'assets/skills/aws-lambda.png',
  },
  {
    name: 'TypeScript',
    image: 'assets/skills/typescript.svg',
  },
];
const features = [
  'Detects over-provisioned, under-provisioned, and timing-out Lambda functions',
  'Cost breakdown with memory, invocation, and timeout cost analysis',
  'Estimates potential savings across all deployed functions',
  'Filter analysis by Lambda runtime, package type, and date range',
  'Web dashboard with historical report tracking',
];
const images = [
  'assets/projects/lambda-cost/dashboard.png',
  'assets/projects/lambda-cost/architecture.png',
];
const link = 'https://github.com/gham-khaled/Lambda-Cost-Analysis';

export const lambdaCostAnalysis = new Project(
  projectName,
  description,
  skills,
  features,
  images,
  link,
  false
);
