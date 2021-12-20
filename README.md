# NodeJS REST API basic project structure

NodeJS REST API + MongoDB + Typescript + githooks pre-push (eslint).

The project contains a Post model with route, controller and service all connected to mongo DB. It can be used as a guide to continue adding more.


## Development

- clone this repo
- set .env file
- install hooks: `cp .githooks/* .git/hooks/`
- `npm start`
- `npm run dev` -> watch mode

mongo:
- install client and server
- create DB folder: `sudo mkdir -p /data/db`
- grant permissions: `sudo chown -R $USER /data/db`
- start mongo: `mongod`
