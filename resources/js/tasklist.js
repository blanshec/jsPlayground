"use strict";

function getLogWindow() {
    let logWindow = document.getElementById("jsLog");
    return logWindow;
}

function clearLog() {
    getLogWindow().innerHTML = "";
}

function completeTask01() {
    var surname = prompt("Enter your name", "0");
    var gender = prompt("Enter your gender", "0");
    var age = prompt("Enter your age", "0");

    var result = confirm("SURNAME: " + surname +
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
            if (y == "0") alert("Cannot divide by ZERO ;)"); else alert(x / y);
        }
    } else {
        alert("Wrong symbol");
    }
}

function completeTask03() {
    const demo = getLogWindow();

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
    demo.insertAdjacentHTML('afterbegin',
        "<link href='resources/css/task03/colored-table.css' rel='stylesheet'>");
    demo.insertAdjacentHTML('beforeend', rows);
}

function completeTask04() {
    const arrayDays = ["Sunday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const arrayMonths = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    let date;
    date = new Date();

    const demo = getLogWindow();
    demo.innerHTML = "Today is " + arrayDays[date.getDay()] + ", "
        + date.getDate() + " of " + arrayMonths[date.getMonth()] + " " + date.getFullYear();
}