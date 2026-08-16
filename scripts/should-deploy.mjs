import { setTimeout as sleep } from "node:timers/promises";

const sha = process.env.VERCEL_GIT_COMMIT_SHA;
const owner = process.env.VERCEL_GIT_REPO_OWNER;
const slug = process.env.VERCEL_GIT_REPO_SLUG;
const token = process.env.GITHUB_TOKEN;

if (!sha || !owner || !slug) {
	console.log("vercel git env missing, deploying");
	process.exit(0);
}

// Give GitHub a moment to register checks after push
await sleep(5000);

const headers = {
	Accept: "application/vnd.github+json",
	"X-GitHub-Api-Version": "2022-11-28",
	...(token ? { Authorization: `Bearer ${token}` } : {}),
};

const res = await fetch(
	`https://api.github.com/repos/${owner}/${slug}/commits/${sha}/check-runs?per_page=100`,
	{ headers },
);
if (!res.ok) {
	console.log(`github api ${res.status}, deploying (fail-open)`);
	process.exit(0);
}

const { check_runs = [] } = await res.json();
const ci = check_runs.filter(
	(r) => r.name === "CI" || r.name?.startsWith("CI /"),
);

if (ci.length === 0) {
	console.log("no CI check runs found, deploying");
	process.exit(0);
}

const failing = ci.filter((r) => r.conclusion === "failure");
const pending = ci.filter((r) => r.status !== "completed");

if (failing.length > 0) {
	console.log(`CI failing (${failing.length}), skipping deploy`);
	process.exit(1);
}

if (pending.length > 0) {
	console.log(`CI still running (${pending.length}), skipping deploy`);
	process.exit(1);
}

console.log("CI green, deploying");
process.exit(0);
