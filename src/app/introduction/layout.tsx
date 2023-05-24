import { CommonLayout } from '@/components';
import { getProfile } from '@/services';

interface Props {
  children: JSX.Element;
}

const Layout = async ({ children }: Props) => {
  const profileData = await getProfile();
  return <CommonLayout profileData={profileData}>{children}</CommonLayout>;
};

export default Layout;
