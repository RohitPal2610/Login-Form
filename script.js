function validate()
{
  let firstname = document.getElementById("firstname").value;
  let lastname =document.getElementById("lastname").value;
  let email = document.getElementById("mail").value;
  let password =document.getElementById("password").value;
  if(firstname == "" || lastname == "" || email == "" ||password == "")
  {
        alert("Fill form properly");
        return false;
  }
  if(!email.includes('@'))
  {
        alert("Mail don't contain @ ");
        return false;
  }
  if(password.length<6)
  {
    alert("Password length less then 6 ");
    return false;
  }
  alert("submitted");
  document.getElementById("myForm").submit();
 
}