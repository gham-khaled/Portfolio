import {Project} from "../project.model";

const projectName = 'Kawer';
const description = 'Serverless web application that allow normal users to make reservations for the local football fields' +
  ', owners to list theirs fields and manage the reservation.';
const skills = ['Node', 'Angular', 'Dynamodb', 'Terraform', 'Open API', 'AWS Lambda', 'Step Function', 'Cognito'];
const features = ["API Gateway integration with Lambda Functions using Open API 3.0 ",
  "Angular CI/CD using GitHub, AWS CodePipeline and AWS CodeBuild",
  "Cognito Authentication with Role based Access (user, owner, admin)",
  "Dynamo DB Transactions for reservations"];
const images = ["assets/projects/kawer/web.png", "assets/projects/kawer/Kawer.png"];
const link = 'http://kawer.s3-website-us-east-1.amazonaws.com/';

export const kawer = new Project(projectName, description, skills, features, images, link, false);
