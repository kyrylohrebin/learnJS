let login = prompt("Enter your login");
let password;
let message;

if (login === "Admin") {
  password = prompt("Enter password");

  if (password === "The main") {
    message = "Hello!";
  } else if (password === null || password === "") {
    message = "Declined by user";
  } else message = "Wrong password";
} 
else if (login === null || login === "") {
  message = "Declined by user";
} else message = "I don't know you";

alert(message);
