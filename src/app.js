import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const documentID = document.getElementById("excuse");

  const testArray = ["Chicken tenders","Oliver","Goku", "Naruto"];
  const secondArray = ["kamehameha'd", "broke", "ate", "stole"];
  const thirdArray = ["my homework", "the car", "my will to live"];

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

  let finalResult = testArray[getRandomIndex(testArray)] + " " + secondArray[getSecondRandomIndex(secondArray)] + " " + thirdArray[getThirdRandomIndex(thirdArray)];
  console.log(finalResult);
  documentID.textContent = finalResult;
};
