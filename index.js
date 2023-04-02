//*
// let str = '12569';
// for (let i = 0; i < str.length; i++)  { //разбивает число n на цифры и выводит их на экран;
// console.log( str[i] );
// }
// console.log( str.length ); //подсчитывает сколько цифр в числе n

// function sumStr() { //находит сумму цифр числа n ;
//     let massiv = Array.from (str);
//     console.log (massiv)
//         let sum = massiv.reduce((a,b)=> +a + +b)
//     return sum
//   }
//   console.log (sumStr())

//   strReverse = str.split("").reverse().join(""); //меняет порядок цифр числа n на обратный;
//   console.log (strReverse)

const taskList = document.getElementById("taskList");
const commentInput = document.getElementById("comment");
const itemList = document.getElementById("item-list");

function add() {
  const commentInput = document.getElementById("comment");
  let commentInputValue = commentInput.value;
  let itemList = document.getElementById("item-list");

  if (commentInputValue != 0) {
    let newItem = document.createElement("li");
    newItem.textContent = commentInputValue;
    itemList.appendChild(newItem);
    commentInput.value = "";
    const taskList = document.getElementById("taskList");
    taskList.style.display = "none";
  }
}

function del() {
  let element = document.querySelector("li");
  element.remove();

  document.getElementById("taskList").style.display = "block";
  
}
