// varaiables
const heading = document.querySelector("#heading");
let firstName = document.querySelector("#FirstName");
let lastName = document.querySelector("#LastName");



// Functions 
lastName.oninput = function () {
    if (firstName.value === "Jack") {
        heading.innerHTML = "Welcome Jack!";
    } else if (firstName.value === "Larry") {
        heading.innerHTML = "You are not Jack.";
    }
    else {
        heading.innerHTML = "We'd love to hear your feedback.";
    }
}
