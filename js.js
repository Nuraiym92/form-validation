const from=document.getElementById("form")
const username=document.getElementById("username")
const email=document.getElementById("email")
const password=document.getElementById("password")
const password2=document.getElementById("password2")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    checkInputs()
})

function checkInputs(){
    //get the values from inputs
   const usernameValue= username.value.trim()
   const emailValue=email.value.trim()
   const passwordValue= password.value.trim()
   const passwordValue2=password2.value.trim()

   if(usernameValue===''){
    //show error
    //add error class
    setErrorFor(username,"Username cannot be blank")
   }else{
    //add success class
    setSuccessFor(username)
   }

   if(emailValue===''){
    setErrorFor(email,"Email cannot be blank")
   }else if(!isEmail(emailValue)){
    setErrorFor(email,"Email is not valid")
   }else{
    setSuccessFor(email)
   }

   if(passwordValue===''){
    setErrorFor(password,"Password cannot be blank")
   }else{
    setSuccessFor(password)
   }
   if(passwordValue2===''){
    setErrorFor(password,"Password2 cannot be blank")
   }else if(passwordValue!==passwordValue2){
     setErrorFor(password2,"Password does not match")
   }else{
    setSuccessFor(password2)
   }
   
}

function setErrorFor(input,message){
    const formControl=input.parentElement;
    const small=formControl.querySelector("small")
    //add error message inside small
    small.innerText=message

    //add error class
    formControl.className="form-control error"
}

function setSuccessFor(input){
    const formControl=input.parentElement;
    formControl.className='form-control success'
}

function isEmail(email) {
  // Regular expression pattern for basic email validation
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}