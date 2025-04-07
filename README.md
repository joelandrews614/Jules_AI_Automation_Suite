# Jules_AI_Automation_Suite

The Jules AI Automation Suite is designed to automate testing processes for Jules AI using JavaScript and Playwright. This suite aims to ensure the reliability and efficiency of Jules AI's functionalities through comprehensive automated tests.

Key Features:
  * Playwright Integration: Utilizes Playwright for browser automation, enabling end-to-end testing of web applications.
  * JavaScript-Based: Developed entirely in JavaScript, leveraging its asynchronous capabilities for efficient test execution.
  * Data-Driven-Testing: Implemented data-driven testing using CSV file to run tests with multiple data sets, enhancing coverage and reducing code duplication.
  * Modular Test Design: Organized test cases into reusable modules to enhance maintainability and scalability.
  * Continuous Integration: Configured with GitHub Actions to automate test execution on code commits, ensuring immediate feedback on potential issues.
  * Detailed Reporting: Generates comprehensive test reports to assist in analyzing test outcomes and identifying failures.

Development Procedures:
  * Framework Setup: Established the project structure, incorporating Playwright configurations and organizing test directories.
  * Version Control: Managed code versions using Git, hosting the repository on GitHub for collaboration and tracking changes.
  * Continuous Integration Implementation: Integrated GitHub Actions to automate test runs on pull requests and merges, maintaining code integrity.
  * Documentation: Created clear documentation within the codebase and README.md to guide future developers and users on the suite's usage and structure.

API Testing: ("regression-tests/API-Tests/Jules_API_Collection.postman_collection.json)
- For Login Scenarios, Implemented Positive and Negatice Cases such as:
  1. Successful Login
  2. Empty Username and Password
  3. Invalid Username but with Valid Password
  4. Valid Username but with Invalid Password
  5. Validate Invalid Endpoint
  6. Validate Invalid API Method
  7. Validate Invalid Request Body
Created it and combined it to a Postman Collection Json File.

Bug Report: ("Bug Reports/Bug Report V1.xlsx")
Created a Bug Sheet Templated and Added some bugs and how to reproduce them.
