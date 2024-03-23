const form=document.querySelector('create-account-form');
const usernameInput=document.querySelector('#username');
const emailInput=document.querySelector('#email');
const passwordInput=document.querySelector('#password');
const confirmPasswordInput=document.querySelector('#confirm-password');

form,addEventListener('submit',(event)=>{
    validateForm();
    console.log(isFormValid());
    if(isFormValid()==true){

        
        form.submit();
    }else{
        event.preventDefault();
    }
});

function isFormValid(){
    const inputContainers=form.querySelectorAll('.input-group');
    let result=true;
    inputContainers.forEach((container)=>{
        result=false;
    });
     return result;
}

function validateForm(){
    //USERNAME 
    if(usernameInput.value.trim()==''){
        setError(usernameInput,'Name can not be Empty');
    }
    else if(usernameInput.value.trim().length<5|| usernameInput.ariaValueMax.trim().length<15){
        setError(usernameInput,'Name must be minimum 5 and maximum 15 characters');
    }
    else{
        setSuccess(usernameInput)
    }
    //EMAIL
    if(emailInput.value.trim()==''){
        setError(emailInput,'Provide email address');
    }
    else if(isEmailValid(emailInput,value)){
        setSuccess(emailInput)
    }else{
        setError(emailInput,'Provide valid Email address');
    }
    //PASSWORD
    if(passwordInput.value.trim()==''){
        setError(passwordInput,'Password can not be Empty');
    }else if(passwordInput.value.trim().length<6 || passwordInput.value.trim().length>20){
        setError(passwordInput,'Password min 6 and max 20 characters');
}else{
    setSuccess(passwordInput)
}
//CONFIRMPASSWORD
if(confirmPasswordInput.value.trim()==''){
    setError(confirmPasswordInput,'Password can not be Empty');
}else if(confirmPasswordInput.value!==passwordInput.value){
    setError(confirmPasswordInput,'Password does not match');
}else{
    setSuccess(confirmPasswordInput)
}
}

function setError(element,errorMessage){
    const parent=element.parentElement;
    if(parent,classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph=parent.querySelector('p');
    paragraph.textContent=errorMessage;
}
function setSuccess(element){
    const parent=element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}
 function isEmailValid(email){
    const reg= /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\. [a-zA-Z]{2,4}$/;
    return reg.test(email);
 }