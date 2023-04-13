interface ProfileType {
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

interface ProjectType {
  key: string;
  title: string;
  imageRef: string;
  startDate: string;
  endDate?: string;
  githubLink: string;
  publishedLink: string;
  summary: string;
  description: DescriptionType[];
}

interface DescriptionType {
  title?: string;
  mainText: string;
}

interface FootprintType extends ProjectType {
  achievements: AchievementsType[];
}

interface AchievementsType {
  title: string;
  githubLink: string;
}
