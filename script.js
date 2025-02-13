// question 1
let form = document.querySelector("#form-age");
let input = document.querySelector(".input-field");
let msgParagraph = document.getElementById("show-age");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent default behavior of the browser from automatically submitting the form
    let age = input.value; // updating the value of the input field with the new one
    if (age <= 0) {
        msgParagraph.innerText = "Age should be 1 or greater";
    } else {
        let ageInDays = age * 365;
        msgParagraph.innerText = `Your age in days is: ${ageInDays}`;
    }
});


// question 2
let formTime = document.querySelector("#form-time");
let timeInput = document.getElementById("time");
let paragraph = document.getElementById("msg-container");

formTime.addEventListener("submit", (e) => {
    e.preventDefault();
    let time = timeInput.value; // updating input value
    let timeInSec = time * 60 * 60;
    paragraph.innerText = `${timeInput.value} hours makes ${timeInSec} seconds`;
});

// question 3
let showNum = document.getElementById("msg-num");
let showArr = document.getElementById("msg-arr");

function findNextNum() {
    let userInput = document.getElementById("numberInput").value;
    let number = parseFloat(userInput);

    if (isNaN(number)) {
        showNum.innerText = `please enter a valid number`;
    }
    else if (Number.isInteger(number)) {
        let nextNum = number + 1;
        showNum.innerText = `the number next to ${number} is ${nextNum}`;
    } else {
        let nextNum = number + 0.1;
        showNum.innerText = `the number next to ${number} is ${nextNum.toFixed(1)}`;
    }
}

function findNextArrElem() {
    let userInput = document.getElementById("arrayInput").value;
    let arr = userInput.split(",");  // splitting the user elem into array by ","

    let newArr = arr.map((elem) => {
        return parseFloat(elem);
    });

    showArr.innerText = `The next element is ${newArr[newArr.length - 1] + 1}`;
}

// question 4
let nameForm = document.getElementById("name");
let inputName = document.getElementById("username");
let p = document.getElementById("show-name");
nameForm.addEventListener("submit", (e) => {
    e.preventDefault();
    p.innerText = inputName.value;
    p.style.textTransform = "capitalize";
});

// question 5
let bmiForm = document.querySelectorAll(".bmi-form");
let button = document.getElementById("calculate-btn");
let weight = document.getElementById("weight");
let heightFeet = document.getElementById("height-feet");
let heightInches = document.getElementById("height-inches");
let msgP = document.querySelector(".msg-p");

const calculateBMI = (weightInKg, heightInMeters) => {
    let BMI = weightInKg / (heightInMeters * heightInMeters);
    return BMI.toFixed(1);
};
const showResult = (totalBMI) => {
    msgP.innerText = `BMI: ${totalBMI}`;

    if (totalBMI <= 18.4) {
        msgP.innerText += ` underweight`;
    } else if (totalBMI >= 18.5 && totalBMI <= 24.9) {
        msgP.innerText += ` Normal`;
    } else if (totalBMI >= 25.0 && totalBMI <= 39.9) {
        msgP.innerText += ` overweight`;
    } else {
        msgP.innerText += ` Obese`;
    }
};
bmiForm.forEach((form) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let weightInKg = weight.value.toString();
        let height = heightFeet.value + "." + heightInches.value;
        let heightInMeters = (height / 3).toFixed(2);

        showResult(calculateBMI(weightInKg, heightInMeters)); // call back function
    });
});

// question 6

function showFirstAndLast() {
    let userInput = document.getElementById("arrInput").value;
    let elemParagraph = document.getElementById("elem-para");

    let arr = userInput.split(",");

    let newArr = arr.map((elem) => {
        return parseFloat(elem);
    });

    elemParagraph.innerText = `First element ${newArr[0]} and last element is ${newArr[newArr.length - 1]}`;
}


// question 7
let firstNum = document.getElementById("f-number");
let secondNum = document.getElementById("s-number");
let result = document.getElementById("result");

const updateResult = () => {
    let num1 = parseFloat(firstNum.value);
    let num2 = parseFloat(secondNum.value);

    if (isNaN(num1)) {
        result.value = NaN;
    } else if (isNaN(num2)) {
        result.value = NaN;
    } else {
        let r = num1 + num2;
        result.value = r;
    }
};

firstNum.addEventListener("input", updateResult);
secondNum.addEventListener("input", updateResult);