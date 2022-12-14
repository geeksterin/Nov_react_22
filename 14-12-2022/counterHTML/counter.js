const incrementBtn = document.querySelector(".incre");
const decrementBtn = document.querySelector(".decre");
const counter = document.querySelector("#counter");
let count = counter.innerText;

incrementBtn.addEventListener("click", () => {
    console.log(counter.innerText);
    count++
    counter.innerText = count;
});

