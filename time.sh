#!/bin/bash

TIME=$(date)

echo $TIME >> aa.txt

./make_green.sh

echo "crontab" >> bb.txt
