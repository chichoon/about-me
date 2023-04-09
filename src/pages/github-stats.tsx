import { GithubStats } from '@/components';
import { getGithubStats } from '@/services';
import { Octokit } from 'octokit';

export async function getServerSideProps() {
  const octokit = new Octokit({
    auth: process.env.GH_TOKEN,
  });
  const data = await getGithubStats(octokit);
  return {
    props: { data }, // will be passed to the page component as props
  };
}

const githubStats = ({ data }: any) => {
  console.log(data);
  return <GithubStats />;
};

export default githubStats;
