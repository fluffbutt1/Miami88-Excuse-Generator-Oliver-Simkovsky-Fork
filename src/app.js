import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const documentID = document.getElementById("excuse");

  let testArray = ["a","b","c"];
  let secondArray = ["one", "two", "three"];
  let thirdArray = ["hello", "hi", "boop"];

  function getRandomIndex(array){
    const length = array.length;
    const result = Math.floor(Math.random() * length);

    return result;

  }
  function getSecondRandomIndex(secondArray){
    const secondLength = secondArray.length;
    const secondResult = Math.floor(Math.random() * secondLength);

    return secondResult;
  }

  function getThirdRandomIndex(thirdArray){
    const thirdLength = thirdArray.length;
    const thirdResult = Math.floor(Math.random() * thirdLength);

    return thirdResult;
  }

  let finalResult = testArray[getRandomIndex(testArray)] + secondArray[getSecondRandomIndex(secondArray)] + thirdArray[getThirdRandomIndex(thirdArray)];
  console.log(finalResult);
  documentID.textContent = finalResult;
};
