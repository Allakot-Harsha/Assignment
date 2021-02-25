const submitBtn = document.getElementById('submit');

const validate = (e) => {
  e.preventDefault();
  const fname = document.getElementById('fname');
  const lname = document.getElementById('lname');
  const emailAddress = document.getElementById('email');
  if (fname.value === "") {
    alert("Please enter your username.");
    username.focus();
    return false;
  }
  if (lname.value === "") {
    alert("Please enter your username.");
    username.focus();
    return false;
  }
    
  if (emailAddress.value === "") {
    alert("Please enter your email address.");
    emailAddress.focus();
    return false;
  }

  if (!emailIsValid(emailAddress.value)) {
    alert("Please enter a valid email address.");
    emailAddress.focus();
    return false;
  }
  
  return true;
}

const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
}

submitBtn.addEventListener('click', validate);
