#!/bin/bash

echo "Enter ID: "
read id

echo "Enter album title: "
read title

echo "Enter artist: "
read artist

echo "Enter price: "
read price

curl http://localhost:8080/albums --include \
--header "Content-Type: application/json" \
-X POST \
--data "{\"id\": \"$id\", \"title\": \"$title\", \"artist\": \"$artist\", \"price\": $price}"
