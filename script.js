const form = document.querySelector('form');

const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.error');
email.addEventListener('input', (event) => {
  if (email.validity.valid) {
    emailError.textContent = '';
    emailError.className = 'error';
  } else {
    showEmailError();
  }
});

const zip = document.getElementById('zip-code');
const zipError = document.querySelector('#zip-code + span.error');
zip.addEventListener('input', (event) => {
  if (zip.validity.valid) {
    zipError.textContent = '';
    zipError.className = 'error';
  } else {
    if (zip.validity.valueMissing) {
      zipError.textContent = 'You need to enter a zip code';
    }
  }
});

const password = document.getElementById('password');
const passwordError = document.querySelector('#password + span.error');
password.addEventListener('input', (event) => {
  if (password.validity.valid) {
    passwordError.textContent = '';
    passwordError.className = 'error';
  } else {
    showPasswordError();
  }
});

const confPass = document.getElementById('conf-pass');
const confPassError = document.querySelector('#conf-pass + span.error');
confPass.addEventListener('input', (event) => {
  let pass = password.value;
  let confirm = confPass.value;
  if (pass !== confirm) {
    alert('passwords do not match');
    confPassError.innerHTML = `The passwords do not match`;
  }
  if (confPass.validity.valid) {
    confPassError.textContent = '';
    confPassError.className = 'error';
  }
});

function showEmailError () {
  if (email.validity.valueMissing) {
    emailError.textContent = 'You need to enter an email address';
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Entered value needs to be an email address';
  }
  emailError.className = 'error active';
}

function showPasswordError () {
  if (password.validity.valid) {
    passwordError.textContent = '';
    passwordError.className = 'error';
  } else if (password.validity.tooShort) {
    passwordError.textContent = `Password should be at least ${password.minLength} characters, you entered ${password.value.length} chracters`;
  }
  passwordError.className = 'error active';
}
