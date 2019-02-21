"use strict";

function getLogWindow() {
    return document.getElementById("jsLog");
}

function clearLog() {
    getLogWindow().innerHTML = "";
}

function countAge(day, month, year) {
    const oneDay = (1000 * 60 * 60 * 24);
    return Math.round(Math.abs((new Date() - new Date(year, month - 1, day)))) / oneDay;
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
    const demo = getLogWindow();
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
    demo.insertAdjacentHTML('afterbegin',
        "<link href='../css/task03/colored-table.css' rel='stylesheet'>");
    demo.insertAdjacentHTML('beforeend', rows);
}

function completeTask04() {
    const arrayDays = ["Sunday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const arrayMonths = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    let date;
    date = new Date();

    const demo = getLogWindow();
    demo.innerHTML = "Today is " + arrayDays[date.getDay()] + " "
        + date.getDate() + " of " + arrayMonths[date.getMonth()] + ", " + date.getFullYear();
}

function completeTask05() {
    const dayOfBirth = prompt("Enter your day of birth", "0");
    const monthOfBirth = prompt("Enter your month of birth", "0");
    const yearOfBirth = prompt("Enter your year of birth", "0");

    const demo = getLogWindow();

    demo.innerHTML = "Im alive for " + countAge(dayOfBirth, monthOfBirth, yearOfBirth) + " days";
}