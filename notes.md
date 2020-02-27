# Workflow
- Add gitignore `npx gitignore node`
- Add Mac Cruft inside gitignore
- Add package.json `npm init -y`
- Install nodemon, jest and supertest as development dependencies 
    * `npm i -D nodemon jest supertest`
- Install `npm i dotenv express helmet pg knex cors`

## In package.json
- Add scripts 
    * `"test": "jest --watch"`
    * `"server": "nodemon index.js"`
    * `"start": "node index.js"`
- Add 
```js
"jest": {
    "testEnvironment": "node"
  }
```
## Features
- list of dealerships
- add a dealership
- list of dealership's brands
- add a brand
- list of brands dealerships

|FEATURE|METHOD|URL|
|:------------------------|:---|:---------------------------|
|list dealerships         |GET | /api/dealerships           |
|add dealership           |POST| /api/cohorts               |
|view dealership's brands |GET | /api/dealerships/:id/brands|
|list of brands           |GET | /api/brands                |
|add brand                |POST| /api/brands                |
|view brand's dealerships |GET | /api/brands/:id/dealerships|

## Dealerships
- id
- name

## Brands
- id
- name