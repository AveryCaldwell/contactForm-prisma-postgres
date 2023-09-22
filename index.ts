import express from "express";
import contactFormRoute from "./src/routes/contactForm"; // Correct path

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON data
app.use(express());

// Import and use the contact form route
app.use("/contact", contactFormRoute);

// Mount the contact form route
app.use("/contact", contactFormRoute);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
