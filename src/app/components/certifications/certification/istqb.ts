import {Certification} from "../certification.model";

const name = 'ISTQB Certified Tester - Foundation Level Certificate';
const issuer = 'ISTQB Foundation';
const date = '06/2022';
const image = 'assets/certification/istqb.png';
const link = null;

export const istqb = new Certification(name, issuer, date, image, link);
