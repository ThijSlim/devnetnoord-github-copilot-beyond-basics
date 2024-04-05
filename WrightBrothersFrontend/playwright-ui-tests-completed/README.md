# Playwright UI Tests

This project contains UI tests for a web application using the Playwright test framework. The tests are written in TypeScript and use the @playwright/test library.

## Project Structure

```
playwright-ui-tests
├── src
│   ├── tests
│   │   └── new-plane.test.ts
│   └── utils
│       └── form-fill.ts
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

- `src/tests/new-plane.test.ts`: This file contains the test script for the UI tests. It uses the `@playwright/test` library to write and run the tests. The script navigates to the "/new-plane" page and fills out the form with the specified fields.

- `src/utils/form-fill.ts`: This file exports a function `fillForm` which takes the form fields (#id, #name, #year, #description, #rangeInKm) as parameters and fills out the form with the provided values.

- `playwright.config.ts`: This file is the configuration file for the Playwright test framework. It specifies the test environment settings, including the base URL (localhost:5173) and the headless mode (false).

- `tsconfig.json`: This file is the configuration file for TypeScript. It specifies the compiler options and the files to include in the compilation.

- `package.json`: This file is the configuration file for npm. It lists the dependencies and scripts for the project, including the `@playwright/test` library.

## Usage

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Run the tests using `npm test`.

Please note that the tests require the web application to be running on localhost:5173.

This file is intentionally left blank.