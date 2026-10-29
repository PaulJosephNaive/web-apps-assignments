
//Runs automatically because of the window.onload line
function setGreeting() {
    //Date object (from built in class in Javascript) is assigned to the variable now to help with retrieving data about time + date
    let now = new Date(); //built in class in Javascript 

    //now is called to get the current hour of the person browsing the website. That is then assigned to the variable hours.
    let hours = now.getHours();
    console.log(now);
    console.log("I am printing time: " + hours);
    let greeting = "";

    //Depending on the hour (in military time), greeting is given either Good morning, Good afternoon, or good night
    if (hours < 12) {
        greeting = "Good morning!";
    }
    //Good afternoon < 6
    else if (hours < 18) {
        greeting = "Good Afternoon!";
    }
    //Good night otherwise
    else {
        greeting = "Good Night!";
    }

    //logging greeting for debugging purposes
    console.log(greeting);

    //The element with the id greetingOutput is given the string greeting
    document.getElementById("greetingOutput").textContent = greeting;
}

//This means when the window opens, the function setGreeting will run automatically.
window.onload = function () {
    setGreeting();

}

//When the setButtonText method is called, the empty div element with the id of "buttonClickText" will have the content "Hello World".
function setButtonText() {
    document.getElementById("buttonClickText").textContent = "Hello World";
}

//function is run when button in example 3 is clicked
function setButtonDate() {
    //A date object is assigned to the variable now to help with retrieving data about time + date
    let now = new Date();

    //div element with the id of "buttonClickDate" will have the content of the user's date and time
    document.getElementById("buttonClickDate").textContent = now.toLocaleDateString();

}

//function is run when button in example 4 is clicked
function addNumbers() {
    /*
    num 1 and num 2 are int variables found when parsing into integers the values in the text boxes with the IDs of "number1 and number2"/
    */
    let num1 = parseInt(document.getElementById("number1").value);
    let num2 = parseInt(document.getElementById("number2").value);

    //result is sum of num 1 + num 2
    let result = num1 + num2;

    //div element with ID of Sum is given the result variable
    document.getElementById("Sum").textContent = result;
}

//funciton is run when button in example #5 is clicked
function findLength() {

    /*
    finalnum is an int variable found by getting the length of input in the text field with the ID of "textField"
    */
    let finalnum = document.getElementById("textField").value.length;
    //logging for debugging purposes
    console.log(finalnum);

    /* Int variable result includes the exact text inputted in the text field and finalnum to display the length of the string.
    */
    let result = "\"" + document.getElementById("textField").value + "\"" + " has " + finalnum + " character(s)"

    //Div element with the ID of length is given the String variable result.
    document.getElementById("length").textContent = result;
}


//run when the example 6 checkbox is clicked
function showPassword() {

    //If it is checked or not checked, the input text box with the ID of passField will either be normal text or a password.
    if (passwordShow.checked) {
        passField.type = "text";
    }
    else {
        passField.type = "password";
    }
}

//Counter is set to 0. I used a counter to make the text changes reversible.
let counter = 0;

//Run when example 7's button is clicked.
function changeColor() {

    /* If counter is equal to 0, the div element with the ID of "color" will have a color of red and a size of 30px. Also ocunter turns to 1.
    */
    if (counter == 0) {
        document.getElementById("color").style.color = "red";
        document.getElementById("color").style.fontSize = "30px";
        counter = 1;
    }

    /* If counter is equal to 1, the div element with the ID of "color" will have a color of black and a size of 16px. Also ocunter turns to 0
    */
    else {
        document.getElementById("color").style.color = "black";
        document.getElementById("color").style.fontSize = "16px";
        counter = 0;
    }
}
//displayCounter is set to 0 and will be used to make the hide/appear function reversible
let displayCounter = 0;

//run when example 8's button is clicked/
function toggleDisplay() {
    /* If displayCounter is equal to 0, the div element with the ID of secret will be hidden from the client. Else, it will be visible to the client,
    */
    if (displayCounter == 0) {
        document.getElementById("secret").hidden = true;
        displayCounter = 1;
    }
    else {
        document.getElementById("secret").hidden = false;
        displayCounter = 0;
    }
}

