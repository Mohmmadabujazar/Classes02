'use strict';

let kola1 =prompt('what is your name');
function pepsi1(name){
  console.log(name);
  alert('nice to meet you Mr '+ name);
}
pepsi1(kola1);

let kola2 =prompt('How old are you Mr '+kola1);
function pepsi2(name){
  console.log(name);
  alert('I wish you health and wellness ');
}
pepsi2(kola2);

let qus = prompt('Are you ready to start a game', 'Yes or No').toLocaleLowerCase();
while(qus !== 'yes' && qus !== 'no' && qus !== 'y' && qus !== 'n'){
    qus = prompt('Please enter Yes or No', 'yes or no').toLocaleLowerCase();
}

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

let kola1 =prompt('what is your name');
function pepsi1(name){
  console.log(name);
  alert('nice to meet you Mr '+ name);

}
pepsi1(kola1);

let kola2 =prompt('How old are you Mr '+kola1);
function pepsi2(name){
  console.log(name);
  alert('I wish you health and wellness ');

}
pepsi2(kola2);
*/