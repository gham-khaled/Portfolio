import {Certification} from "../certification.model";

const name = 'HashiCorp Certified: Terraform Associate (002)';
const issuer = 'HashiCorp';
const date = '08/2022';
const image = 'assets/certification/terraform.png';
const link = 'https://www.credly.com/badges/1367c8ab-0db8-4cfb-91f4-93a1e98a41ec/public_url';

export const terraform = new Certification(name, issuer, date, image, link);
