# Epicure App

Epicure App is a web application for chef restaurants. From the app, you can explore different restaurants and order dishes from your favorite restaurant. The client-side is developed using React.js and TypeScript, while the server-side is built with Node.js, Express, and TypeScript.

## Project Description

The Epicure App is a web application designed for chef restaurants. It allows users to browse restaurants, view their menus, and place orders for dishes. The project was developed as a collaborative effort, aiming to create a user-friendly and feature-rich application. The team focused on implementing essential functionalities such as restaurant search, menu display, and order management.

The user interface of the Epicure App was designed using Figma, a collaborative design tool. The design files served as a reference for implementing the UI components and styling the application. The stylesheets were written in Sass, a CSS preprocessor that enhances the styling capabilities with features like variables and nesting.

## Notable Features

- Authentication: Users can create accounts and log in to the application. The authentication process is implemented using Formik for form validation and state management. Additionally, the app supports third-party authentication through Google and Facebook.

- Authorization: The Epicure App implements role-based authorization to restrict access to certain features. This ensures that only authorized users can perform actions like adding new dishes or managing restaurant information.

- Restaurant Search: Users can search for restaurants based on various criteria such as cuisine type, location, or restaurant name. The search functionality provides a convenient way to find desired restaurants quickly.

- Order Management: Users can add dishes to their cart, customize dish options, and proceed with the checkout process. The application allows users to manage their orders effectively.

## Environment Variables

The following environment variables are used in the Epicure App:

### Client-side (`.env` in the client folder)

- VITE_LOCAL_SERVER_API_URL: The API URL for the local server. Set it to "http://localhost:8001/api/v1".

- VITE_PRODUCTION_SERVER_API_URL: The API URL for the production server.

### Server-side (`.env` in the server folder)

- PORT: The port on which the server should run. Set it to 8001.

- MONGO_URL: The URL for the MongoDB database. Set it to your MongoDB database URL.

- epicureDB: The name of the MongoDB database. Set it to the name of your Epicure App database.

- JWT_SECRET: The secret key used for JSON Web Token (JWT) generation and verification. Set it to a secure secret key of your choice.

Make sure to set up these environment variables before running the Epicure App.

## Server-side Data Validation

To ensure data integrity, the Epicure App implements server-side data validation. When data is submitted from the client-side, the server validates it before processing. The validation checks include verifying required fields, validating data types, and checking for length limits. Additionally, the server performs format validation to ensure data adheres to specific patterns or formats.

If any data fails the validation checks, the server responds with appropriate error messages, guiding the user to correct the data.

## Getting Started

To get started with the Epicure App, follow these steps:

1. Clone the repository to your local machine using the command: `git clone https://github.com/your-username/epicure-app.git`.

2. Navigate to the project directory.

3. Install the dependencies for the client-side by running `npm install` in the client folder.

4. Install the dependencies for the server-side by running `npm install` in the server folder.

5. Create a file named `.env` in the server folder and set the required

Make sure to set up these environment variables in the .env file before running the Epicure App.

Start the server by running npm start in the server folder.

Start the client-side development server by running npm start in the client folder.

Access the Epicure App in your web browser at http://localhost:3000.

Contributing
If you are interested in contributing to the Epicure App, please follow these guidelines:

Fork the repository and create a new branch for your changes.

Make your changes and commit them to your branch.

Open a pull request and provide a clear and concise description of your changes.

Ensure that your code follows the project's coding style and conventions.

Be responsive to any feedback or comments provided during the review process.

Once your pull request is approved, it will be merged into the main branch.

Thank you for your contribution!

Possible Improvements
While the Epicure App is functional and feature-rich, there are always opportunities for improvement. Some possible areas to consider for future enhancements include:

Adding additional features such as user reviews, order tracking, or social sharing.

Optimizing the application's performance by implementing caching, code optimization, or using performance-enhancing tools.

Enhancing the user interface design to provide a more visually appealing and intuitive experience.

Implementing automated testing to ensure the stability and reliability of the application.

These are just a few examples, and there may be other areas for improvement based on the specific needs and requirements of the Epicure App.

License
The Epicure App is released under the MIT License.
