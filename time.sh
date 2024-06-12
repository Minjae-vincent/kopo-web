#!/bin/bash

TIME=$(date)

echo $TIME >> aa.txt

/home/ubuntu/kopo-web/make_green.sh

echo "crontab" >> bb.txt
