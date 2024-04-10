import { setSuccess,seterror,validateEmail } from "./errorMessage.js";
const loginForm=document.getElementById('login');
const Email=document.getElementById('Email');
const password=document.getElementById('password');

//validating form input start
function validateInputs(){
    const emailValue=Email.value.trim();
    const passwordValue=password.value.trim();
    let Success=true;

    if(emailValue===''){
        Success=false;
        seterror(Email,'Email is requied');
    }
    else if(!validateEmail(emailValue)){
        Success=false;
        seterror(Email,'Enter correct email format');
    }
    
    else{
        setSuccess(Email);
    }
    if(passwordValue===''){
        Success=false;
        seterror(password,'Password is requied');
    }
    else if(emailValue!='vinoth@gmail.com' || passwordValue!="12345"){
        Success=false;
        seterror(password,'Password does not match')
    }
    else {
        setSuccess(password)
        alert('login success')
        window.location.href='../html/home.html';
        return false; // Add return false, because submitting a form will refresh your page return false will keep the page static and your window.location.href will redirect your page.
    }
   
  
   
    return Success;
   
}
//validating form input end



// submit for start
loginForm.addEventListener('submit',function(e){
   
    if(!validateInputs()){
        e.preventDefault();
        
    }
   
   
});
// submit for end