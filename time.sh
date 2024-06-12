#!/bin/bash

TIME=$(date)

echo $TIME >> aa.txt

cd /home/ubuntu/kopo-web


echo "crontab" >> bb.txt

git add .
git commit -m "make green"
git push
