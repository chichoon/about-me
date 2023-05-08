import { ProfileType, ProjectType } from './profileData';

export interface ResumeProjectListType {
  [key: string]: ResumeProjectType;
}

export interface ResumeProfileType extends ProfileType {
  resumeSummaries: string[];
}

export interface ResumeProjectType extends ProjectType {
  digest?: DigestType[];
}

interface DigestType {
  description: string;
  link?: string[];
}