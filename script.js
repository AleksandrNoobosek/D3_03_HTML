alert("Hello wotld!");

let number = 158
alert(`Результат${number+2}`);
  
let str1 = "Алевтина!";
alert("Привет,"+ str1);

let str2 = prompt('Как Вас Зовут?', ''); //result = prompt(title, [default])
alert(`Hello,${str2}`)

let str3 = 'Алевтина'; 
function showMessage(){
  let message = 'Привет ' + str3 +'!';
  alert(message)
}
showMessage();

if(confirm('Вы уверенны? '))alert('!!!')
else alert ('Плохо')

let a = parseInt(prompt('Сколько Вам лет?'));
switch (a) {
 case 17:
  alert( 'Маловато' );
  break;
 case 18:
  alert( 'Уже Большой' );
  break;
 case 7:
  alert( 'Когда свадьба' );
  break;
 default:
  alert(  'надо подумать');
}
