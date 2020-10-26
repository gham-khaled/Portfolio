export class Project {
  public constructor(public name: string,
                     public description: string,
                     public skills: string[],
                     public features: string[],
                     public images: string[],
                     public link,
                     public confidential: boolean) {
  }
}
