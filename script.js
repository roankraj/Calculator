let display = document.getElementById("input");
let calcs = document.getElementById("calcs");

function equalP(expression) {
  try {
    return eval(expression);
  } catch {
    alert("Please enter valid expression");
    return "";
  }
}

function highLight(btn) {
  if (btn) {
    btn.classList.add("active-equals");

    setTimeout(function () {
      btn.classList.remove("active-equals");
    }, 120);
  }
}

let clearEntry = document.getElementById("clear-entry");
let underRoot = document.getElementById("under-root");
let plusMinus = document.getElementById("plus-minus");

let mod = document.getElementById("mod");
let clear = document.getElementById("clear");
let backspace = document.getElementById("backspace");
let inverse = document.getElementById("inverse");
let sqaure = document.getElementById("sqaure");
let division = document.getElementById("division");
let multi = document.getElementById("multi");
let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let zero = document.getElementById("zero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let deci = document.getElementById("deci");
let equals = document.getElementById("equals");

document.addEventListener("keydown", function (e) {
  if (!isNaN(e.key) || ["+", "-", "/", "*", "%", "."].includes(e.key)) {
    e.preventDefault();
    display.innerText += e.key;
    if (e.key === "1") highLight(one);
    else if (e.key === "2") highLight(two);
    else if (e.key === "3") highLight(three);
    else if (e.key === "4") highLight(four);
    else if (e.key === "5") highLight(five);
    else if (e.key === "6") highLight(six);
    else if (e.key === "7") highLight(seven);
    else if (e.key === "8") highLight(eight);
    else if (e.key === "9") highLight(nine);
    else if (e.key === "0") highLight(zero);
    else if (e.key === ".") highLight(deci);
    else if (e.key === "+") highLight(add);
    else if (e.key === "-") highLight(subtract);
    else if (e.key === "/") highLight(division);
    else if (e.key === "*") highLight(multi);
    else if (e.key === "%") highLight(mod);
  } else if (e.key === "Backspace") {
    e.preventDefault();
    highLight(backspace);
    display.innerText = display.innerText.slice(0, -1);
  } else if (e.key === "Enter" || e.key === "=") {
    e.preventDefault();
    if (!(equalP(display.innerText) === undefined)) {
      calcs.innerText = display.innerText;
      display.innerText = equalP(display.innerText);
    }
    highLight(equals);
  } else {
    e.preventDefault();
  }
});

plusMinus.addEventListener("click", function () {
  let display2 = "";
  display2 = equalP(display.innerText);
  display2 = `(-1)*${display2}`;
  calcs.innerText = display2;
  display.innerText = equalP(display2);
});

backspace.addEventListener("click", function () {
  display.innerText = display.innerText.slice(0, -1);
});

equals.addEventListener("click", function () {
  calcs.innerText = display.innerText;
  display.innerText = equalP(display.innerText);
});

clearEntry.addEventListener("click", function () {
  display.innerText = "";
  calcs.innerText = "";
});

clear.addEventListener("click", function () {
  display.innerText = "";
});

inverse.addEventListener("click", function () {
  if (!(display.innerText === "")) {
    let display2 = "";
    display2 = equalP(display.innerText);
    display2 = `1/${display2}`;
    calcs.innerText = display2;
    display.innerText = equalP(display2).toFixed(2);
  }
});

sqaure.addEventListener("click", function () {
  if (!(display.innerText === "")) {
    let display2 = "";
    display2 = equalP(display.innerText);
    display2 = `${display2}*${display2}`;
    calcs.innerText = display2;
    display.innerText = equalP(display2).toFixed(2);
  }
});

underRoot.addEventListener("click", function () {
  if (!(display.innerText === "")) {
    let display2 = "";
    display2 = equalP(display.innerText);
    display.innerText = Math.sqrt(Number(display2)).toFixed(2);
    display2 = `√${display2}`;
    calcs.innerText = display2;
  }
});

mod.addEventListener("click", function () {
  display.innerText += "%";
});

division.addEventListener("click", function () {
  display.innerText += "/";
});

multi.addEventListener("click", function () {
  display.innerText += "*";
});

add.addEventListener("click", function () {
  display.innerText += "+";
});

subtract.addEventListener("click", function () {
  display.innerText += "-";
});

deci.addEventListener("click", function () {
  display.innerText += ".";
});

one.addEventListener("click", function () {
  display.innerText += "1";
});

two.addEventListener("click", function () {
  display.innerText += "2";
});

three.addEventListener("click", function () {
  display.innerText += "3";
});

four.addEventListener("click", function () {
  display.innerText += "4";
});

five.addEventListener("click", function () {
  display.innerText += "5";
});

six.addEventListener("click", function () {
  display.innerText += "6";
});

seven.addEventListener("click", function () {
  display.innerText += "7";
});

eight.addEventListener("click", function () {
  display.innerText += "8";
});

nine.addEventListener("click", function () {
  display.innerText += "9";
});

zero.addEventListener("click", function () {
  display.innerText += "0";
});
