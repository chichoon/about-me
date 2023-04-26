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
  imageRef?: string;
  startDateYear: number;
  startDateMonth: number;
  endDateYear?: number;
  endDateMonth?: number;
  summary: string;
}

export interface StackType {
  name: string;
  color: string;
  logo?: string;
}

export interface AchievementsType {
  title: string;
  githubLink?: LinkType[];
  link?: LinkType[];
}

export interface DescriptionType {
  title: string;
  mainText: string | string[];
  link?: LinkType[];
}

export interface LinkType {
  title: string;
  link: string;
}

export interface ProjectType extends HistoryType {
  githubLink?: string;
  publishedLink?: string;
  stacks: StackType[];
  description: DescriptionType[];
  technicalSpec?: DescriptionType[];
}

export interface FootprintType extends HistoryType {
  achievements: AchievementsType[];
}

export interface ProjectListType {
  [key: string]: ProjectType;
}

export interface ProjectTimestampType {
  key: string;
  title: string;
  year: number;
  month: number;
}
