function getElement(elem) {
    return document.getElementById(elem);
}

function clearLog() {
    getElement("jsLog").innerHTML = "";
}

function isLeapYear(year) {
    console.log('hi isLeapYear');
    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
}
function countLeapYears(year) {
    let l = 0;

    for (let i = new Date().getFullYear(); i <= year; i++) {
        if (isLeapYear(year)) {
            l++;
            console.log('hi countLeapYear');
        }
    }

    console.log(l);
    return l;
}
function countAge(day, month, year) {
    let oneDay = (1000 * 60 * 60 * 24);
    const dayMilliseconds = 86400000;
    let leapYears = countLeapYears(year);
    if (isLeapYear(year)) {
        return Math.round((new Date() - new Date(year, month - 1, day) + leapYears*dayMilliseconds) / oneDay);
    }else {
        return Math.round((new Date() - new Date(year, month - 1, day)) / oneDay);
    }
}

function calculateDistance(x, y) {
    return (Math.round(Math.sqrt((x * x) + (y * y))));
}

function insertStylesheet(target, styleName) {
    target.insertAdjacentHTML('afterbegin', "<link rel='stylesheet' " +
        "type='text/css' href='resources/css/" + styleName + "'>");
}

function colorInTable(holder, matrix, td) {
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i] === 0) {
            td[i].setAttribute('class', 'r1');
        } else if (matrix[i] === 1) {
            td[i].setAttribute('class', 'r2');
        }else{
            td[i].setAttribute('class', 'r3');
        }
    }
}

function completeTask01() {
    const surname = prompt("Enter your name", "0");
    const gender = prompt("Enter your gender", "0");
    const age = prompt("Enter your age", "0");

    const result = confirm("SURNAME: " + surname +
        "\n" + "GENDER: " + gender +
        "\n" + "AGE: " + age +
        "\nRight?");

    if (!result) {
        alert("Something went wrong...");
    } else {
        alert("Awesome!");
    }
}

function completeTask02() {
    const num01 = prompt("Enter first number", "0");
    let x = parseInt(num01);
    const num02 = prompt("Enter second number", "0");
    let y = parseInt(num02);
    const str = prompt("Enter operation symbol", "0");
    const opera = ['+', '-', '*', '/'];

    if (opera.includes(str)) {
        if (str === "+") {
            alert(x + y);
        } else if (str === "*") {
            alert(x * y);
        } else if (str === "-") {
            alert(x - y);
        } else if (str === "/") {
            if (y === "0") alert("Cannot divide by ZERO ;)"); else alert(x / y);
        }
    } else {
        alert("Wrong symbol");
    }
}

function completeTask03() {
    let demo = getElement("jsLog");
    clearLog();

    let matrix_cross = [
        0, 0, 0, 0, 1, 1, 0, 0, 0, 0,
        0, 0, 0, 0, 1, 1, 0, 0, 0, 0,
        0, 0, 0, 0, 1, 1, 0, 0, 0, 0,
        0, 0, 0, 0, 1, 1, 0, 0, 0, 0,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        0, 0, 0, 0, 1, 1, 0, 0, 0, 0,
        0, 0, 0, 0, 1, 1, 0, 0, 0, 0,
        0, 0, 0, 0, 1, 1, 0, 0, 0, 0,
        0, 0, 0, 0, 1, 1, 0, 0, 0, 0
    ];
    let matrix_triangle = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
        0, 0, 0, 0, 0, 0, 0, 0, 2, 1,
        0, 0, 0, 0, 0, 0, 0, 2, 1, 1,
        0, 0, 0, 0, 0, 0, 2, 1, 1, 1,
        0, 0, 0, 0, 0, 2, 1, 1, 1, 1,
        0, 0, 0, 0, 2, 1, 1, 1, 1, 1,
        0, 0, 0, 2, 1, 1, 1, 1, 1, 1,
        0, 0, 2, 1, 1, 1, 1, 1, 1, 1,
        0, 2, 1, 1, 1, 1, 1, 1, 1, 1,
        2, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ];
    insertStylesheet(demo, "task03/colored-table.css");
    demo.insertAdjacentHTML('beforeend', "<table id='task03table'>");
    let tskTable = getElement("task03table");

    for (let i = 0; i < matrix_cross.length; i++) {
        let tr = document.createElement('tr');
        let td = document.createElement('td');

        if (i % 10 === 0) {
            tskTable.appendChild(tr);
        }
        for (let j = 0; j < matrix_cross.length / 10; j++) {
            tr.appendChild(td.cloneNode(true));
        }
    }

    colorInTable(null, matrix_triangle, document.getElementsByTagName('td'));
}

function completeTask04() {
    const arrayDays = ["Sunday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const arrayMonths = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    let date;
    date = new Date();

    const demo = getElement("jsLog");
    demo.innerHTML = "Today is " + arrayDays[date.getDay() - 1] + " "
        + date.getDate() + " of " + arrayMonths[date.getMonth()] + ", " + date.getFullYear();
}

function completeTask05() {
    //разобраться с 1970 годом
    const dayOfBirth = prompt("Enter your day of birth", "0");
    const monthOfBirth = prompt("Enter your month of birth", "0");
    const yearOfBirth = prompt("Enter your year of birth", "0");

    const demo = getElement("jsLog");

    demo.innerHTML = "Im alive for " + countAge(dayOfBirth, monthOfBirth, yearOfBirth) + " days";
}

function completeTask06() {
    clearLog();
    const demo = getElement("jsLog");

    insertStylesheet(demo, "task06/input-forms.css");
    demo.insertAdjacentHTML('beforeend', "<div id='task06container'>");

    const tskCont = getElement("task06container");
    const elemX = document.createElement("input");
    const elemY = document.createElement("input");
    const calculate = document.createElement("button");
    let t = document.createTextNode("Calculate");
    calculate.appendChild(t);

    tskCont.insertAdjacentHTML('beforeend', "<p>Enter x:</p>");
    tskCont.appendChild(elemX);
    tskCont.insertAdjacentHTML('beforeend', "<p>Enter y:</p>");
    tskCont.appendChild(elemY);

    calculate.setAttribute("class", "btnCalc");
    tskCont.appendChild(calculate);
    calculate.addEventListener("click", function () {
        t.nodeValue = calculateDistance(elemX.value, elemY.value);
    });

}

function completeTask07() {
    clearLog();

    const demo = getElement("jsLog");

    insertStylesheet(demo, "/task07/input-forms.css");
    demo.insertAdjacentHTML('beforeend', "<div id='task07container'>");

    const tskCont = getElement("task07container");

    let button_generate = document.createElement("button");

    const filler = [
        "Surname", "Name", "Patronym", "Year of Birth",
        "Place of Birth", "Favorite activity", "Least favorite activity"
    ];
    let inputFields = [];
    inputFields.length = 6;

    for (let i = 0; i < filler.length; i++) {
        tskCont.insertAdjacentHTML('beforeend', "<p>" + filler[i] + "</p>");
        inputFields[i] = document.createElement("input");
        tskCont.appendChild(inputFields[i]);
    }
    tskCont.appendChild(button_generate);
    button_generate.addEventListener("click", function () {
        var win = window.open();
        win.document.write("My name is " + inputFields[0].value + " " + inputFields[1].value + " " + inputFields[2].value
            + ". I was born in " + inputFields[3].value + ", " + inputFields[4].value + ". My favorite thing to do is "
            + inputFields[5].value + ". My least favorite thing to do is " + inputFields[6].value);
    });
}
