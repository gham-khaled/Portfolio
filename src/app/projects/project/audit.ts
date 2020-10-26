import {Project} from "../project.model";

const projectName = 'Audit Web Application (POC)';
const description = 'Infrastructure auditing web application to assign, collect and process users reports. ';
const skills = ['React', 'Python', 'Dynamodb', 'Terraform', 'AWS Lambda', 'Cognito'];
const features = ["Cognito Authentication using AD", "CI/CD using Gitlab and Docker Integration", "Digital Signature"];
const images = ["assets/projects/audit/Inspio.png", "assets/projects/audit/audit.png"];

export const audit = new Project(projectName, description, skills, features, images, null, false);
