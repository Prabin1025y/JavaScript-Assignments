let person = {
    name: "Prabin Acharya",
    age: 20,
    address: "dharan-8, sunsari, Nepal"
};

let colors = ["red", "green", "blue"];

const { name, age, address } = person;
const [firstColor, secondColor] = colors;

const firstH1 = document.createElement("h1");
firstH1.innerHTML = `Name: ${name}, Age: ${age}, Address: ${address}`;

const secondH1 = document.createElement("h1");
secondH1.innerHTML = `First Color: ${firstColor}, Second Color: ${secondColor}`;

document.body.appendChild(firstH1);
document.body.appendChild(secondH1);