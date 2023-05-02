import { ProfileType } from '@/types/profileData';

interface Props {
  profileData: ProfileType;
}

export const ResumeHeader = ({ profileData }: Props) => {
  return <header>{profileData.name}</header>;
};
