import express from "express";
import contactFormRoute from "./routes/contactForm.js";

import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// ... other middleware and configurations ...
const app = express();
app.use(express.json());
// Mount the contact form route
app.use("/contact", contactFormRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

export default router;
