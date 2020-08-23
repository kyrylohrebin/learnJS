let browser = prompt("What is your browser?");
let message;

if (browser === "Edge") {
  message = "You've got the Edge!";
} else if (
  browser === "Chrome" ||
  browser === "Firefox" ||
  browser === "Safari" ||
  browser === "Safari"
) {
  message = "Okay we support these browsers too";
} else message = "We hope that this page looks ok!";

alert(message);
