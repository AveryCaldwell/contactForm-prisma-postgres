import express from "express";
import contactFormRoute from "./src/routes/contactForm";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Mount the contact form route
app.use("/contact", contactFormRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
