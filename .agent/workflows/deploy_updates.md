---
description: How to deploy updates to Vercel and GitHub Pages
---

# Deploying Updates

When you have made changes to the code and want to update the live application:

1.  **Commit and Push Changes** (Updates Vercel)
    - Run the following commands to save your changes and push them to GitHub:
    ```bash
    git add .
    git commit -m "Your commit message here"
    git push
    ```
    - **Vercel** will detect the push and automatically redeploy the new version.

2.  **Deploy to GitHub Pages** (Manual Step)
    - Run the deploy script to build and publish to GitHub Pages:
    ```bash
    npm run deploy
    ```
    - This will build the app and push the `dist` folder to the `gh-pages` branch.

// turbo-all
