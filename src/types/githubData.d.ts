interface  GithubDataType = {
	login: string;
	name: string;
	blog: string;

	public_repos: number;
	followers: number;
	following: number;
	totalCommits: number;
	commitsThisYear: number;
	totalStarsEarned: number;
	totalPullRequests: number;
	totalIssues: number;
}
