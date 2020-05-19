const form = document.querySelector('.form');
const email = document.getElementById('email');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValue = email.value;
  // check email
  if (validateEmail(emailValue)) {
    form.classList.remove('error');
    alert('Thank You!');
  } else {
    form.classList.add('error');
  }
});

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
