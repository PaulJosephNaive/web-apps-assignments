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

//This means when the window opens, the function setGreeting will run automatically.
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

function findLength(){
    let finalnum = document.getElementById("textField").value.length;
    console.log(finalnum);
    let result =  "\"" + document.getElementById("textField").value + "\"" + " has " + finalnum + " characters"
    document.getElementById("length").textContent = result;
}

function showPassword(){
    let status;
    let length;
    let final;
    let char = "*";
    if (passwordShow.checked){
        status = true; 
        console.log(status);
    }
    else{
        status = false;
        console.log(status);
    }
    if (!status)
    {
        length = document.getElementById("textField").value.length;
        final = char.repeat(length);
        document.getElementById("text").textContent = final;
    }
}
