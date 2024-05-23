const email = document.getElementById("email");
const form = document.querySelector(".main-form");
const emailError = document.querySelector(".email-error");

email.addEventListener("input", () => {
	if (email.validity.valid) {
		emailError.textContent = "";
		emailError.className = "error";
	} else {
		showError();
	}
});

form.addEventListener("submit", (e) => {
	if (!email.validity.valid) {
		showError();
	}
	e.preventDefault();
});

function showError() {
	if (email.validity.valueMissing) {
		emailError.textContent = "Please enter an email address.";
	} else if (email.validity.typeMismatch) {
		emailError.textContent =
			"The value you entered is not a valid email address.";
	} else if (email.validity.tooShort) {
		emailError.textContent = `Email needs to be at least ${email.minLength} characters.`;
	}
	emailError.className = "error active";
}
