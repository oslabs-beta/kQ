# Adding Features – Developer Workflow

1. On your forked repo, create a new feature branch using `git checkout -b feature_name`
2. Once you've finished adding the feature, you'll want to add, commit, and push. More specifically, you want to push to your remote branch on your forked repo: `git push origin feature_name`. We are pushing so that this code is stored remotely (in case the merge creates problems, we will still have access to your working code).
3. Now that your feature is complete, we'll need to merge in any new changes that have happened to the upstream repo since you created your feature branch. First, we need to get your local main branch up to date. Run `git checkout main` (this just switches to your local main branch). Next, run `git pull upstream main`. This pulls all changes from the upstream main onto your local main. (Note that the upstream main is `oslabs-beta/kafkaQ`).
4. At this point, your local main has all the new changes from the upstream, and your feature branch has your changes. We want to merge these together. Switch back to your feature branch with `git checkout feature_name` and run `git merge main`. To be clear, this is merging your local main onto your local feature branch. You may have to handle merge conflicts at this point.
5. After merging, TEST YOUR CODE. You want to be sure that this merge did not affect your feature.
6. Push your branch with `git push origin feature_name`.
7. Now it's time to make your Pull Request. You want to merge from your feature branch on your forked repo onto the main branch of the original (upstream) repo.
   - Base repository: oslabs-beta/kafkaQ
   - Base branch: main
   - Head repository: [your username]/kafkaQ
   - Compare branch: feature_name
