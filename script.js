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
			.then((response) => response.json())
			.then((data) => {
				if (data.message) {
					responseDiv.textContent = data.message;
					contactForm.reset();
				} else {
					responseDiv.textContent = "Error submitting the form.";
				}
			})
			.catch((error) => {
				console.error("Error:", error);
				responseDiv.textContent =
					"An error occurred while submitting the form.";
			});
	});
});
