const ghpages = require("gh-pages");

ghpages.publish(
  "dist",
  {
    repo: `https://${process.env.GH_TOKEN}@github.com/${process.env.GH_USER}/${process.env.GH_REPO}.git`,
    silent: false
  },
  err => {
    if (err) {
      console.error(err);
      process.exit(err.errno || 0);
    }

    console.log("Deployed to https://davidsuarez.dev/");
  }
);
