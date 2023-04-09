import { Octokit } from 'octokit';

export async function getGithubStats(octokit: Octokit) {
  const data = await octokit.rest.users.getByUsername({ username: process.env.GH_USERNAME as string });
  console.log(data);
  const { data: repoData } = await octokit.request(`GET /users/chichoon/repos?page=1`);
  console.log(repoData.length);
  let total = 0;
  return repoData;
}
