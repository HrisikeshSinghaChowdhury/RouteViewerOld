#!/bin/bash
# auth.sh [Artifactory Username] [Token]
# auth.sh jenkins AKCp5ZjzBbNFPiZmXak4QmHSEUVMYMiEou2LFYNXdLGRqeCGyLNa7J2eSwrFkLUupeVxPAjmu

if [ -z "$1" ]; then
    echo "No arguments supplied! \n
    auth.sh [Artifactory Username] [Token]"
    exit 1
fi

if [ ! -f .npmrc ]; then
  curl -s -u"${1}":"${2}" https://quantuminventions.jfrog.io/quantuminventions/api/npm/npm/auth/sb >> .npmrc
  curl -s -u"${1}":"${2}" https://quantuminventions.jfrog.io/quantuminventions/api/npm/npm/auth/qi >> .npmrc
fi
