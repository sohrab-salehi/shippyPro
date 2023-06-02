# ShippyPro

## 💫 Summary

This is a sample web application showcasing the implementation of a flight booking application.

## Features

- Display a list of available flights
- Display a list of airports
- Creating new flight
- Creating new airport
- Finding the best flight between two airports with at most one stop over

### Linter & code formatter
For code formatting, `Eslint` and `Prettier` was used with **Airbnb** config in this project.

### Important libraries
* [Ant design](https://ant.design/)
* [React router v6](https://reactrouter.com/)
* [Axios](https://axios-http.com/)
* [Laravel (Backend)](https://laravel.com/)
* [Sass](https://sass-lang.com/)

<br />

## Getting Started
---
### Prerequisites

- Node.js (v12 or above)
- npm or yarn

## 🏃‍♂️ How to run the project?
---
### Frontend

1. Clone the repository:

   ```
   git clone https://github.com/sohrab-salehi/shippyPro.git
   ```

2. Install dependencies:
    ```
    cd shippyPro/frontend
    npm install (--force)
    ```

3. Run react project:
    ```
    npm start
    ```
### backend

1. Navigate to the project's backend directory:

   ```
   cd shippyPro/backend
   ```

2. Install backend dependencies:
    ```
    composer install
    ```

3. Create a copy of the .env.example file and rename it to .env:
    ```
    cp .env.example .env
    ```

4. Configure the database connection in the .env file.
 
5. Run the database migrations:
    ```
    php artisan migrate
    ```

6. Start the backend server:
    ```
    php artisan serve
    ```

<br />


## Folder Structure
---
### Frontend
    src/
        |- components/      # Reusable components
        |- api/             # API communication utilities
        |- pages/           # Application pages
        |- assets/          # Static assets (images, styles)
        |- utils/           # Helper functions
        |- App.js           # Main application component
        |- index.js         # Entry point


<br />

## Logging web vitals
---
You can observe web vitals parameters like cumulative layout shift(CLS) or first input delay(FID) by passing `console.log` function to `reportWebVitals()` in `index.tsx`.

<br />
