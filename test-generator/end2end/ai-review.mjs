const { Octokit } = require("@octokit/rest");
const { Configuration, OpenAIApi } = require("openai");

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const openai = new OpenAIApi(
  new Configuration({ apiKey: process.env.OPENAI_API_KEY })
);

(async () => {
  const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
  const prNumber = process.env.GITHUB_REF.split("/").pop();

  // Get PR diff
  const { data: pr } = await octokit.pulls.get({ owner, repo, pull_number: prNumber });
  const diff = `Title: ${pr.title}\n\n${pr.body}\n\n`;

  // Send to OpenAI
  const res = await openai.createChatCompletion({
    model: 'gpt-4o',
    messages: [
      { role: "system", content: "You are a helpful code reviewer." },
      { role: "user", content: `Review this PR and suggest improvements:\n\n${diff}` }
    ]
  });

  const reviewText = res.data.choices[0].message.content;

  // Post comment to PR
  await octokit.issues.createComment({
    owner,
    repo,
    issue_number: prNumber,
    body: `🤖 AI Review:\n\n${reviewText}`
  });
})();
