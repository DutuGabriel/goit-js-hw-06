const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;

  if (!email || !password) {
    alert("Toate campurile sunt completate.");
    return;
  }

  const data = {
    email: email,
    password: password,
  };

  console.log(data);
  loginForm.reset();
});
