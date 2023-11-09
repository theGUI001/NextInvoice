#!/bin/bash

BRANCH=$(git rev-parse --abbrev-ref HEAD)

if [ "$BRANCH" == "Production" ] || [ "$BRANCH" == "Staging" ]; then
  exit 1
else
  exit 0
fi
