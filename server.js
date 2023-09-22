const express = require("express");
const contactFormRoute = require("./routes/contactForm");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const port = process.env.PORT || 3000;

const app = express();
// Middleware to parse JSON data
app.use(express.json());

// Import and use the contact form route
app.use("/contact", contactFormRoute);

app.get("/", (req, res) => {
	res.send("Welcome to the contact form!");
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
