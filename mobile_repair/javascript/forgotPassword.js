import{setSuccess,seterror,validateEmail} from './errorMessage.js'
const email=document.getElementById('Email');
const forgotPassword=document.getElementById('forgotPasswordForm');
function forgotPasswordValidation(){
    const userEmail=email.value.trim();
    if(userEmail===''){
        seterror(email,'Email is required');
    }
    else if(!validateEmail(userEmail)){
        seterror(email,'Please Enater valid Email format');
    }
    else{
        setSuccess(email);
        alert('New password send to user Email')
        window.location.href='../html/signin.html'
    }
}
forgotPassword.addEventListener('submit',function(e){
    e.preventDefault();
    forgotPasswordValidation();
})