# Expense Tracker 2.0

Live-https://expense-tracker-2-0-6l2j.onrender.com/

## Table of Contents
- [About the Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
  
## About the Project
Expense Tracker 2.0 is a comprehensive application designed to help users manage their finances efficiently. It allows users to track income and expenses, categorize transactions, and analyze spending patterns. The project is built using modern web technologies and aims to provide a user-friendly interface for personal financial management.

## Features
- Add and manage income and expenses.
- Categorize transactions (e.g., food, rent, entertainment).
- Visualize spending trends with charts and graphs.
- Persistent data storage using a database.
- Responsive design for mobile and desktop use.

## Technologies Used
- **Frontend**: Javascript,React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Styling**: CSS/Bootstrap

## Installation
To get a local copy up and running, follow these steps:

### Prerequisites
- Node.js and npm installed on your machine
- MongoDB database setup

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/ayushg198/expense-tracker-2.0.git
   ```
2. Navigate to the project directory:
   ```bash
   cd expense-tracker-2.0
   ```
3. Install dependencies for both the frontend and backend:
   ```bash
   npm install
   cd client
   npm install
   ```
4. Configure environment variables:
   - Create a `.env` file in the `server` directory.
   - Add the following variables:
     ```env
     MONGO_URI=your_mongodb_connection_string
     PORT=8080
     ```
5. Run the application:
   - Start the server:
     ```bash
     npm start
     ```
   - Start the frontend:
     ```bash
     cd client
     npm start
     ```
6. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage
1. Register or log in to your account.
2. Add income and expense transactions.
3. Categorize transactions for better insights.
4. View detailed reports and charts to analyze your spending habits.



