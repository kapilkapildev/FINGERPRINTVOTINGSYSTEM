# FINGERPRINTVOTINGSYSTEM
advanced voting system

# Fingerprint-Based Online Voting System

## Overview
This project is a **secure online voting system** that utilizes **fingerprint authentication** to ensure **unique and legitimate voting**. It integrates a **frontend**, **backend**, **database**, and **authentication system** to manage voter registration, login, voting, and result processing.

## Features
- **Biometric Authentication**: Ensures that only registered users can vote using their fingerprints.
- **User Registration & Authentication**: Secure login system using **JWT authentication**.
- **Vote Tracking**: Ensures each user can vote only once.
- **Admin Panel**: Allows election authorities to manage candidates and oversee the voting process.
- **Real-time Results**: Live vote count updates.
- **Database Integration**: Uses **MySQL** for secure storage of user and vote data.

## Tech Stack
### **Frontend:**
- **HTML, CSS, JavaScript** (for user interface)
- **React.js** (optional, for dynamic UI)

### **Backend:**
- **Node.js & Express.js** (handles server-side logic)
- **Fingerprint Authentication API** (e.g., DigitalPersona, WebAuthn, or local biometric SDKs)
- **JWT (JSON Web Token)** (for authentication)

### **Database:**
- **MySQL** (stores users, votes, and candidate data)
- **Sequelize ORM** (for database management)

## Installation & Setup
### Prerequisites
- **Node.js** (Install from [nodejs.org](https://nodejs.org))
- **MySQL** (Ensure MySQL server is running)
- **Git** (for version control)

### Steps to Run Locally
1. **Clone the Repository**
   ```sh
   git clone https://github.com/yourusername/fingerprint-voting-system.git
   cd fingerprint-voting-system
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and configure:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASS=yourpassword
   DB_NAME=voting_system
   JWT_SECRET=your_secret_key
   ```

4. **Run Database Migrations**
   ```sh
   npx sequelize db:migrate
   ```

5. **Start the Server**
   ```sh
   npm start
   ```
   The server should now be running on `http://localhost:5000`

6. **Run Frontend (if applicable)**
   ```sh
   cd client
   npm start
   ```
   The frontend should now be running on `http://localhost:3000`

## API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/api/auth/register` | Register a new voter |
| POST | `/api/auth/login` | User login |
| POST | `/api/vote` | Submit vote |
| GET | `/api/results` | Fetch live results |
| GET | `/api/admin/candidates` | Get list of candidates (Admin) |

## Deployment
For deployment, use platforms like:
- **Frontend:** Netlify / Vercel / GitHub Pages
- **Backend:** Heroku / AWS / DigitalOcean
- **Database:** Remote MySQL (e.g., AWS RDS, Supabase)

## License
This project is open-source and available under the **MIT License**.


## Acknowledgments
Special thanks to open-source fingerprint authentication APIs and frameworks used in this project.

---


