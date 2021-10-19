# Sector-Labs-Assignment

This repository contains the implementantion for the sector labs takehome assignment. This was achieved using NodeJS and [webdriverIO](https://webdriver.io/).

## Requirements and installation

In order to run the following assignment one may require the following versions of **NodeJS** and **npm**.
- NodeJS - 16.x.x or higher
- npm  - 8.0.0 or higher

### Running the project

- Install the packages using:

```sh
npm i
```

- To run the prject use:

```sh
npm run wdio
```

or if you have ``npx`` you can run the following form the project root directory:

```sh
npx wdio run ./wdio.conf.js
```

Running the commands will spawn two chrome browser instances which will perform the test cases described in the assignment.

## Things that I would like to add

- Improve the implementantion of the design classes in order to have a more generic approach that can be reused on multiple pages/scenarios
- Replace the approach that uses the Name Attribute selector (because that implementation is deprecated in older browsers)

