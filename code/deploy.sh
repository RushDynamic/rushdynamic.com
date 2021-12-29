#!/bin/sh

date_time=`date "+%Y%m%d-%H%M%S"`
temp_branch="temp_branch_"${date_time}

# perform build
echo "Starting Gatsby build ${date_time}"
npm install
gatsby build

# copy files
echo "Finished building, copying generated files..."
cp -af public/. ../.
cp CNAME ../CNAME

# create and push to temp branch
echo "Finished copying, creating a new branch..."
git checkout -b $temp_branch
ignorecontent="code/"
cd .. && echo "$ignorecontent" > .gitignore
git rm -r code/ # ignore already committed 'code' dir
git add .
git commit -m "Gatsby build ${date_time}"
git push origin $temp_branch
echo "Pushed changes to temp branch"

# local cleanup
git checkout gatsby
echo "Deleted temp branch, deleting all local generated files..."
shopt -s extglob
rm -vr !(code|.git)

# merge temp branch to main
echo "Pushing changes to main branch..."
git fetch origin
git checkout main
git pull origin main
rm -vr !(CNAME|.git)
git merge $temp_branch
git rm -r code/ # ignore already committed 'code' dir
git push origin main

# delete temp branch
#echo "Deleting temp branch..."
#git push origin --delete $temp_branch
echo "Finished deployment"