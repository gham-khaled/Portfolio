import {Project} from "../project.model";

const projectName = 'ServerOn ';
const description = 'Eullo is a secure chat web application that provides end-to-end encryption using asymmetric encryption and RSA key pairs.' +
  ' It aims to provide a secure and private communication platform for users.';
const skills = ['Angular', 'Terraform', 'Mysql', 'Flask'];
const features = ["End-to-End Encryption: Eullo ensures secure communication through end-to-end encryption, keeping messages private and confidential.",
  "User Authentication with LDAP: Eullo implements LDAP for user authentication, enhancing security and centralized user management.",
  "Real-Time Messaging with Socket.io: Eullo enables real-time messaging using Socket.io, allowing users to exchange messages instantly"];
const images = [ "assets/projects/serveron/dashboard.png", "assets/projects/serveron/new_project.png", "assets/projects/serveron/logs.png"];
const link = null;

export const serveron = new Project(projectName, description, skills, features, images, link, true);
