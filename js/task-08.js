const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  console.log(email.value, password.value);
  if (!email.value || !password.value) {
    return alert("Fill in all fields");
  }
  const formData = {
    email: email.value,
    password: password.value,
  };
  console.log(formData);
  event.currentTarget.reset();
});
