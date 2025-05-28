#!/bin/bash



# Check for changes in the 'project1' folder
if git diff --quiet HEAD^ HEAD ./project1; then
  echo "No changes in project1"
else
  echo "Changes detected in project1"
fi

# Check for changes in the 'dribble' folder
if git diff --quiet HEAD^ HEAD ./dribble; then
  echo "No changes in dribble"
else
  echo "Changes detected in dribble"
fi

# Check for changes in the 'project3' folder
if git diff --quiet HEAD^ HEAD ./project3; then
  echo "No changes in project3"
else
  echo "Changes detected in project3"
fi

