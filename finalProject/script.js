//  burger

function displayMenu() {
  let menuLinks = document.querySelector(".navLinks");

  if (menuLinks.style.display === "block") {
      menuLinks.style.display = "none";
  } else {
      menuLinks.style.display = "block";
  }
}


// subscription form - validation

let email = document.getElementById("email");
let form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let errors = {};

  let name = document.getElementById("name").value;

  if (name == "" || name.length < 3) {
    errors.name = "Name cannot be empty and must be more than 3 characters";
  }

  let emailValue = email.value;

  if (emailValue == "" || !isValidEmail(emailValue)) {
    errors.email = "Email is invalid";
  }

  let phone = document.getElementById("phone").value;

  if (phone == "" || phone.length < 9) {
    errors.phone = "Phone cannot be empty and must be equal to 9 characters";
  }

  document.querySelectorAll(".error-text").forEach((element) => {
    element.textContent = "";
  });

  for (let item in errors) {
    console.log(item);

    let errorText = document.getElementById("error-" + item);
    if (errorText) {
      errorText.innerText = errors[item];
    }
  }

  if (Object.keys(errors).length == 0) {
    form.submit();
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}