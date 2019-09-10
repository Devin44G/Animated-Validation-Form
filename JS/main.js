/*jshint esversion:6*/
//Progress bar by incremented counter?

function formAnimation() {
  const arrows = document.querySelectorAll('.fa-arrow-circle-down'); // Selecting ALL arrow logos
  arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      const input = arrow.previousElementSibling; //checking current input
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;

      // Validating
      if (input.type == "text" && userValid(input)) {
        nextField(parent, nextForm);
      }

      else if (input.type === 'email' && emailValid(input)) {
        nextField(parent, nextForm);
      }

      else if (input.type === 'password' && passwordValid(input)) {
        nextField(parent, nextForm);
      }

      else {
        parent.style.animation = "shake 0.5s ease";
      }
      // End shake
      parent.addEventListener('animationend', () => {
        parent.style.animation = '';
      });
    });
  });
}

function userValid(user) {
  if (user.value.length < 1) {
    document.getElementById('error-message-name').innerHTML="This field is required";
    error('#da3434');
    setTimeout(() => {document.getElementById('error-message-name').innerHTML='';}, 5000);
  }

  else {
    notError('#36dd4c');
    return true;
  }
}

function emailValid(email) {
  const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(validation.test(email.value)) {
    notError('#36dd4c');
    return true;
  }

  else {
    document.getElementById('error-message-email').innerHTML="Uh-oh, that's not a valid email";
    error('#da3434');
    setTimeout(() => {document.getElementById('error-message-email').innerHTML='';}, 5000);
  }
}

function passwordValid(password) {
  const validation2 = /(?=.*\d.*)(?=.*[a-zA-Z].*)(?=.*[!#\$%&\?].*).{6,20}/;

  if (validation2.test(password.value)) {
    notError('#36dd4c');
    return true;
  }

  else {
    $('#error-message-password').show();
    error('#da3434');
    setTimeout(function() {
      $('#error-message-password').css('opacity', '0');
    }, 5000);
  }
}

function nextField(parent, nextForm) {
  parent.classList.add('inactive'); // Go out
  parent.classList.remove('active');
  nextForm.classList.add('active'); // Come in
}

function error(color) {
  document.body.style.backgroundColor = color;
}

function notError(color) {
  document.body.style.backgroundColor = color;
}

formAnimation();
