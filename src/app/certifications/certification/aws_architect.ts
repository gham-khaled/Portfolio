import {Certification} from "../certification.model";

const name = 'AWS Certified Solutions Architect – Associate';
const issuer = 'Amazon Web Services Training and Certification';
const date = '03/2021';
const image = 'assets/certification/awsArchitect.png';
const link = 'https://www.credly.com/badges/bf8fde0e-52f7-4379-a47a-a942768204e1/public_url';

export const awsArchitect = new Certification(name, issuer, date, image, link);
