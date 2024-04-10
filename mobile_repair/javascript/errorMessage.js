export function seterror(element,message){//expoet function for use same functionality to another js
    let inputGroup=element.parentElement;
    let errorElement=inputGroup.querySelector('.error');
    errorElement.innerHTML=message;
}
// show error message end

// show success message start
export function setSuccess(element){//expoet function for use same functionality to another js
    let inputGroup=element.parentElement;
    let errorElement=inputGroup.querySelector('.error');
    errorElement.innerHTML='';
}

// check email fomat start
export const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  // check email fomat end
  export const validatepassword = (password) => {
    return String(password)
      .match(
         /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/
      );
  };