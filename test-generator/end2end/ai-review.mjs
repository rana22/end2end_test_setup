import { Octokit } from "@octokit/rest";
import OpenAI from 'openai';

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // must be set in .env
});

(async () => {
  const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
  // const prNumber = process.env.GITHUB_REF.split("/").pop();
  console.log("pr info");
  const ref = process.env.GITHUB_REF || "";
  const prNumber = parseInt(ref.split("/")[2], 10);
  console.log(`${process.env.GITHUB_REF} pr # ${prNumber}`);

  // const prNumber = parseInt(process.env.GITHUB_REF.split("/").pop(), 10);

  // Get PR diff
  const { data: pr } = await octokit.pulls.get({ owner, repo, pull_number: prNumber });
  const diff = `Title: ${pr.title}\n\n${pr.body}\n\n`;

  // Send to OpenAI
  const res = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: "system", content: "You are a helpful code reviewer." },
      { role: "user", content: `Review this PR and suggest improvements:\n\n${diff}` }
    ]
  });

  const reviewText = res.choices[0].message.content ?? '';

  // Post comment to PR
  await octokit.issues.createComment({
    owner,
    repo,
    issue_number: prNumber,
    body: `🤖 AI Review:\n\n${reviewText}`
  });
})();
