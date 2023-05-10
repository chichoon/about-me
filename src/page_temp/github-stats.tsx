// import { Octokit } from 'octokit';

import { GithubStats } from '../../.__components__';
// import { getGithubStats } from '@/services';

export async function getStaticProps() {
  // const octokit = new Octokit({
  //   auth: process.env.GH_TOKEN,
  // });
  // const data = await getGithubStats(octokit);
  return {
    props: { data: 'hello' }, // will be passed to the page component as props
  };
}

const githubStats = () => {
  // const githubStats = ({ data }: any) => {
  // console.log(data);
  return <GithubStats />;
};

export default githubStats;
