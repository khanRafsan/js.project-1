document.getElementById("login-submit").addEventListener("click",function(){
const email=document.getElementById("user-input")
const userEmail=email.value;
// email.innerText=email.value

//get user password
const password=document.getElementById("user-password")
const userPassword=password.value


if(userEmail=="khanrafsan815@gmail.com" &&userPassword=="hlwRafsan")
{
     window.location.href="index.html"
}
})




