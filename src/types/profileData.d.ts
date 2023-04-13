export interface ProfileType {
  name: string;
  nameInEng: string;
  email: string;
  githubUsername: string;
  profileImageRef: string;
  blogLink: string;
  oneLineBio: string;
  summaries: string[];
  stacks: StackType[];
  bioGithubLink: string;
}

interface HistoryType {
  key: string;
  title: string;
  imageRef: string;
  startDate: string;
  endDate?: string;
  summary: string;
}

export interface StackType {
  name: string;
  color: string;
  logo?: string;
}

export interface AchievementsType {
  title: string;
  githubLink?: string;
  link?: linkType[];
}

export interface DescriptionType {
  title: string;
  mainText: string;
  link?: linkType[];
}

export interface LinkType {
  title: string;
  link: string;
}

export interface ProjectType extends HistoryType {
  githubLink: string;
  publishedLink: string;
  stacks: StackType[];
  description: DescriptionType[];
}

export interface FootprintType extends HistoryType {
  achievements: AchievementsType[];
}
