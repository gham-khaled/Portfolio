import { Project } from '../project.model';

const projectName = 'Cloud-Cryptonic';
const description =
  'Cloud Cryptonic is a user-friendly GUI application that securely uploads and downloads files to and ' +
  'from Amazon Web Services (AWS) S3. It offers client-side encryption for secure file transfers and integrates seamlessly ' +
  'with AWS S3 for storage and retrieval. ';

const skills = [
  {
    name: 'Python',
    image: 'assets/skills/python.png',
  },
];
const features = [
  'Seamless Client-Side Encryption/Decryption',
  'Integration with AWS S3',
];
const images = ['assets/projects/cloud-cryptonic/main.png'];
const link = 'https://github.com/gham-khaled/Cloud-Cryptonic';

export const cloudCryptonic = new Project(
  projectName,
  description,
  skills,
  features,
  images,
  link,
  true
);
