#!/bin/bash



# Check for changes in the 'project1' folder
if git diff --quiet HEAD^ HEAD ./project1; then
  echo "No changes in project1"
else
  echo "Changes detected in project1"
fi

# Check for changes in the 'project2' folder
if git diff --quiet HEAD^ HEAD ./project2; then
  echo "No changes in project2"
else
  echo "Changes detected in project2"
fi
