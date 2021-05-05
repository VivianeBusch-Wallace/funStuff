// weekend calculator
const checkNow = document.querySelector("#checkNow");
const userName = document.querySelector("#userName");
const date = new Date();

// getting today's weekday
const getDayName = () => {
  return date.toLocaleDateString("en-En", { weekday: "long" });
};
// calculation weekdays left until weekend
function weekend(e) {
  e.preventDefault();
  const result = document.querySelector(".weekend-count");
  let calc = 5 - date.getDay();

  if (calc > 0) {
    console.log(result);
    console.dir(result);
    console.error("Hi, this is error.");
    console.warn("Hi, this is warn.");
    console.table(result);

    result.innerHTML = `Hey ${
      userName.value
    }, today is ${getDayName()}, so it's already the weekend. Just joking! You still got ${calc} days left until the weekend! Almost there!`;
  } else if (calc < 0) {
    result.innerHTML = `Hey ${
      userName.value
    }, today is ${getDayName()}, so it's already the weekend! Hurray!`;
  }
}
checkNow.addEventListener("click", weekend);

// number system calculator

//user input without value
const userNumber = document.querySelector("#user-input-number");
// calculator button
const calculateBtn = document.querySelector("#calculate-num-sys-btn");
// result div
const conversionResult = document.querySelector(".conversion-result");
// number system chosen by user
let numberSystem = document.querySelector("#base-system option");

function calcBin(e) {
  // prevent form from submitting all
  e.preventDefault();
  let result = parseInt(userNumber.value, 10).toString(2);
  // let binaryResult = userNumber.value;

  console.log(result);
  conversionResult.textContent = `${userNumber.value} in ${numberSystem.textContent} is ${result}`;
}

calculateBtn.addEventListener("click", calcBin);
