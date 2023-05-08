import { ProfileType, ProjectType, FootprintType } from './profileData';

export interface ResumeType {
  profile: ProfileType;
  projects: ResumeProjectListType;
  footprints: FootprintType[];
}

export interface ResumeProjectListType {
  [key: string]: ResumeProjectType;
}

export interface ResumeProjectType extends ProjectType {
  digest?: DigestType[];
}

interface DigestType {
  description: string;
  link?: string[];
}
