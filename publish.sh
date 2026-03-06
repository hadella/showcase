#!/bin/bash

echo "Building example site..."
cd exampleSite
hugo --themesDir ../..
cd ..

echo "Switching to gh-pages branch..."
git checkout gh-pages

echo "Copying new build..."
cp -r exampleSite/public/* .

echo "Cleaning source files..."
rm -rf exampleSite

echo "Committing changes..."
git add .
git commit -m "Deploy example site - $(date '+%Y-%m-%d %H:%M')"

echo "Pushing to GitHub..."
git push origin gh-pages

echo "Switching back to main..."
git checkout main

echo "Done!"
