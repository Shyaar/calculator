const nums = [
  "AC",
  "+/-",
  "%",
  "/",
  7,
  8,
  9,
  "*",
  4,
  5,
  6,
  "-",
  1,
  2,
  3,
  "+",
  ".",
  0,
  "=",
];
let num1 = 0;
let operator = null;
let num2 = null;
const operators = ["/", "*", "-", "+", "="];
const topOps = ["AC", "+/-", "%"];
let display = document.getElementById(`display`);

for (i = 0; i < nums.length; i++) {
  let val = nums[i];
  let numBtns = document.createElement("button");
  numBtns.className =
    "bg-black p-6 rounded-full text-white w-[70px] h-[70px] hover:border hover:border-white";
  numBtns.innerText = val;
  document.getElementById("keys").appendChild(numBtns);

  if (val == 0) {
    numBtns.className =
      "bg-black p-6 rounded-full text-white w-[170px] hover:border hover:border-white col-span-2";
  }

  if (operators.includes(val)) {
    numBtns.style.backgroundColor = "#FF9500";
  } else if (topOps.includes(val)) {
    numBtns.style.backgroundColor = "#D4D4D2";
    numBtns.style.color = "#111111";
  }

  numBtns.addEventListener("click", () => {
    if (operators.includes(val)) {
            if (display.value === "" || display.value.includes(val)) {
              return;
          }
          
    //   num1 = Number(display.value);
    //   operator = val;
    //   display.value = "";

    //   if (val == "=") {
    //     if (num1 !== null && operator !== null) {
    //       console.log(num1);
    //       num2 = Number(display.value);
    //       console.log(num2);
    //       switch (operator) {
    //         default:
    //           "err";
    //         case "+":
    //           display.value = num1 + num2;
    //           break;
    //         case "-":
    //           display.value = num1 + num2;
    //           break;
    //         case "/":
    //           display.value = num1 + num2;
    //           break;
    //         case "*":
    //           display.value = num1 + num2;
    //           break;
    //       }
    //     }
    //   }
    }


    if (val === ".") {
      if (display.value === "" || display.value.includes(".")) {
        return;
      }
    }
    if (val == "+/-") {
      if (display.value != "" && display.value != "0") {
        if (display.value.charAt(0) == "-") {
          display.value = display.value.slice(1);
        } else {
          display.value = "-" + display.value;
        }
      }
    }
    if (val == "%") {
      let mod = display.value.replace("%", "");
      display.value = Number(mod) / 100;
    }
    if (display.value == "0") {
      display.value = val;
    } else display.value += val;

    if (val == "AC") {
      display.value = "";
    }
  });
}
