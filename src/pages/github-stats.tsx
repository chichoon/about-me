// import { Octokit } from 'octokit';

import { GithubStats } from '@/components';
// import { getGithubStats } from '@/services';
import { HeadMetaData } from '@/components/Layout/HeadMetaData';

export async function getStaticProps() {
  // const octokit = new Octokit({
  //   auth: process.env.GH_TOKEN,
  // });
  // const data = await getGithubStats(octokit);
  return {
    props: { data: 'hello' }, // will be passed to the page component as props
  };
}

const githubStats = ({ data }: any) => {
  // console.log(data);
  return (
    <>
      <HeadMetaData />
      <GithubStats />
    </>
  );
};

export default githubStats;
