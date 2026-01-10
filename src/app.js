import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const p = document.getElementById("excuse");
  console.log(p.textContent);

  let testArray = ["a","b","c"];
  let secondtestArray = ["1","2","3"];
  let thirdtestArray = ["!", "@","#"];

  function getRandomIndex(array, array2, array3){
    const length = array.length;
    const result = Math.floor(Math.random() * length);

    const secondlength = array2.length;
    const secondresult = Math.floor(Math.random() * length);
    
    const thirdlength = array3.length;
    const thirdresult = Math.floor(Math.random() * length);

    return result + " " + secondresult + " " + thirdresult;
  }

  console.log(testArray[getRandomIndex(testArray)]);
  console.log(secondtestArray[getRandomIndex(secondtestArray)]);
  console.log(thirdtestArray[getRandomIndex(thirdtestArray)]);
  
  p.textContent = testArray[getRandomIndex(testArray)];
};
