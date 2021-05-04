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

const userNumber = document.querySelector("#user-input-number");
const calculateBtn = document.querySelector("#calculate-num-sys-btn");

function calcBin(e) {
  e.preventDefault();
  let result = parseInt(userNumber.value, 10).toString(2);
  // let binaryResult = userNumber.value;

  console.log(result);
  //console.log(parseInt(userNumber.value, 10).toString(2));
  // console.log(typeof binaryResult);
  // console.log(result);
}

calculateBtn.addEventListener("click", calcBin);

// const decimalToBinary = (num) => {
//   let result = "";

//   while (num > 0) {
//     result += num % 2;
//     num = Math.floor(num / 2);
//   }

//   return result.split("").reverse().join("");
// };
//128 64 32 16 8 4 2 1
