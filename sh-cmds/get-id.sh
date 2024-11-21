#!/bin/bash

echo "Enter ID: "

read id

curl -X GET http://localhost:8080/albums/$id
