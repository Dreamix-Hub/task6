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
let forms = document.querySelectorAll("form");
let actualNo = document.querySelector("#actualNo");
let noToFind = document.querySelector("#noToFind");
let msgPara = document.getElementById("msg");

const findNext = (number, target) => {
    for (let i = 0; i < number.length; i++) {
        if (target == number[i]) {
            if (target == number[number.length - 1]) {
                msgPara.innerText = `You entered last digit. No number next!`;
            }
            else {
                msgPara.innerText = `Number next to the ${number[i]} is ${number[i + 1]
                    }`;
                break;
            }
        }
    }
};

forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let number = actualNo.value.toString(); // converting number to the string to make it iterable
        let target = noToFind.value.toString();
        findNext(number, target[0]); // only one number is used as target, even if user enter large number
    });
});


// question 4
let p = document.getElementById("show-name");
let name = prompt("Enter your name: ");
p.innerText = name;
p.style.textTransform = "capitalize";

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
let arr = [33, 4, 5, 2, 63, 25, 234];
let arrParagraph = document.getElementById("arr-para");
let elemParagraph = document.getElementById("elem-para");

for (const elem of arr) {
    arrParagraph.innerText += ` ${elem}`;
}

function showFirstAndLast(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            elemParagraph.innerText = `first element: ${arr[i]}`;
        } else if (i == arr.length - 1) {
            elemParagraph.innerText = elemParagraph.innerText.concat(
                ` and last element: ${arr[i]}`
            );
        }
    }
}
showFirstAndLast(arr);

// question 7
let firstNum = document.getElementById("f-number");
let secondNum = document.getElementById("s-number");
let result = document.getElementById("result");

const updateResult = () => {
    let num1 = parseFloat(firstNum.value);
    let num2 = parseFloat(secondNum.value);

    if (isNaN(num1)) {
        result.value = "NaN";
    } else if (isNaN(num2)) {
        result.value = "NaN";
    } else {
        let r = num1 + num2;
        result.value = r;
    }
};

firstNum.addEventListener("input", updateResult);
secondNum.addEventListener("input", updateResult);