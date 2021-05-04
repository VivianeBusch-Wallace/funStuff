const checkNow = document.querySelector("#checkNow");
const userName = document.querySelector("#userName").value;
// testing with value here
const date = new Date();

// getting today's weekday
const getDayName = () => {
  return date.toLocaleDateString("en-En", { weekday: "long" });
};

function weekend(e) {
  e.preventDefault();
  const result = document.querySelector(".weekend-count");
  let calc = 5 - date.getDay();

  if (calc > 0) {
    result.innerHTML = `Hey ${userName}, today is ${getDayName()}, so it's already the weekend. Just joking! You still got ${calc} days left until the weekend! Almost there!`;
  } else if (calc < 0) {
    result.innerHTML = `Hey ${userName}, today is ${getDayName()}, so it's already the weekend! Hurray!`;
  }
}

checkNow.addEventListener("click", weekend);
