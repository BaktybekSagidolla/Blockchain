const express = require("express");
const path = require("path");
const axios = require('axios');
const app = express();
const session = require("express-session");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../Voting-dapp-main/frontend')));
const templatePath = path.join(__dirname, '../Voting-dapp-main/views');
const publicPath = path.join(__dirname, '../Voting-dapp-main/frontend');
app.set("view engine", "ejs");
app.set('views', templatePath);



app.get("/", (req, res) => {
    res.render("login");
});
app.get("/admin", (req, res) => {
    // Check if the session exists and user is authenticated before rendering the index page

        res.render("admin");


});

app.get("/signup", (req, res) => {
    res.render("signup");
});
app.use(session({
    secret: 'shymkent',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set secure to false if not using HTTPS
}));
app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const isAdmin = (username.toLowerCase() === 'yersultan');

    // Simulate storing user information in session
    req.session.user = {
        name: username,
        isAdmin: isAdmin
    };

    // Redirect based on admin status
    if (isAdmin) {
        res.redirect("/admin");
    } else {
        res.redirect("/admin");
    }
});
app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const isAdmin = (username.toLowerCase() === 'yersultan');

    // Simulate checking user credentials
    if (isAdmin && password === '12345678') {
        // Simulate storing user information in session
        req.session.user = {
            name: username,
            isAdmin: isAdmin
        };

        // Redirect to the appropriate page based on admin status
        if (isAdmin) {
            res.redirect("/admin");
        } else {
            res.redirect("/");
        }

    } else {
        res.send("Invalid username or password");
    }
});


const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
