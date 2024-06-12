#!/bin/bash

TIME=$(date)

cd /home/ubuntu/kopo-web

echo "$TIME" >> aa.txt



echo "crontab" >> bb.txt

git add .
git commit -m "make green"
git push origin main
