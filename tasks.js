//Дано трехзначное число. Вывести число, полученное при перестановке цифр сотен и десятков исходного числа (например, 123 перейдет в 213). 
let number = 123; 
let hundreds = Math.floor(number / 100); // вычисляем значение сотен
let tens = Math.floor((number % 100) / 10); 
let ones = number % 10; 
let newNumber = tens * 100 + hundreds * 10 + ones; 
console.log(newNumber); 

//Даны две переменные целого типа: A и B. Если их значения не равны, то присвоить каждой переменной сумму этих значений, а если равны, то присвоить переменным нулевые значения. Вывести новые значения переменных A и B.
let A = 7; 
let B = 7; 
if (A !== B) {
  A = A + B;
  B = A;
} else {
  A = 0;
  B = 0;
}
console.log("A = " + A); // A = 0
console.log("B = " + B); // B = 0

//Дан номер года (положительное целое число). Определить количество дней в этом году, учитывая, что обычный год насчитывает 365 дней, а високосный — 366 дней. Високосным считается год делящийся на 4, за исключением тех годов, которые делятся на 100 и не делятся на 400 (например, годы 300, 1300 и 1900 не являются високосными, а 1200 и 2000 — являются).
let year = 2023; 
let days; 
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  days = 366; // год високосный
} else {
  days = 365; // год обычный
}

console.log("Количество дней в " + year + " году: " + days);

//Дано целое число N (> 0). Найти квадрат данного числа, используя для его вычисления следующую формулу: N*N = 1 + 3 + 5 + ... + (2N - 1)
let N = 10; 
let sum = 0; //хранение суммы нечетных чисел
for (let i = 1; i <= 2 * N - 1; i += 2) {
  sum += i; 
}
let square = sum; 
console.log(square);

//Даны целые положительные числа N и K. Найти сумму 1**K + 2**K + ... + N**K
let n = 3;
let k = 4;
let summ = 0;
for (let i = 1; i <= n; i++) {
  summ += Math.pow(i, k);
}
console.log(summ); 

//Дан массив A размера N. Найти минимальный элемент из его элементов с четными номерами: A2, A4, A6, . . . .
let a = [3, 6, 1, 8, 2, 5, 7, 4]; 
let min = Infinity; 
for (let i = 1; i < a.length; i += 2) {
  if (a[i] < min) {
    min = a[i];
  }
}
console.log(min);

//Дан массив размера N. Найти два соседних элемента, сумма которых максимальна, и вывести эти элементы в порядке возрастания их индексов
let arr = [5, 7, 9, 11, 2, 25, 4]; // 25 + 4 = 29
let sumMax = arr[0] + arr[1]; 
let indexMax = 0; 
for (let i = 1; i < arr.length - 1; i++) {
  let sum = arr[i] + arr[i + 1]; 
  if (sum > sumMax) {
    sumMax = sum; 
    indexMax = i; 
  }
}
console.log(arr[indexMax], arr[indexMax + 1]); 

//Дан массив размера N. Осуществить циклический сдвиг элементов массива вправо на одну позицию (при этом A1 перейдет в A2, A2 — в A3, . . ., AN — в A1).
let massiv = [5, 10, 15, 20, 25];
let last = massiv[massiv.length - 1];
for (let i = massiv.length - 2; i >= 0; i--) {
  massiv[i+1] = massiv[i];
}
massiv[0] = last;
console.log(massiv); 

//Дан массив размера N, все элементы которого, кроме первого, упорядочены  по возрастанию. Сделать массив упорядоченным, переместив первый элемент на новую позицию.
let arr = [9, 3, 4, 5, 6, 7, 8];
let firstElem = arr.shift(); 
arr.push(firstElem); 
console.log(arr); 

//Дан массив размера N. Перед каждым положительным элементом массива вставить элемент с нулевым значением.
let arr = [3, -5, 2, 7, -4, 0, -6, 8];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) { // нахожу положительный элемент 
    arr.splice(i, 0, 0); // вставляю 0 перед элементом
    i++; 
  }
}
console.log(arr);


//Дана строка, содержащая по крайней мере один символ пробела. Вывести подстроку, расположенную между первым и вторым пробелом исходной строки. Если строка содержит только один пробел, то вывести пустую строку.
let str = 'My name is Tamerlan, and you?';
let firstSpaceIndex = str.indexOf(' '); //первый пробел
let secondSpaceIndex = str.indexOf(' ', firstSpaceIndex + 1); //второй пробел
let result = ''; 
if (secondSpaceIndex > 0) { 
  result = str.substring(firstSpaceIndex + 1, secondSpaceIndex); 
}
console.log(result); 

//Дана строка, состоящая из русских слов, разделенных пробелами (одним или несколькими). Найти длину самого короткого слова.
let str = 'Всем привет, как проходит обучение?';
let shortestWordLength = str
  .split(' ') // делаем из строки массив слов
  .reduce((shortest, word) => shortest.length < word.length ? shortest : word)
  .length; 
console.log(shortestWordLength); //кол-во букв в слове (слово "как" самое короткое)


//Дана строка, изображающая арифметическое выражение вида «<цифра>±<цифра>±. . .±<цифра>», где на месте знака операции «±» находится символ «+» или «−» (например, «4+7−2−8»). Вывести значение данного выражения (целое число).
let str = '4+7-2-8';
let arr = str.split(/(\+|\-)/g); // Разбиваем строку на массив
let result = parseInt(arr[0]); // parseInt преобразует переданный ей аргумент в строковый тип, интерпретирует его и возвращает целое число или значение NaN .
for (let i = 1; i < arr.length; i += 2) {
  let operator = arr[i];
  let num = parseInt(arr[i+1]);
  if (operator === '+') {
    result += num;
  } else if (operator === '-') {
    result -= num;
  }
}
console.log(result); 


//Напишите программу на JavaScript для удаления повторяющихся элементов из массива (игнорируйте регистр).
const arr = ["Lexus", "Bmw", "lexus", "Nissan", "bmw", "nissan"];
const noRepeatArr = []; // создаем новый массив который не будет содержать повторные слова
for (let i = 0; i < arr.length; i++) {
  const element = arr[i].toLowerCase();
  if (!noRepeatArr.includes(element)) { // Проверяю, содержится ли текущий элемент уже в массиве noRepeatArr с помощью метода includes()
    noRepeatArr.push(element);
  }
}
console.log(noRepeatArr);


//Вычислить стоимость покупки с учетом скидки. Скидка 5% предоставляется, если сумма покупки превышает 500 гривен и 10%, если больше 1000 гривен.
let products = [250, 500, 700, 800, 100]; // список товаров разной стоимости
let total = 0;
for (let i = 0; i < products.length; i++) {
  total += products[i];
}
let discount = 0;
if (total > 1000) {
  discount = 0.1; //10% скидка
} else if (total > 500) {
  discount = 0.05; //5% скидка
}
let discountTotal = total * (1 - discount); // переменнея для суммы с учетом скидки (от общей стоимости отнимаем скидку)
console.log("Общая стоимость:", total, "грн.");
console.log("Ваша скидка:", discount * 100, "%");
console.log("Стоимость с учетом скидки:", discountTotal, "грн.");











