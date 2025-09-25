import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';

const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(cookieParser());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
});

// login route
app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE email=? AND password=?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) return res.json({ Message: "Error" });

        if (data.length > 0) {
            const name = data[0].name;
            const token = jwt.sign({ name }, "our-secret-key", { expiresIn: '1d' });
            res.cookie('token', token, { httpOnly: true });
            return res.json({ Status: "Success" });
        } else {
            return res.json({ Message: "No Record" });
        }
    });
});

// middleware to check if user has a valid token
const verifyUser = (req, res, next) => {
  const token = req.cookies.token; // read the cookie
  if (!token) {
    return res.json({ Status: "Error", Message: "Not authenticated" });
  }
  jwt.verify(token, "our-secret-key", (err, decoded) => {
    if (err) {
      return res.json({ Status: "Error", Message: "Invalid token" });
    }
    req.name = decoded.name;
    next();
  });
};

// verify route
app.get('/verify', verifyUser, (req, res) => {
  return res.json({ Status: "Success", name: req.name });
});

// logout route
app.get('/logout', (req, res) => {
  res.clearCookie('token');
  return res.json({ Status: "Success", Message: "Logged out successfully" });
});

// start server
app.listen(8081, () => {
    console.log("Server running on port 8081");
});
