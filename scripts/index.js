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
// number system chosen by user to convert from
let numberSystemFrom = document.querySelector("#base-system-from");
// number system chosen by user to convert into
let numberSystemInto = document.querySelector("#base-system-into");

function calcBin(e) {
  // prevent form from submitting all
  e.preventDefault();

  // selected base sytem to convert into
  let selectedOptionInto =
    numberSystemInto.options[numberSystemInto.selectedIndex].text;

  // converting the user input number into a real number and into the system they are converting from
  let convertFromNum = parseInt(
    userNumber.value,
    parseInt(numberSystemFrom.value)
  );

  // calculate result
  let result;
  switch (numberSystemInto.value) {
    case "2":
      result = convertFromNum.toString(2);
      break;
    case "8":
      result = convertFromNum.toString(8);
      break;
    case "10":
      result = convertFromNum;
      break;
    case "16":
      result = convertFromNum.toString(16);
      break;
    // default left out
  }
  conversionResult.textContent = `${userNumber.value} in ${selectedOptionInto} is ${result}`;
}

calculateBtn.addEventListener("click", calcBin);
