import {Project} from "../project.model";

const projectName = 'Serverless AI Based Predictions System (Confidential)';
const description = 'Exporting and monitoring live heaters telemetry. Deploying and generating large-scale predictions ' +
                    'combining serverless workflows (Step Functions, AWS Lambda, Fargate).';
const skills = ['Node', 'Python', 'Step Function', 'Dynamodb', 'AWS SAM', 'AWS Lambda'];
const features = ["Complex Step Functions workflows",
                  "Live Alerts using Cloudwatch alerts, SNS notifications and Slack Webhooks",
                  ];
const images = ["assets/projects/shifted/Architecture.png"];

export const shifted = new Project(projectName, description, skills, features, images, null, true);
