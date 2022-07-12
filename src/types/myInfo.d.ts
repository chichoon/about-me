export interface IMyInfo {
  name: string;
  nameEng: string;
  email: string;
  github: string;
  blog: string;
  bio: IBio;
  stacks: IStacks;
  projects: IExperience[];
  experiences: IExperience[];
}

export interface IBio {
  title: string;
  text: string[];
}

export interface IStacks {
  title: string;
  skills: {
    frontend: string[];
    tools: string[];
  };
}

export interface IExperience {
  title: string;
  imageRef: string;
  period: string;
  summary: string;
  description: string[];
  achievements: Achievement[];
}

export interface IProject {
  title: string;
  imageRef: string;
  github: string;
  site: string;
  period: string;
  summary: string;
  description: string[];
}

export interface Achievement {
  title: string;
  github: string;
}
