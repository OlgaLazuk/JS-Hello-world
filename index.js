// 1 
let num = 10;
num++; 
++num;
num--;
alert(num); 

// 2
/* let str = "Привет";
let num = 123;
let flag = true;
let txt = "true";
console.log(typeof str, typeof num, typeof flag, typeof txt); */

// 3
/* let a = 6;
let b = 5;
if (a<=b) {
    alert (a)
} else {
   alert (b) 
} */

// 4
/* let a1 = 100;
let a2 = -10;
let a3 = 22;
if (a1>=0) {
   a1 = "+" 
} else  {
   a1 = "-"
}
if (a2>=0) {
    a2 = "+" 
 } else  {
   a2 = "-"
 }
 if (a3>=0) {
    a3 = "+" 
 } else  {
    a3 = "-"
 }
alert ("Знаки чисел а1, а2, а3:  " +(a1)+ " , " +(a2)+" , " +(a3)); */

// 5 не могу разобраться почему работают ТОЛЬКО два первых условия???
/* let age = prompt("Сколько Вам лет?", " "); 
let gender = confirm("Ваш пол мужской?"); 
if (age > 60 && gender == true) {
    alert ("вы дедушка");
  } else if (20 < age < 60 && gender == true ) {
    alert("вы мужчина");
  } else if (12 < age < 20 && gender == true) {
    alert ("вы юноша");
  } else {
    alert ("вы мальчик");
  }
 */
 
// 6-1
 /* function getSum(a, b) { 
     if (b === a) return a; 
     if (b === a + 1) return a + b; 
     return a + b + getSum(a + 1, b - 1); 
    } 
    console.log(getSum(1, 100));  
  */
// 6-2
 /* let getSum = 0;
   for (let a = 0; a <= 100; a++) {
   getSum=getSum+a;
  }
    alert( getSum ); 
 */

// 7
/* let secondsWeek = 60*60*24*7;
let date = new Date();
alert (`Сегодня ${date} и узнал что колиство секунд одной неделе составляет ${secondsWeek}`);
 */