

Workflow with Git -----------------------------


INITIALIZATION AT OFFICE AND HOME

AT Office (Linux)
--Do your work
git init
git add .
git commit -m "Initial commit"
git branch -M office
git remote add origin <repo-url>
git push -u origin office

At Home (WIndows)
git clone <git-link>
cd repo
git checkout -b home --> New Home Branch Created
--Do your work--
git add .
git commit -m "Home Commit"
git push -u origin home


EVERYDAY WORKFLOW WITH GIT

AT OFFICE 
git fetch --all --> Fetches the recent git repo with all the updates from home
git checkout office --> Switch to work on the office branch

IF YOU WANT ANY FILE FROM HOME
git checkout origin/home -- path/to/file  --> Copies the file from home branch into the office branch. 
DO the same viceversa so that both branches have the same file content to avoid conflicts at merging into main branch.

git cherry-pick <commit-hash> --> Avoid this


FINALLY WHEN YOU WANT TO MERGE
git checkout -b main --> create a new branch and switch to it
git merge origin/home
git merge origin/main --> Merge both branches into main
git push -u origin main --> Push the main branch




