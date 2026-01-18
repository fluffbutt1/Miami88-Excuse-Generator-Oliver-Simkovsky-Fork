import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  const documentID = document.getElementById("excuse");

  const testArray = ["Chicken tenders", "Oliver", "Goku", "Naruto"];
  const secondArray = ["kamehameha'd", "broke", "ate", "stole"];
  const thirdArray = ["my homework", "the car", "my will to live"];
  const fourthArray = ["while I was sleeping",
    "while I was training to be Hokage",
    "while I was training with Picollo",
    "while I was taking a bathroom break"];

  function getRandomIndex(array) {
    const length = array.length;
    const result = Math.floor(Math.random() * length);

    return result;

  }
  function getSecondRandomIndex(secondArray) {
    const secondLength = secondArray.length;
    const secondResult = Math.floor(Math.random() * secondLength);

    return secondResult;
  }

  function getThirdRandomIndex(thirdArray) {
    const thirdLength = thirdArray.length;
    const thirdResult = Math.floor(Math.random() * thirdLength);

    return thirdResult;
  }

  function getFourthRandomIndex(fourthArray) {
    const fourthLength = fourthArray.length;
    const fourthResult = Math.floor(Math.random() * fourthLength);

    return fourthResult;
  }

  function Result(array1, array2, array3, array4){
    array1 = testArray[getRandomIndex(testArray)];
    array2 = secondArray[getSecondRandomIndex(secondArray)];
    array3 = thirdArray[getThirdRandomIndex(thirdArray)];
    array4 = fourthArray[getFourthRandomIndex(fourthArray)];

    let space = " ";
    return array1 + space + array2 + space + array3 + space + array4;
  }

  let finalResult = Result(testArray, secondArray, thirdArray, fourthArray);
  console.log(finalResult);
  documentID.textContent = finalResult;
};
