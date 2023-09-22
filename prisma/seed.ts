// prisma/seed.ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
	try {
		// Create seed data with dummy contact information
		await prisma.contactFormSubmission.createMany({
			data: [
				{
					name: "John Doe",
					email: "johndoe@example.com",
					message: "This is a test message from John Doe.",
				},
				{
					name: "Alice Smith",
					email: "alicesmith@example.com",
					message: "Hello, this is Alice. Please contact me.",
				},
				{
					name: "Avery Bob",
					email: "averybob@example.com",
					message: "Hello, this is Avery. Please get this to work!",
				},
			],
		});

		console.log("Seed data inserted successfully");
	} catch (error) {
		console.error("Error seeding data:", error);
	} finally {
		await prisma.$disconnect();
	}
}

seed();
