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

# Check for changes in the 'Oblique' folder
if git diff --quiet HEAD^ HEAD ./Oblique; then
  echo "No changes in Oblique"
else
  echo "Changes detected in Oblique"
fi

# Check for changes in the 'project2' folder
if git diff --quiet HEAD^ HEAD ./project2; then
  echo "No changes in project2"
else
  echo "Changes detected in project2"
fi

# Check for changes in the 'project4' folder
if git diff --quiet HEAD^ HEAD ./project4; then
  echo "No changes in project4"
else
  echo "Changes detected in project4"
fi