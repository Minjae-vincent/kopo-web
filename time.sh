#!/bin/bash

TIME=$(date)

echo $TIME >> aa.txt

cd /home/ubuntu/kopo-web

/home/ubuntu/kopo-web/make_green.sh

echo "crontab" >> bb.txt
