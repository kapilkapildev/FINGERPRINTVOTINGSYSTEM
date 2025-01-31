const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const PORT = 1000;

app.use(cors({ origin: "http://localhost:2000", credentials: true }));
app.use(express.json());
app.use(express.static('public'));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "kapilmass",
    database: "FingerprintvotingSystem"
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
        process.exit(1);
    } else {
        console.log("Connected to the MySQL database.");
    }
});

app.get("/get-Candidates", (req, res) => {
    const { constituency } = req.query;

     // Validate the request
     if (!constituency) {
        return res.status(400).json({ error: "Constituency parameter is required." });
    }
    // Query the database for candidates in the given constituency
    const query = "SELECT id, candidate_name, party_name, constituency, symbol FROM candidates WHERE constituency = ?";
    db.query(query, [constituency], (err, results) => {
        if (err) {
            console.error("Database query failed:", err);
            return res.status(500).json({ error: "Failed to fetch candidates." });
        }

        if (results.length > 0) {
            res.status(200).json(results);
        } else {
            res.status(404).json({ error: "No candidates found for this constituency." });
        }
    });
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
