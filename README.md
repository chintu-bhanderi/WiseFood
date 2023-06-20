# Restaurant Management System (WiseFood)

The WiseFood App is designed to streamline the slot wise table booking in restaurant online. 
User can check the manu and order the food. 
Can payment the bill online.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)

## Project Overview

A web application developed using the MERN stack, allowing users to conveniently book tables online, after that customer needs to go to the restaurant at a defined time. Confirm that table from the counter and after that customer can able to order the food online.	

The customer order request is going to the chef and the chef needs to prepare that order and after that send the request to the waiter the service the food. So the waiter's only job is to serve whenever prepared the order and solves customer doubts of use the application to order the food.	

## Technologies Used

*Client :* React.js ⚛ , HTML5 🌐 , CSS3 🎨

*Server:* Node.js 🖥 , Express.js 🚀, MongoDB 🍃 , REST API 🌐 , Socket.io 🔌

## Features

- 🔒 *User Authentication:* User registration with appropriate details.

- 📅 *Table Booking:* Users can easily book the available table date and slot wise.

- 🍔 *Order the food:* Seamlessly customer can order the food.

- 💳 *Secure Payments:* Integration of secure payment gateway for transactions. 


## Installation

1. Clone the repository: `git clone [repository URL]`

2. Navigate to the project directory: `cd [project directory]`

3. Install dependencies for the backend: `npm install`

4. Install dependencies for the frontend: `cd ../frontend && npm install`

5. Configure environment variables:
- Create a `.env` file in the backend directory.
- Set up the required environment variables. You can refer to the `.env.example` file for reference.

6. Start the backend server: `npm run server`

7. Start the frontend development server:`npm start`

8. Start the Socket server : `npm run socket`

9. Open your browser and navigate to `http://localhost:3000` to access the application.

Note: Make sure you have MongoDB installed and running locally or provide the connection string for a remote MongoDB database in the `.env` file.

## Usage

*1. User Authentication:*
   - Sign up for an account by providing your name, email, and password and other detais.
   - Sign in for an account by probiding yout email and possword and after verification generate token and send to the client side for authorization.

*2. Table Booking:*
   - Show the list of available tables based on date and slot.
   - For booking table, first have to make the payment and after that successfully table will booked.

*3. Order the food:*
   - Show the category wise manu list.
   - For order the food have to click the order button.

*4. Secure Payments:*
   - Make payments using the integrated payment gateway.
   - Enter your payment details securely within the app to complete the transaction.


*Note:* Please ensure that you have a stable internet connection and a device with a supported web browser to access the WiseFood App.