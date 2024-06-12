#!/bin/bash

TIME=$(date)

echo $TIME >> aa.txt

bash make_green.sh

echo "crontab" >> bb.txt
