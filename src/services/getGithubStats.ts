/* eslint-disable no-await-in-loop */
import { Octokit } from 'octokit';

export async function getGithubStats() {
  return 0;
}
// export async function getGithubStats(octokit: Octokit) {
//   let response = await octokit.request(`GET /users/${process.env.GH_USERNAME}/events?per_page=80`, {
//     username: 'USERNAME',
//     headers: {
//       'X-GitHub-Api-Version': '2022-11-28',
//     },
//   });
//   const arr = [];
//   let i = 1;
//   while (1) {
//     if (!response.headers.link) break;
//     response = await octokit.request(`GET /users/${process.env.GH_USERNAME}/events?page=${i}&per_page=80`, {
//       username: 'USERNAME',
//       headers: {
//         'X-GitHub-Api-Version': '2022-11-28',
//       },
//     });
//     arr.push(response.data);
//     i++;
//   }
//   console.log(arr);
//   return arr;

//   return response.data;
// }
