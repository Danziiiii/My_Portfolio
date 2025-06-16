document.addEventListener("DOMContentLoaded", function () {
  console.log("Script loaded and DOM is ready"); // Add this
  const form = document.getElementById("signupForm");

  if (!form) {
    console.error("Form not found");
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const termsAccepted = document.getElementById("terms").checked;
    if (!termsAccepted) {
      alert("You must accept the terms and conditions.");
      return;
    }

    alert("Signed Up Successfully");
    form.reset();
  });
});
