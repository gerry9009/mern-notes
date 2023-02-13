# Initialize server-side:

- added dependencies to the project:
  - express
  -
- added DEVdependencies to the project: (`--save-dev => -D`)
  - nodemon -> run server without restart the server manually `npx nodemon server.js`
  - typescript -> using typescirpt for this project `npx tsc`
  - @types/express -> add entry in the devdependencies the express types
  - ts-node -> allows us to run typescript file until development, TypeScript execution => `npx nodemon src/server.ts`
  - eslint -> config file: `npx eslint --init` run: `npm eslint . --ext .ts`

---

# MongoDB Atlas - Mongoose setup

-Create MongoDB

- add `npm i dotenv` and .env file to save mongodb data
- add mongoose to manage MongoDB database `npm i mongoose`
- `npm i envalid`-> validating and accessing environment variables

  (Coding in Flow video)[https://www.youtube.com/watch?v=FcxjCPeicvU&t=820s&ab_channel=CodinginFlow]
