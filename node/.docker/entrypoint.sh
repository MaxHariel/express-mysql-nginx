#!/bin/sh

dockerize -wait tcp://db:3306 -timeout 45s
npm install
npm run dev
