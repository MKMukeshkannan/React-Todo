# TODO APPLICATION

![ScreenShot](https://github.com/MKMukeshkannan/React-Todo/assets/119940345/3eb01ecb-5bfd-4fbe-ab9a-4bda7716b10a)

A simple ToDo application built using React, Node.js, Express, Supabase, Prisma, and Tailwind CSS.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This is a ToDo application that allows users to manage their tasks and to-do lists. The application is built using a combination of modern technologies such as React, Node.js, Express, Supabase, Prisma, and Tailwind CSS.

## Features

- User authentication and registration using Supabase
- Create, read, update, and delete tasks
- Mark tasks as complete or incomplete
- Responsive design with Tailwind CSS

## Installation

1. Clone the repository:

    ```bash
    git clone git@github.com:MKMukeshkannan/React-Todo.git
    ```
2. Install dependencies for both the client and server:
    ### a. Backend Setup
   
    ```bash
    cd React-Todo/backend
    npm i
    ```
    - Create a supabase project, and copy its connection string.
    - Create a variable "DATABASE_URL" in .env and paste the connection string,

    ```bash
    npx prisma migrate dev --name init
    npm run dev
    ```
    
    ### b. Frontend Setup

    ```bash
    #Go to root folder
    cd React-Todo/frontend
    npm i
    npm run dev
    ```

## Technologies Used

- React
- Node.js
- Express
- Supabase
- Prisma
- Tailwind CSS

## Contributing

Contributions are welcome! If you find any issues or want to enhance the application, feel free to open a pull request.

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Open a pull request explaining the changes you've made.
