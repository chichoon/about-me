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
        <meta name='description' content={"chichoon's GitHub Stats"} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='apple-touch-icon' sizes='57x57' href='/gh-icon/apple-icon-57x57.png' />
        <link rel='apple-touch-icon' sizes='60x60' href='/gh-icon/apple-icon-60x60.png' />
        <link rel='apple-touch-icon' sizes='72x72' href='/gh-icon/apple-icon-72x72.png' />
        <link rel='apple-touch-icon' sizes='76x76' href='/gh-icon/apple-icon-76x76.png' />
        <link rel='apple-touch-icon' sizes='114x114' href='/gh-icon/apple-icon-114x114.png' />
        <link rel='apple-touch-icon' sizes='120x120' href='/gh-icon/apple-icon-120x120.png' />
        <link rel='apple-touch-icon' sizes='144x144' href='/gh-icon/apple-icon-144x144.png' />
        <link rel='apple-touch-icon' sizes='152x152' href='/gh-icon/apple-icon-152x152.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/gh-icon/apple-icon-180x180.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='/gh-icon/android-icon-192x192.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/gh-icon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='96x96' href='/gh-icon/favicon-96x96.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/gh-icon/favicon-16x16.png' />
        <link rel='manifest' href='/gh-icon/manifest.json' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content='/gh-icon/ms-icon-144x144.png' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <GithubStats />
    </>
  );
};

export default githubStats;
