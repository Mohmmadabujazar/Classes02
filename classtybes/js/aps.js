/* eslint-disable no-undef */
'use strict';
/*
let user = prompt('Are you ready to start a game');
console.log(user);
// user = user.tolowercase();
switch(user){
case 'yes':
  alert('great countinu writ yes for countinue with us');
  break;
case 'no':
  alert('you must wrrite yes to countinue the game');
  break;
default:
  alert('please write \n yes or no')
}
let userb = prompt('Its simple questions about yourself Are you ready to answer');
console.log(userb)
// userb = userb.tolowercase();
switch(userb){
case 'yes':
  alert('great countinu writ yes for countinue with us'+userb);
  break;
case 'no':
  alert('you must wrrite yes to countinue the game');
  break;
default:
  alert('please write \n yes or no')
}
let userd = prompt('are you excited ?');
console.log(userd)
// userd = userd.tolowercase();
switch(userd){
case 'yes':
  alert('great countinu writ yes for countinue with us'+userd);
  break;
case 'no':
  alert('you must wrrite yes to countinue the game');
  break;
default:
  alert('please write \n yes or no')
}
let usere = prompt('are you agree ?');
console.log(usere)
// usere = usere.tolowercase();
switch(usere){
case 'yes':
  alert('great countinu writ yes for countinue with us');
  break;
case 'no':
  alert('you must wrrite yes to countinue the game');
  break;
default:
  alert('please write \n yes or no')
}
let userf = prompt('lets go');
console.log(userf)
// userf = userf.tolowercase();
switch(userf){
case 'yes':
  alert('we will strat right now');
  break;
case 'no':
  alert('you must wrrite yes to countinue the game');
  break;
default:
  alert('please write \n yes or no')
}
*/
let kola1 = prompt('what is your name');
function pepsi1(name) {
  console.log(name);
  alert('nice to meet you Mr ' + name);

}
pepsi1(kola1);

let kola2 = prompt('How old are you ? Mr ' + kola1);
function pepsi2(name) {
  console.log(name);
  alert('I wish you health and wellness! ');

}
pepsi2(kola2);

let qus = prompt('Are you ready to start a guessing game', 'Yes or No').toLocaleLowerCase();
while (qus !== 'yes' && qus !== 'no' && qus !== 'y' && qus !== 'n') {
  qus = prompt('Please enter Yes or No', 'yes or no').toLocaleLowerCase();
}
console.log(qus);
alert('ok lets continue');

let qus1 = prompt('we have a simple questions about yourself! Are you ready to answer ?', 'Yes or No').toLocaleLowerCase();
while (qus1 !== 'yes' && qus1 !== 'no' && qus1 !== 'y' && qus1 !== 'n') {
  qus1 = prompt('Please enter Yes or No', 'yes or no').toLocaleLowerCase();
}
console.log(qus1);
alert('great');

let qus2 = prompt('are you excited ', 'Yes or No').toLocaleLowerCase();
while (qus2 !== 'yes' && qus2 !== 'no' && qus2 !== 'y' && qus2 !== 'n') {
  qus2 = prompt('Please enter Yes or No', 'yes or no').toLocaleLowerCase();
}
console.log(qus2);
alert('Hope you enjoy with us !');

let qus3 = prompt('Would you like to go to a new place that you have not gone before ?', 'Yes or No').toLocaleLowerCase();
while (qus3 !== 'yes' && qus3 !== 'no' && qus3 !== 'y' && qus3 !== 'n') {
  qus3 = prompt('Please enter Yes or No', 'yes or no').toLocaleLowerCase();
}
console.log(qus3);
alert('OK Lets test your knowledge a little !');

let qus4 = prompt('Do you know the city of Amman?','Yes or No').toLocaleLowerCase();
while (qus4 !== 'yes' && qus4 !== 'no' && qus4 !== 'y' && qus4 !== 'n') {
  qus4 = prompt('Please enter Yes or No', 'yes or no').toLocaleLowerCase();
}
console.log(qus4);
alert('its my city , I live there >> OK');
/*
let qus5 = prompt('Where is Amman located?','Jordan or Saudi Arabia or UAE or Qatar').toLocaleLowerCase();
while (qus5 !== 'Jordan' && qus5 !== 'Jo' && qus5 !== 'Jord' && qus5 !== 'jordan ' && qus5 !== 'Jor' && qus5 !== 'Jorda'){
if(ques5 === 'Saudi Arabia' || ques5 === 'Saudi' || ques5 === 'Saudi ' || ques5 === ' Saudi Arabia'){
  console.log(ques5)
alert('Close answer - 5/10 , but try again')
}else if(ques5 === 'UAE' || ques5 === ' UAE' || ques5 === 'Qatar' || ques5 === ' Qatar'){
alert('your answer - 2/10 , try again')
}
qus5 = prompt('Please choose one of the following answers!', 'Jordan or Saudi Arabia or UAE or Qatar').toLocaleLowerCase();
}
  */


// let qus6 = prompt('what the result : 5*5= ');
// while(qus6 != 25){
//  qus6 = prompt('Try again : 5*5= ');
// }
// console.log(qus6)
// alert('right answer keep countinue')

// let qus7 = prompt('what the result : 6*5= ');
// while(qus6 != 30){
//  qus7 = prompt('Try again : 6*5= ');
// }
// console.log(qus7)
// alert('right answer keep countinue')


// let qus8 = prompt('what the result : 7*5= ', '35 25 45 34');
// if (qus8 == '25') {
//   qus8 = prompt('Too low : 7*5= ', '35 25 45 34');
// } else if (qus8 == '45') {
//   qus8 = prompt('Too low : 7*5= ', '35 25 45 34');
// } else if (qus8 == '34') {
//   qus8 = prompt('Too high : 7*5= ', '35 25 45 34');
// } else {
//   while (qus8 !== '35') {
//   qus8 = prompt('what the result : 7*5= ', '35 25 45 34');
// //   }
// // }
// // if (qus8 =='35') {
// //   alert('right answer');
// // } else if (qus8 =='25'){
// // alert('Too low');
// // } else if (qus8 =='45'){
// // alert('Too low');
// // } else if (qus8 =='34'){
// //   alert('Too high');
// }

// let qus8 = prompt('what the result : 7*5= ', '35 25 45 34');
// while (qus8 !== '35') {
//   qus8 = prompt('what the result : 7*5= ', '35 25 45 34');
//   if (qus8 === '25') {
//     qus8 = prompt('Too low but try Again : 7*5= ', '35 25 45 34');
//   }
//   if (qus8 === '45') {
//     qus8 = prompt('Too low but try Again : 7*5= ', '35 25 45 34');
//   }
//   if (qus8 === '34') {
//     qus8 = prompt('Too high but try Again : 7*5= ', '35 25 45 34');
//   }
// }


let i = 0;
let qus8 = prompt('what the result for: 7*5= have 4 attempt to get answer', '35 25 45 34');
for (i = 0; i < 3; i++) {
  if (qus8 === '25') {
    qus8 = prompt('Too low but try Again : 7*5= ', '35 25 45 34');
  }
  if (qus8 === '45') {
    qus8 = prompt('Too low but try Again : 7*5= ', '35 25 45 34');
  }
  if (qus8 === '34') {
    qus8 = prompt('Too high but try Again : 7*5= ', '35 25 45 34');
  }
}
if (qus8 === '35') {
  alert('Raight Answer');
} else {
  while (qus8 !== '35' && qus8 !== '45' && qus8 !== '34' && qus8 !== '25' ){
    qus8 = prompt('please choose one option fom there what the result for: 7*5=', '35 25 45 34');
  }
}

// let qus9 = ['Mohammad', 'Moahmoud','Ali','Khalid','Yaser']
let qus9 = prompt('what the Name It starts with the letter: M have 6 attempt to get answer', 'Mohammad Moahmoud Ali Khalid Yaser');
for (i = 0; i < 5; i++) {
  if (qus9 === 'Ali') {
    qus9 = prompt('wrong answer try Again : 7*5= ', 'Mohammad Moahmoud Ali Khalid Yaser');
  }
  if (qus9 === 'Khalid') {
    qus9 = prompt('wrong answer try Again : 7*5= ', 'Mohammad Moahmoud Ali Khalid Yaser');
  }
  if (qus9 === 'Yasir') {
    qus9 = prompt('wrong answer try Again : 7*5= ', 'Mohammad Moahmoud Ali Khalid Yaser');
  }
}
if (qus9 === 'Mohammad' || qus9 === 'Moahmoud') {
  alert('Raight Answer');
}
if (qus9 === 'Moahmoud') {
  alert('Raight Answer');
} else {
  while (qus9 !== 'Mohammad' && qus9 !== 'Moahmoud'){
    qus9 = prompt('please choose one option fom there , what the Name It starts with the letter:M', 'Mohammad Moahmoud Ali Khalid Yaser');
  }
}

const userID = function(name,age){
  name = prompt('Enter you\'r name');
  age = prompt('Enter you\'r age');
  console.log( name,age );
  alert( name + age );
  return (name+age);
};

userID('Mohammad',27);
