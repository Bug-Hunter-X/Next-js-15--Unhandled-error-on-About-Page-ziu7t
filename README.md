# Next.js 15 Unhandled Error on About Page

This repository demonstrates a common issue in Next.js 15 applications: unhandled exceptions causing a crash. The problem stems from a division by zero in the `about.js` page.  The solution showcases how to handle errors using try...catch blocks to prevent the application from crashing.

## Bug Report
The `about.js` file contains a division by zero, which throws an error.  Next.js, by default, will display a generic error page without useful information for the user. 

## Solution
The `aboutSolution.js` provides the solution, which uses a `try...catch` block to handle potential errors. This prevents the application from crashing and allows for more graceful error handling, such as displaying a custom error message to the user.