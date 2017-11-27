#!/bin/bash

clear

GREEN='\033[0;32m'
NC='\033[0m' # No Color

echo -e "${GREEN} #########################\n${NC}"
echo -e "${GREEN}   Deploy process started \n${NC}"
echo -e "${GREEN} #########################\n${NC}"

echo -e "${GREEN} # Deploying Auth Service\n${NC}"
cd auth && we deploy -p fichamento
cd ..
echo -e "${GREEN} # Done\n${NC}"

echo -e "${GREEN} # Deploying Data Service\n${NC}"
cd data && we deploy -p fichamento
cd ..
echo -e "${GREEN} # Done\n${NC}"

echo -e "${GREEN} # Deploying Web Service\n${NC}"

echo -e "${GREEN} - Changing dir to WEB\n${NC}"
cd web

echo -e "${GREEN} - Running project build...\n${NC}"
yarn build

echo -e "${GREEN} - Copied wedeploy.json file to build folder\n${NC}"
cp wedeploy.json build/wedeploy.json

echo -e "${GREEN} - Changing dir to Build\n${NC}"
cd build

echo -e "${GREEN} - Executing we deploy...\n${NC}"
we deploy -p fichamento

echo -e "${GREEN} #########################\n${NC}"
echo -e "${GREEN}  Deploy process finished, go to: https://fichamento.online \n${NC}"
echo -e "${GREEN} #########################\n${NC}"
