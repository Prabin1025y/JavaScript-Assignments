const fname = prompt("Enter your first name");
const lname = prompt("Enter your last name");

const greetingText = document.querySelector("#greetingText");

if (fname == "" && lname == "") 
  greetingText.innerHTML = `Hello, Stranger!`;
else if(fname != "" && lname != "")
  greetingText.innerHTML = `Hello, ${fname} ${lname}!`;
else
    greetingText.innerHTML = `Hello, ${fname == "" ? lname : fname}!`;