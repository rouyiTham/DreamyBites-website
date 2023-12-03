const contactUs =document.querySelector("[data-open-modal]")
const closeButton =document.querySelector("[data-close-modal]")
const modal=document.querySelector("[data-modal]")

contactUs.addEventListener("click", () => {
    modal.showModal()
})

closeButton.addEventListener("click", () => {
    modal.close()
})

function message(){
    var Name=document.getElementById('name');
    var email=document.getElementById('email');
    var message=document.getElementById('message');

    const success = document.getElementById("success");
    const warning = document.getElementById("warning");

    if(Name.value === ''|| email.value === ''|| message.value === ''){
        warning.style.display='block';
        success.style.display='none';
    }
    else{
        setTimeout(() => {
            Name.value='';
            email.value='';
            message.value='';
        },900);

        success.style.display='block';
        warning.style.display='none';
    }
}

const wrap = document.querySelector('.wrap');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.log_in');
const close = document.querySelector('.close');

registerLink.addEventListener('click', ()=> {
    wrap.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrap.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrap.classList.add('active-popup');
});

close.addEventListener('click', ()=> {
    wrap.classList.remove('active-popup');
});

const login =document.querySelector("[login-open-modal]")
const loginCloseButton =document.querySelector("[login-close-modal]")
const loginModal=document.querySelector("[login-modal]")

login.addEventListener("click", () => {
    loginModal.showModal()
})

loginCloseButton.addEventListener("click", () => {
    loginModal.close()
})


// Global variable to track login status
let isLoggedIn = false;


// Function to handle successful login
function handleLoginSuccess() {
  isLoggedIn = true;
  const loginLink = document.querySelector('.log_in');
  const logoutbtn=document.querySelector('#logout');
  loginModal.close();
  if (isLoggedIn) {
    loginLink.style.display='none';
    logoutbtn.style.display='block';
    logoutbtn.addEventListener("click",()=>{
        window.location.replace("home.html")
      })  }
    }
    
// Add an event listener to the login form submit button
const loginForm = document.querySelector('.form-box.login form');
loginForm.addEventListener('submit', (event) => {   // Prevent the form from submitting and refreshing the page
  event.preventDefault();

  const emailInput = loginForm.querySelector('input[type="email"]');
  const passwordInput = loginForm.querySelector('input[type="password"]');
  if (emailInput.value !== '' && passwordInput.value !== '') {
    handleLoginSuccess();
  } });

const registerForm = document.querySelector('.form-box.register form');
const registerSuccessfulMsg = document.querySelector('.register_successful_msg');


registerForm.addEventListener("submit", (event) => {
    event.preventDefault(); 
    registerSuccessfulMsg.style.display = 'block';
});



