import { ProfileType, StackType, ProjectType, FootprintType, LinkType } from './profileData';

export interface ResumeType {
  profile: ProfileType;
  projects: ResumeProjectListType;
  footprints: FootprintType[];
}

export interface ResumeProjectListType {
  [key: string]: ResumeProjectType;
}

export interface ResumeProjectType extends ProjectType {
  experience?: ExperienceType[];
}

interface ExperienceType {
  description: string;
  link?: string[];
}
