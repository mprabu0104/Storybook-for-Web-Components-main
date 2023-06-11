#!/bin/bash
#
# You must run this script from the project root.
#
# Usage:
# npm run deploy
#

# Sync master branch and prepare staging branch.
git checkout master
git pull
git checkout -B gh-pages-staging
git branch -D gh-pages

# Build storybook-static for staging and push to gh-pages.
npm run build-storybook
git add -f storybook-static
git commit -m "Add storybook-static for gh-pages"
git subtree split --prefix storybook-static -b gh-pages
git push origin -f gh-pages:gh-pages

# Clean up branches and files.
git checkout master
git branch -D gh-pages gh-pages-staging