Pour lancer le projet :
> npm run start:postgres   

Pour lancer les tests :
> npm run test:e2e:postgres

Prérequis : 
> npm ci
- Lancer Docker avant d'exécuter les commandes npm 

Sous windows modifier les lignes du package.json :
- "test:e2e:postgres": "SET DBMS=postgres && docker-compose --env-file ./.env -f ./docker/docker-compose-postgres.yml up -d && jest --config ./test/jest-e2e.json",
- "start:postgres": "SET DBMS=postgres && docker-compose --env-file ./.env -f ./docker/docker-compose-postgres.yml up -d && npm run start:dev"

Sous linux modifier les lignes du package.json :
 - "test:e2e:postgres": "export DBMS=postgres; docker-compose --env-file ./.env -f ./docker/docker-compose-postgres.yml up -d; jest --config ./test/jest-e2e.json",
 - "start:postgres": "export DBMS=postgres; docker-compose --env-file ./.env -f ./docker/docker-compose-postgres.yml up -d; npm run start:dev"
