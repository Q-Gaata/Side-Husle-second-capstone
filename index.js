const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#id_password');
 
  togglePassword.addEventListener('click', function (e) {
    
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    
    this.classList.toggle('fa-eye-slash');
});


function validateForm() {
    let x = document.forms["myForm"]["usrn", "email", "number", "gender", "pswrd"].value;
    if (x === "") {
      alert("Form must be filled out");
      
    } 
  }

  const menuBtn = document.querySelector("#menu-btn");
  const navBar = document.querySelector("ul");

  menuBtn.addEventListener('click', () => {
      navBar.style.display = 'block';
  })