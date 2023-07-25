interface Skill {
  name: string;
  image: string;
}

export class Project {
  public constructor(
    public name: string,
    public description: string,
    public skills: Skill[],
    public features: string[],
    public images: string[],
    public link: string,
    public confidential: boolean
  ) {}
}
