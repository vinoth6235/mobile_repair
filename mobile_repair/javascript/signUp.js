import { seterror,setSuccess ,validateEmail} from "./errorMessage.js";//get function from errormessage.js
const fname=document.getElementById('fullname');
const email=document.getElementById('Email');
const password=document.getElementById('password');
const confirmpassword=document.getElementById('confirmpassword');
const signUpForm=document.getElementById('signup');

function signUpFormValidation(){
    const username=fname.value.trim();
    const userEmail=email.value.trim();
    const userpassword=password.value.trim();
    const userConfirmpassword=confirmpassword.value.trim();
    let Success=true;
    if(username===''){
        seterror(fname,'Fullname is requird');
        Success=false;
    }
    else{
        setSuccess(fname);
    }

    if(userEmail===''){
        seterror(email,'Email is requird');
        Success=false;
    }
    else if (!validateEmail(userEmail)){
        seterror(email,'Please Enter valid Email');
        Success=false;
    }
    else{
        setSuccess(email); 
    }

    if(userpassword===''){
        seterror(password,'Password is requird');
        Success=false;
    }
    else{
        setSuccess(password);
    }

    if(userConfirmpassword===''){
        seterror(confirmpassword,'Confirm Password is requird');
        Success=false;
    }
    else if(userConfirmpassword!=userpassword){
        seterror(confirmpassword,'confirm Password does not match');
        Success=false;
    }
    else{
        setSuccess(confirmpassword);
        alert('User account created successfully')
        window.location.href='../html/signin.html';
    }

}
signUpForm.addEventListener('submit',function(e){
    if(!signUpFormValidation()){
        e.preventDefault();
        
    }
})

