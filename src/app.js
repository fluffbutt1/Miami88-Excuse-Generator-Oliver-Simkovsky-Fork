import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const p = document.getElementById("excuse");
  console.log(p.textContent);

  let testArray = ["a","b","c"];

  function getRandomIndex(array){
    const length = array.length;
    const result = Math.floor(Math.random() * length);
    return result;
  }

  console.log(testArray[getRandomIndex(testArray)]);
  p.textContent = testArray[getRandomIndex(testArray)];
};
