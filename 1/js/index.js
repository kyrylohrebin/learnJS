let askName;
let message;

askName = prompt("What is your name?");

if (askName == null || askName == "") {
  message = `You entered nothing`;
} else message = `Hello ${askName}`;
alert(message);