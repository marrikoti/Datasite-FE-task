Steps to run this repo/task locally:

1. Clone the repo using: git clone <URL>
2. Open the repo in an IDE or git bash and do: npm install   (Prerequisites: Please install node.js and angular cli)
3. Open google.com and search for "Redux DevTools" and add this official extension to your browser: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related?hl=en
4. In your IDE terminal or your git bash type in any one of these commands: "npm start" (OR) "ng serve"
5. Now open "http://localhost:4200/" in your browser to see the application running locally!
6. Click Function+F12 to open the 'Developer tools' so that you can select 'Redux' tab in the end and see the required STORE as well. 
7. Go to project folder and install dependencies: npm install 
8. Launch development server, and open `localhost:4200` in your browser: npm start 
9. Optional: [Setup Intellij IDEA Auto Linting]
    - Be sure to [enable TSLint] in the preferences menu
    - [Setup Intellij IDEA Sonar Linting]

# Project structure

    dist/                        web app production build (untracked)
    e2e/                         end-to-end cucumber tests
    helm/                        helm template files for deploying to Azure
    nginx/                       nginx configuration files
    node_modules/                project dependencies specified in package.json (untracked)
    src/                         project source code
    |- app/                      app components
    |  |- components/            components folder
    |  |- directives/            directives folder
    |  |- models/                models folder (classes, enums, interfaces, etc.)
    |  |- pipes/                 pipes folder
    |  |- services/              services folder
    |  |- coverage/              test and coverage reports (untracked)
    |  |- app.component.*        app root component (shell)
    |  |- app.module.ts          app root module definition
    |  |- app-routing.module.ts  app routes
    |- assets/                   app assets (images, fonts, etc.)
    |- environments/             values for various build environments
    |- single-spa/               single spa configuration files
    |- index.html                html entry point
    |- main.single-spa.ts        single spa entry point
    |- main.ts                   app entry point
    |- polyfills.ts              polyfills needed by Angular
    |- styles.scss               global style entry point
    |- test.ts                   unit tests entry point

# Development process

Task automation is based on [NPM scripts](https://docs.npmjs.com/misc/scripts).

| Task                                | Description                                                                                          |
| ------------------------------------| -----------------------------------------------------------------------------------------------------|
| `ng`                                | Pass-through to run an `ng` (Angular CLI) command                                                    |
| `start`                             | Run development server on `http://localhost:4200/`                                                   |
| `start:local`                       | Run development server on `http://localhost:4200/` with local single-spa configuration               |
| `start:dev`                         | Run development server on `http://localhost:4200/` with hot-swapping for dependencies |
| `build`                             | Build web app for production in `dist/` folder                                                       |
| `test`                              | Jenkins - Run unit tests with Karma, one time run                                                    |
| `test:dev`                          | Local unit tests watching for code changes                                                           |
| `e2e`                               | Jenkins - Run e2e tests using [Cypress](https://docs.cypress.io/guides/overview/why-cypress)         |
| `cypress:open`                      | Open Cypress locally, requires server to be started already                                          |
| `cypress:run `                      | Run Cypress locally headless, requires server to be started already                                  |
| `build:single-spa:assessment-conductor-cds-ui` | Single spa build                                                                                     |
| `serve:single-spa:assessment-conductor-cds-ui` | Single spa serve                                                                                     |

When building the application, you can specify the target configuration using the additional flag
`--configuration <name>` (do not forget to prepend `--` to pass arguments to npm scripts, like so: `-- --configuration <name>`).

Currently supported configurations:
- local
- dev
- prod

When running with no configuration specified, the `environment.ts` file is used, which contains the same environment variables as
dev but can be customized for local development.

Steps to run unit test cases:

1. Run this command in the IDE terminal: ng test --code-coverage
2. Open this URL in your browser to check the unit test cases: http://localhost:9876/
3. Now open the index.html file under the coverage folder in the browser to see the code coverage (repo/coverage/AngNgrx/index.html file)


----------------------------------------------------------------------------------------------

# AngNgrx

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
