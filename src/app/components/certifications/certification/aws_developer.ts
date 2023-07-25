import {Certification} from "../certification.model";

const name = 'AWS Certified Developer – Associate';
const issuer = 'Amazon Web Services Training and Certification';
const date = '12/2020';
const image = 'assets/certification/associate.png';
const link = 'https://www.youracclaim.com/badges/57ecd28b-81d4-4054-9a9d-54c548f90a42';

export const awsDeveloper = new Certification(name, issuer, date, image, link);
