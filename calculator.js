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
let toEval = {
  num1: 0,
  operator: null,
  num2: null,
};

let result;
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
    numBtns.className = "rounded-full text-black focus:border border-white";
  } else if (topOps.includes(val)) {
    numBtns.style.backgroundColor = "#D4D4D2";
    numBtns.style.color = "#111111";
  }

  numBtns.addEventListener("click", () => {
    if (operators.includes(val)) {
      if (display.value === "" || display.value.includes(val)) {
        return;
      }
      if(toEval.num1==0){
      toEval.num1 = display.value;
      display.value = "";
      toEval.operator = val
      console.log(toEval.num1);
      display.value = "";
      console.log(toEval);
      return;
    } else

    // if(operators.includes(val)){
    //   if(toEval.operator == null){
    //   toEval.operator = val;
    //   display.value = "";
    //   console.log(val);
    //   console.log(toEval.operator);
    //   console.log(toEval);
    // }
    // }else 
      if (val == "=") {
        console.log(val);
        if (toEval.num1 !== 0) {
          toEval.num2 = display.value;
          console.log(toEval.num2);
          console.log(toEval.operator);
          console.log(toEval);

          switch (toEval.operator) {
            case "+":
              result = Number(toEval.num1) + Number(toEval.num2);
              display.value = result;
              break;
            case "-":
              result = toEval.num1 - toEval.num2;
              display.value = result;
              break;
            case "*":
              result = toEval.num1 * toEval.num2;
              display.value = result;
              break;
            case "/":
              result = toEval.num1 / toEval.num2;
              display.value = result;
              break;
          }
        }
      }
      return
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
      return
    }
    if (display.value == "0") {
      display.value = val;
    } else display.value += val;

    if (val == "AC") {
      display.value = "";
      toEval.num1 = 0;
      toEval.num2 = null;
      toEval.operator = null;
    }
  });
}
