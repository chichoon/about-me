export interface ProfileType {
  name: string;
  nameInEng: string;
  email: string;
  githubLink: string;
  blogLink: string;
  oneLineBio: string;
  stacks: string[];
  projects: ProjectType[];
  footprints: FootprintType[];
}

interface HistoryType {
  key: string;
  title: string;
  imageRef: string;
  startDate: string;
  endDate?: string;
  summary: string;
}

export interface AchievementsType {
  title: string;
  githubLink: string;
}

export interface DescriptionType {
  title?: string;
  mainText: string;
}

export interface ProjectType extends HistoryType {
  githubLink: string;
  publishedLink: string;
  description: DescriptionType[];
}

export interface FootprintType extends HistoryType {
  achievements: AchievementsType[];
}
