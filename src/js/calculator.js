var textarea = document.getElementById('textarea');

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var add = document.getElementById('add');

var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var minus = document.getElementById('minus');

var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var multiply = document.getElementById('multiply');

var decimal = document.getElementById('decimal');
var zero = document.getElementById('zero');
var equal = document.getElementById('equal');
var division = document.getElementById('division');

var del = document.getElementById('delete');
var clear = document.getElementById('clear');
var num1 = 0;
var num2 = 0;
var operator = '';
var result = 0;


  one.addEventListener('click', () =>{
  textarea.textContent= textarea.value +'1';
  })
  two.addEventListener('click', () =>{
    textarea.textContent= textarea.value +'2';
  })
  three.addEventListener('click', () =>{
    textarea.textContent= textarea.value +'3';
  })
  four.addEventListener('click', () =>{
    textarea.textContent=textarea.value + '4';
  })
  five.addEventListener('click', () =>{
    textarea.textContent= textarea.value +'5';
  })
  six.addEventListener('click', () =>{
    textarea.textContent= textarea.value +'6';
  })
  seven.addEventListener('click', () =>{
    textarea.textContent=textarea.value + '7';
  })
  eight.addEventListener('click', () =>{
    textarea.textContent= textarea.value +'8';
  })
  nine.addEventListener('click', () =>{
    textarea.textContent= textarea.value +'9';
  })
  zero.addEventListener('click', () =>{
    textarea.textContent= textarea.value +'0';
  })



  add.addEventListener('click', () =>{
    num1 = parseFloat(textarea.textContent);
    textarea.textContent= '+';
    operator = '+';
    textarea.textContent = ' ';
  })
  minus.addEventListener('click', () =>{
    num1 = parseFloat(textarea.textContent);
    textarea.textContent= '-';
    operator = '-';
    textarea.textContent = ' ';
  })
  multiply.addEventListener('click', () =>{
    num1 = parseFloat(textarea.textContent);
    textarea.textContent= '*';
    operator = '*';
    textarea.textContent = ' ';
  })
  division.addEventListener('click', () =>{
    num1 = parseFloat(textarea.textContent);
    textarea.textContent= '/';
    operator = '/';
    textarea.textContent = ' ';
  })
  decimal.addEventListener('click', () =>{
    textarea.textContent= textarea.value + '.';
  })


  equal.addEventListener('click', () =>{
    num2 = parseFloat(textarea.textContent);
    switch (operator) {
      case '+':
          result = num1+num2;
          break;
      case '-':
          result = num1-num2;
          break;
      case '*':
          result = num1*num2;
          break; 
      case '/':
          result = num1/num2;
          break;       
      default:
          break;
     }
     textarea.textContent = result;
     num1= result;
  })
  del.addEventListener('click', () =>{
   textarea.textContent = textarea.value.slice(0,-1);
    
  })
  clear.addEventListener('click', () =>{
    textarea.textContent= ' ';
  })

