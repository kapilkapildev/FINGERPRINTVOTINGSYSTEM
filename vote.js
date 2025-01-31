const express = require("express");
const session = require("express-session");
const mysql = require("mysql2");

const app = express();
const PORT = 2000;

app.use(express.json());
app.use(session({ secret: "secret", resave: false, saveUninitialized: true }));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "kapilmass",
    database: "FingerprintvotingSystem"
});

db.connect(err => {
    if (err) throw err;
    console.log("Database connected.");
});

app.post("/cast-vote", (req, res) => {
    const { candidate_id, voter_id } = req.body;
    db.query("SELECT * FROM votes WHERE voter_id = ?", [voter_id], (err, results) => {
        if (results.length) return res.status(403).json({ error: "Already voted" });

        db.query("INSERT INTO votes (voter_id, candidate_id) VALUES (?, ?)", [voter_id, candidate_id], err => {
            if (err) return res.status(500).json({ error: "DB error" });
            res.json({ message: "Vote cast!" });
        });
    });
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
