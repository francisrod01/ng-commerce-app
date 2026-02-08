# NgCommerceApp

Angular template for e-commerce.

![Angular e-commerce template screenshot](angular-ecommerce-screenshot.png)

This project is part of a hands-on series about building templates using Angular.

- Medium article: https://medium.com/p/c299e26aa51
- Repo author: [Francis Rodrigues](https://github.com/francisrod01)
- Designed by: [Ajay Malhotra](https://therichpost.com/angular-11-bootstrap-4-5-ecommerce-template-free/)

## How to run it

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


### Test

- Unit tests: run `npm test` (Karma + Jasmine). To run a single headless run locally: `npx ng test --watch=false --browsers=ChromeHeadless`.
- Lint: run `npm run lint` (ESLint via angular-eslint).
- End-to-end (E2E): Cypress is used for E2E tests.
  - Open interactive runner: `npm run e2e` (runs `cypress open`).
  - Run headless (CI/local): `npm run e2e:run` (starts the dev server and runs `cypress run`).

Notes:
- A GitHub Actions workflow (`.github/workflows/cypress-e2e.yml`) runs the Cypress suite on push/PRs.
- Cypress has a dedicated `cypress/tsconfig.json` so Cypress files are type-checked separately from the app.


### Technical information

This project was originally generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.4 and has since been upgraded to **Angular v21** using the Angular CLI 21.x toolchain.

## License

MIT
