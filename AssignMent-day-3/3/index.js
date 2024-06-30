const greetingText1 = document.getElementById("greetingText1");
const greetingText2 = document.getElementById("greetingText2");

const greeting = (greeting = "Welcome") => greeting;

greetingText1.innerHTML = greeting("Namaste");
greetingText2.innerHTML = greeting();