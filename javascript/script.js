function setGreeting() {
    let now = new Date(); //built in class in Javascript 

    let hours = now.getHours();
    console.log("I am printing time: " + hours);
    let greeting = "";

    //Good morning < 12
    if (hours < 12) {
        greeting = "Good morning!";
    }
    //Good afternoon < 6
    else if (hours < 18) {
        greeting = "Good Afternoon";
    }
    //Good night otherwise
    else {
        greeting = "Good Night!";
    }

    console.log(greeting);
    document.getElementById("greetingOutput").textContent = greeting;
}

window.onload = function () {
    setGreeting();

}

function setButtonText(){
    document.getElementById("buttonClickText").textContent = "Hello World";
}

function setButtonDate(){
    let now = new Date();
    document.getElementById("buttonClickDate").textContent = now.toLocaleDateString();

}

function addNumbers(){
    let num1 = parseInt(document.getElementById("number1").value);
    let num2 = parseInt(document.getElementById("number2").value);
    let result = num1 + num2;
    document.getElementById("Sum").textContent = result;
}
