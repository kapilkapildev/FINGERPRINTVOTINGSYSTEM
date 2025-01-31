const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise'); // Using promise-based MySQL for async/await

const app = express();
const PORT = 3000;

// Enable CORS to allow requests from the frontend
app.use(cors());

// Database connection pool
const db = mysql.createPool({
    host: 'localhost',    // Replace with your database host
    user: 'root',         // Replace with your database username
    password: 'kapilmass', // Replace with your database password
    database: 'FingerprintvotingSystem',  // Replace with your database name
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// API endpoint to fetch voter details by ID
app.get('/get-Voters/:VoterID', async (req, res) => {
    const voterID = req.params.VoterID;

    try {
        // Query to fetch voter details
        const [rows] = await db.query('SELECT * FROM voters WHERE VoterID = ?', [voterID]);

        if (rows.length > 0) {
            // Send the voter details if found
            res.json({
                FullName: rows[0].FullName,
                Age: rows[0].Age,
                Address: rows[0].Address,
                Constituency: rows[0].Constituency
            });
        } else {
            // Send a 404 response if the voter is not found
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error fetching voter details:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
