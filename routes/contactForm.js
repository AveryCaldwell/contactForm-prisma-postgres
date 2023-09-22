const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const router = express.Router();

// Handle POST request for the contact form
router.post("/submit", async (req, res) => {
	try {
		// Access the form data from the request body
		const { name, email, message } = req.body;

		// Validate the form data (add your validation logic here)
		if (!name || !email || !message) {
			return res.status(400).json({ error: "All fields are required" });
		}

		// Create a new contact form submission in the database using Prisma
		const submission = await prisma.contactFormSubmission.create({
			data: {
				name,
				email,
				message,
			},
		});

		// Send a success response
		res.status(201).json({
			message: "Form submitted successfully",
			submission,
		});
	} catch (error) {
		console.error("Error handling contact form submission:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

module.exports = router;

// app.post(`/contact/submit`, async (req, res) => {
// 	try {
// 		const { name, email, message } = req.body;

// 		if (!name || !email || !message) {
// 			return res.status(400).json({ error: "All fields are required" });
// 		}
// 		// Create a new contact form submission in the database using Prisma
// 		const submission = await prisma.contactFormSubmission.create({
// 			data: {
// 				name,
// 				email,
// 				message,
// 			},
// 		});

// 		// Send a success response
// 		res.status(201).json({
// 			message: "Form submitted successfully",
// 			submission,
// 		});
// 	} catch (error) {
// 		console.error("Error handling contact form submission:", error);
// 		res.status(500).json({ error: "Internal Server Error" });
// 	}
// });
