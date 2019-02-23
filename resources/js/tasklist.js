function getElement(elem) {
    return document.getElementById(elem);
}

function clearLog() {
    getElement("jsLog").innerHTML = "";
}

function precise(x) {
    return Number.parseFloat(x).toPrecision(3);
}

function countAge(day, month, year) {
    const oneDay = (1000 * 60 * 60 * 24);
    return precise(Math.abs((new Date() - new Date(year, month - 1, day))) / oneDay);
}

function calculateDistance(x, y) {
    return (precise(Math.sqrt((x * x) + (y * y))));
}

function insertStylesheet(target, styleName) {
    target.insertAdjacentHTML('afterbegin', "<link rel='stylesheet' " +
        "type='text/css' href='resources/css/" + styleName + "'>");
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
    const num02 = prompt("Enter secont number", "0");
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
    const demo = getElement("jsLog");
    clearLog();

    const rows = `<table>
					<tr> <td class='r1'></td> <td class='r1'></td> <td class='r2'></td> <td class='r1'></td> <td class='r1'></td> <td class='r1'></td> <td class='r2'></td> <td class='r1'></td> <td class='r1'></td> <td class='r1'></td></tr>
					<tr> <td class='r1'></td> <td class='r2'></td> <td class='r1'></td> <td class='r1'></td> <td class='r1'></td> <td class='r2'></td> <td class='r1'></td> <td class='r1'></td> <td class='r1'></td> <td class='r2'></td></tr>
					<tr> <td class='r2'></td> <td class='r1'></td> <td class='r1'></td> <td class='r1'></td> <td class='r2'></td> <td class='r1'></td> <td class='r1'></td> <td class='r1'></td> <td class='r2'></td> <td class='r1'></td></tr>
					<tr> <td class='r1'></td> <td class='r1'></td> <td class='r1'></td> <td class='r2'></td> <td class='r1'></td> <td class='r1'></td> <td class='r1'></td> <td class='r2'></td> <td class='r1'></td> <td class='r1'></td></tr>
					<tr> <td class='r1'></td> <td class='r1'></td> <td class='r2'></td> <td class='r1'></td> <td class='r1'></td> <td class='r1'></td> <td class='r2'></td> <td class='r1'></td> <td class='r1'></td> <td class='r1'></td></tr>
					<tr> <td class='r1'></td> <td class='r2'></td> <td class='r1'></td> <td class='r1'></td> <td class='r1'></td> <td class='r2'></td> <td class='r1'></td> <td class='r1'></td> <td class='r1'></td> <td class='r2'></td></tr>
					<tr> <td class='r2'></td> <td class='r1'></td> <td class='r1'></td> <td class='r1'></td> <td class='r2'></td> <td class='r1'></td> <td class='r1'></td> <td class='r1'></td> <td class='r2'></td> <td class='r1'></td></tr>
					<tr> <td class='r1'></td> <td class='r1'></td> <td class='r1'></td> <td class='r2'></td> <td class='r1'></td> <td class='r1'></td> <td class='r1'></td> <td class='r2'></td> <td class='r1'></td> <td class='r1'></td></tr>
					<tr> <td class='r1'></td> <td class='r1'></td> <td class='r2'></td> <td class='r1'></td> <td class='r1'></td> <td class='r1'></td> <td class='r2'></td> <td class='r1'></td> <td class='r1'></td> <td class='r1'></td></tr>
					<tr> <td class='r1'></td> <td class='r2'></td> <td class='r1'></td> <td class='r1'></td> <td class='r1'></td> <td class='r2'></td> <td class='r1'></td> <td class='r1'></td> <td class='r1'></td> <td class='r2'></td></tr>
				 </table>`;
    insertStylesheet(demo, "task03/colored-table.css");
    demo.insertAdjacentHTML('beforeend', rows);
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
    tskCont.insertAdjacentHTML('beforeend', "<div id='leftCol'>");
    const lCol = getElement("leftCol");
    tskCont.insertAdjacentHTML('beforeend', "<div id='rightCol'>");
    const rCol = getElement("rightCol");

    const filler = [
        "Surname", "Name", "Patronym", "Year of Birth",
        "Place of Birth", "Favorite activity", "Least favorite activity"
    ];
    let inputFields = [];
    inputFields.length = 6;

    for (let i = 0; i < filler.length; i++) {
        lCol.insertAdjacentHTML('beforeend', "<p>" + filler[i] + "</p>");
    }

    for (let i = 0; i < inputFields.length; i++) {
        inputFields[i] = document.createElement("input");
        rCol.appendChild(inputFields[i]);
    }


}