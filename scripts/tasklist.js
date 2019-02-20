function fClearLog() {
    document.getElementById('jsLog').innerHTML = "";
}

function fZad01() {
    var surname = prompt("Enter your name", "0");
    var gender = prompt("Enter your gender", "0");
    var age = prompt("Enter your age", "0");

    var result = confirm("SURNAME: " + surname + "\n" + "GENDER: " + gender + "\n" + "AGE: " + age + "\nRight?");

    if (!result) {
        alert("Something went wrong...");
    } else {
        alert("Awesome!");
    }
}

function fZad02() {
    var num01 = prompt("Enter first number", "0");
    var x = parseInt(num01);
    var num02 = prompt("Enter secont number", "0");
    var y = parseInt(num02);
    var str = prompt("Enter operation symbol", "0");
    const opera = ['+', '-', '*', '/'];

    if (!opera.includes(str)) {
        alert("Wrong symbol");
    } else if (str === "+") {
        alert(x + y);
    } else if (str === "*") {
        alert(x * y);
    } else if (str === "-") {
        alert(x - y);
    } else if (str === "/") {
        if (y == "0") alert("Cannot divide by ZERO ;)"); else alert(x / y);
    }
}

function fZad03() {
    const demo = document.getElementById('jsLog');
    demo.innerHTML = "";

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
    demo.insertAdjacentHTML('afterbegin', "<link href='../styles/tablecolors.css' rel='stylesheet'>");
    demo.insertAdjacentHTML('beforeend', rows);
}

function fZad04() {

}