const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const click = document.getElementById("click");
const color = document.querySelector(".colorName");

click.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}



// var hex = document.querySelector('.hex')

// hex.addEventListener(click, () =>{

// const colors = ["yellow", "purple", "#f15025"];
// const click = document.getElementsByClassName("click");
// const color = document.querySelector(".colorName");

// click.addEventListener("click", function () {
//   const randomNumber = getRandomNumber();
//   console.log(randomNumber);

//   document.body.style.backgroundColor = colors[randomNumber];
//   color.textContent = colors[randomNumber];
// });

// function getRandomNumber() {
//   return Math.floor(Math.random() * colors.length);
// }
// })



// const colors = ["red", "green", "rgba(133,122,200)"]
