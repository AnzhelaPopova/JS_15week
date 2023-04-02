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
  let commentInputValue = commentInput.value;

  if (commentInputValue != 0) {
    let newItem = document.createElement("li");

    newItem.textContent = commentInputValue;
    itemList.appendChild(newItem);
    commentInput.value = "";
    taskList.style.display = "none";
  }

  var liElements = document.querySelectorAll("li");

  for (var i = 0; i < liElements.length; i++) {
    var liElement = liElements[i];
    var checkboxElement = document.createElement("input");
    checkboxElement.type = "checkbox";
    liElement.appendChild(checkboxElement);
  }
}

function del() {
  itemList.textContent = "";
  document.getElementById("taskList").style.display = "block";
}
