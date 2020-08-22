let enterTheNumber = prompt("Enter the number");
let message;

if (enterTheNumber != Number(enterTheNumber)) {
  message = "it is not a number!";
} else if (enterTheNumber > 0) {
  message = "Your number is bigger than 0!";
} else if (enterTheNumber < 0) {
  message = "Your number is less than 0!";
} else if (enterTheNumber == 0) {
  message = "Your number is 0!";
}
alert(message);
