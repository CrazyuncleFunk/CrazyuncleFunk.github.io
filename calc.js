const ROMANBTN = document.getElementById("calc-roman");
const DECIMALBTN = document.getElementById("calc-decimal");
const CLEARBTN = document.getElementById("calc-clear");
const BACKSPACEBTN = document.getElementById("calc-backspace");
const DISPLAYELEMENT = document.getElementById("calc-display-val");
const CALCNUMBTN = document.getElementsByClassName("calc-btn-num");
const CALCOPERATORBTN = document.getElementsByClassName("calc-btn-operator");

//The displayVal is the value of the calculator screen
let displayVal = "0";
//The pendingVal is a way of saving the display value while displaying another value
let pendingVal;
//The evalStringArray is an array which holds the sum before calculation
let evalStringArray = [];
//test is a way of determining if the display is roman numerals or numbers
let test = 0;

//This for loop adds event listners to all the number buttons
for(let i = 0;i<CALCNUMBTN.length;i++){
  CALCNUMBTN[i].addEventListener("click",function(clickObj){
   test = 0;
    let btnText = clickObj.target.innerText;
    if(displayVal === '0'){
        displayVal = '';
    }
    displayVal += btnText;
    DISPLAYELEMENT.innerText = displayVal;
                                  } , false);
};
//This function of the event listener below takes the operator button thats been pressed.
let performOperation = (clickObj) => {
  test = 0;
   let operator = clickObj.target.innerText;
  //This switch then takes the display value and the selected operator and passes them to an array. 
  switch (operator){
    case "+" :
      pendingVal=displayVal;
      displayVal ="0";
      DISPLAYELEMENT.innerText = pendingVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("+");
      break;
    case "-" :
      pendingVal=displayVal;
      displayVal ="0";
      DISPLAYELEMENT.innerText = pendingVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("-");
      break;
    case "x":
      pendingVal=displayVal;
      displayVal ="0";
      DISPLAYELEMENT.innerText = pendingVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("*");
      break;
    case "÷" :
      pendingVal=displayVal;
      displayVal ="0";
      DISPLAYELEMENT.innerText = pendingVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("/");
      break;
//When equals is selected the last value is pushed to the array, The solved equation is displayed and the array is cleared.
    case "=":
      evalStringArray.push(displayVal);
      var evaluation = eval(evalStringArray.join(" "));
       displayVal = evaluation + "";
      DISPLAYELEMENT.innerText = displayVal;
      evalStringArray = [];
      break;
  }
};
//This for loop adds event listeners to the operation buttons
for(let i = 0;i<CALCOPERATORBTN.length;i++){
 CALCOPERATORBTN[i].addEventListener("click",performOperation, false);
};
//This listens for the clear button which resets everything back to default
CLEARBTN.addEventListener("click", function(clickObj){
 
  test = 0;
  displayVal = "0";
  pendingVal = undefined;
  evalStringArray = [];
  DISPLAYELEMENT.innerHTML = displayVal;
},false);
//This listens for the backspace button which removes the last digit or if theres only one digit changes it to 0
BACKSPACEBTN.addEventListener("click", function(clickObj){
  test = 0;
  let lengthOfDisplayVal = displayVal.length;
  displayVal = displayVal.slice(0,lengthOfDisplayVal - 1);

  DISPLAYELEMENT.innerHTML = displayVal;
     if(displayVal === '' ){
        DISPLAYELEMENT.innerHTML = '0';
    }
});
//This listens for the decimal point which only allows of one instance at a time
DECIMALBTN.addEventListener("click",function(clickObj){
    if(!displayVal.includes(".")){
   if(displayVal ==='0' || displayVal ===""){
     DISPLAYELEMENT.innerHTML = '0' + "."
   }
    displayVal += "."

    DISPLAYELEMENT.innerText = displayVal;
}
                            } , false);
//This Function converts numbers into their roman numeral equivalent
let convertToRoman = function(num) {
//these arrays have equivalent values at the same indexs I.E 1000 and M are both worth 1000 and are both at position[0]
  let numValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  let romanValue = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  let romanized = "";
//this loop takes the number and takes away the highest number lower then it and adds the equivalent roman numeral
  for (let index = 0; index < numValue.length; index++) {
    while (numValue[index] <= num) {
      romanized += romanValue[index];
      num -= numValue[index];
    }
  }


  DISPLAYELEMENT.innerHTML= romanized
}
//This listener when activated tests to see if the display is roman numerals or numbers and changes them to the correct one
ROMANBTN.addEventListener("click",function(clickObj){
 if(test === 0){
    test++;
  convertToRoman(parseInt(displayVal));
  }else if(test !== 0){
    test = 0;
    DISPLAYELEMENT.innerHTML = displayVal;
  }
  //If the display value is 0 it will nor be converted
  if(displayVal == 0){
    DISPLAYELEMENT.innerHTML = "0";
  }
                          } , false);
