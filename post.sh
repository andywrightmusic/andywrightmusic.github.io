#!/bin/bash
# This bash script will setup a new Jekyll blog post in Markdown and open it for editing in Sublime Text 2

echo "Post Title: "
read title
echo "Post Description: "
read desc

ptitle=${title// /-}   # convert spaces in title to hyphens
plc=`echo "$ptitle" | tr '[:upper:]' '[:lower:]'`   # convert title to lowercase
pdate=`date +%Y-%m-%d` 	# create date as Year-Month-Date
filename=./collections/_posts/$pdate-$plc.md 	# location to create the new file as year-month-day-title.md
touch $filename 	# create the new blank post

echo "---
layout: post
title: $title
description: $desc
categories: articles
date: $pdate
tags: [$tags]
keywords: [$keyw]
image: $img
---" > $filename 	# fill out YAML Front Matter and insert into our new file
