var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "user" && password == "user"){
alert ("Login success");
window.location = "https://www.arnflo.se"; // Redirecting to other page.
return true;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").enabled = true ;
document.getElementById("password").enabled = true;
document.getElementById("submit").enabled = true;
return true;
}
}
}
