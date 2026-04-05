# GitHub Actions Deployment Notes

## Auto-Deploy Trigger
The repository is set up with an automated CI/CD pipeline (`.github/workflows/ci.yml`) that runs E2E Playwright tests before allowing code to merge into `main`.

A standard push to a feature branch will **not** automatically merge into `main` even if the tests pass. 

### How to Auto-Merge to Main
The deployment step will only execute if the commit message contains the precise, fully capitalized keyword:
**`MAIN`**

### Recommended Workflow
1. Make your changes in a working branch (e.g., `Features_April_2026`).
2. Draft your commit message and ensure it includes `MAIN`. 
   *Example: `git commit -m "feat: user guide UI refactor MAIN"`*
3. If you forgot the keyword in your last commit but still want to trigger the pipeline, force a trigger by executing an empty commit:
   `git commit --allow-empty -m "trigger auto-deploy MAIN"`
4. Push to remote: `git push origin branch_name`
5. GitHub Actions will handle the rest, checking out `main` and merging your branch entirely automatically.
