import { setSuccess,seterror } from "./errorMessage.js";
const password=document.getElementById('password');
const confirmpassword=document.getElementById('confirmpassword');
const changePwdForm=document.getElementById('changepwd');
let Success=true;
function changePaswordvalidation(){
    const userPassword=password.value.trim();
    const userConfirmPassword=confirmpassword.value.trim();
    console.log(userPassword)
    if(userPassword===''){
        Success=false;
        seterror(password,'New  password is required');
    }
    // else if(!validatepassword(password)){
    //     seterror(password,'Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters')
    // }
    else{
        setSuccess(password)
    }
    if(userConfirmPassword===''){
        Success=false;
        seterror(confirmpassword,'  confirm password  is required');
    }
    else if(userConfirmPassword!=userPassword){
        Success=false;
        seterror(confirmpassword,'confirm password does not match')
    }
    else{
        setSuccess(confirmpassword)
        alert('Password updated Successfully');
        window.location.href='../html/signin.html';
    }
}
changePwdForm.addEventListener('submit',function(e){
    
    if(!changePaswordvalidation()){
        e.preventDefault();
    }
});