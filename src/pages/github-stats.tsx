import Head from 'next/head';
import { Octokit } from 'octokit';

import { GithubStats } from '@/components';
import { getGithubStats } from '@/services';

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
  console.log(data);
  return (
    <>
      <Head>
        <title>chichoon's GitHub Stats</title>
        <meta name='description' content='chichoon's GitHub Stats' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <GithubStats />
    </>
  );
};

export default githubStats;
