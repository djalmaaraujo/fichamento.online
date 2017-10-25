#!/bin/bash

clear

GREEN='\033[0;32m'

echo -e "${GREEN} #########################\n"
echo -e "${GREEN}   Deploy process started \n"
echo -e "${GREEN} #########################\n"

echo -e "${GREEN} # Deploying Web Service\n"

echo -e "${GREEN} - Changing dir to WEB\n"
cd web

echo -e "${GREEN} - Running project build...\n"
yarn build

echo -e "${GREEN} - Copied wedeploy.json file to build folder\n"
cp wedeploy.json build/wedeploy.json

echo -e "${GREEN} - Changing dir to Build\n"
cd build

echo -e "${GREEN} - Executing we deploy...\n"
we deploy -p fichamento

echo -e "${GREEN} #########################\n"
echo -e "${GREEN}  Deploy process finished \n"
echo -e "${GREEN} #########################\n"
