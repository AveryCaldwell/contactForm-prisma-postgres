document.addEventListener("DOMContentLoaded", function () {
	const contactForm = document.getElementById("contact-form");
	const responseDiv = document.getElementById("response");

	contactForm.addEventListener("submit", function (e) {
		e.preventDefault();

		const formData = new FormData(contactForm);

		fetch("/contact/submit", {
			method: "POST",
			body: formData,
		})
			.then((response) => {
				console.log("Response status:", response);
				// return response.json();
			})
			.then((data) => {
				console.log("Data received:", data);

				if (data.message) {
					responseDiv.textContent = data.message;
					contactForm.reset();
				} else {
					responseDiv.textContent = "Error submitting the form.";
				}
			})
			.catch((error) => {
				console.error("Fetch error:", error);
				responseDiv.textContent =
					"An error occurred while submitting the form.";
			});
	});
});
