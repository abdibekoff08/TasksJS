//1.Напишите функцию, принимающую строку и число. Поверните в виде массива только слова, длина которых превышает число.
function getLongWords(str, num) {
    return str.split(' ').filter(word => word.length > num);
  }
const str = 'Тут есть разные слова длина которых может быть меньше или больше пяти букв';
const num = 5;
const result = getLongWords(str, num);
console.log(result);
 

//2.Напишите функцию, которая возвращает true, если первый переданный аргумент (строка) заканчивается вторым аргументом (также строкой).
function solution(str, ending) {
    return str.endsWith(ending); //метод endsWith для проверки, заканчивается ли первый аргумент вторым аргументом.
  }
console.log(solution('abc', 'bc')); // true
console.log(solution('abc', 'd')); // false


//3.Напишите функцию, которая получает массив целых чисел и возвращает массив средних значений каждого целого числа и последователя, если он есть.
function averages(nums) {
    if (nums.length < 2) {
      return [];
    }
    
    const result = [];
    
    for (let i = 0; i < nums.length - 1; i++) {
      const avg = (nums[i] + nums[i+1]) / 2.0;
      result.push(avg);
    }
    
    return result;
  }
console.log(averages([2, -2, 2, -2, 2])); 
console.log(averages([1, 3, 5, 1, -10])); 
        

//4.Создайте функцию, которая принимает строку и возвращает количество (количество) гласных, содержащихся в ней.
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let char of str.toLowerCase()) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }
console.log(countVowels("Celebration")); 
console.log(countVowels("Palm")); 


//5.Напишите функцию, чтобы получить копию объекта, где ключи стали значениями, а ключи.
const mainObj = {red: "#FF0000", green: "#00FF00", white: "#FFFFFF"};
const subObj = {};
for (const key in mainObj) {
    subObj[mainObj[key]] = key;
}
console.log(subObj);


//6.Ивана Иванова обокрали. Но его вещи были застрахованы на определенную сумму. Учитывая украденные вещи и ограничения страховки, верните разницу между общей стоимостью этих вещей и пределом политики.
function calculateDifference(items, policyLimit) {
    let totalValue = 0;
  
    for (const key in items) {
      totalValue += items[key];
    }
  
    const difference = totalValue - policyLimit;
    return difference > 0 ? difference : 0;
  }
console.log(calculateDifference({ "baseball bat": 20 }, 5));
console.log(calculateDifference({ skate: 10, painting: 20 }, 19)); 
console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));


//7.Напишите функцию, которая поверхностно сравнивает два объекта. Ожидаемый результат: True если объекты идентичны, false если объекты разные
function shallowEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (let key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  
    return true;
  }
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 3 }; // { a: 1, b: 2 } будет true
console.log(shallowEqual(obj1, obj2)); 


//8.Создать класс Tiles (кафель), который будет содержать поля с открытым доступом: brand, size_h, size_w, price и метод класса getData(). В главной функции объявить пару объектов класса и внести данные в поля. Затем отобразить их, вызвав метод getData().
// Определяем класс Tiles
class Tiles {
    constructor(brand, size_h, size_w, price) {
      this.brand = brand;
      this.size_h = size_h;
      this.size_w = size_w;
      this.price = price;
    }
  
    getData() {
      return `Brand: ${this.brand}, Size: ${this.size_h} x ${this.size_w}, Price: ${this.price}`;
    }
  }
const tile1 = new Tiles("Tile 1", 15, 10, 5);
const tile2 = new Tiles("Tile 2", 15, 20, 10);
console.log(tile1.getData());
console.log(tile2.getData());
    
  
//9.Создать класс "Person" со свойствами "name" и "age". Добавить метод "sayHello", который будет выводить в консоль сообщение вида "Привет, меня зовут Имя, мне Возраст лет". Добавить свойство "hobbies" - массив с хобби. Добавить метод "addHobby", который будет добавлять новое хобби в массив «hobbies». Создать класс «child», который наследует все свойства и методы класса Person». Добавить произвольные свойства и методы. Учесть, что некоторые методы и свойства могут быть приватными или защищенными.
// Определяем класс Person
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.hobbies = [];
    }
  
    sayHello() {
      console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет`);
    }
  
    addHobby(hobby) {
      this.hobbies.push(hobby);
    }
  }
  
  class Child extends Person {
    constructor(name, age, school) {
      super(name, age);
      this.school = school;
    }
  
    play() {
      console.log(`${this.name} играет в футбол`);
    }
  }
  
const person1 = new Person("Тамерлан", 28);
const child1 = new Child("Максат", 28, "Школа №12");

person1.sayHello(); 
child1.sayHello(); 
child1.play(); 

person1.addHobby("футбол");
console.log(person1.hobbies);
  
child1.addHobby("рисование");
console.log(child1.hobbies); 


//10.Создать класс "Shape" со свойством "color". Добавить метод "getColor", который будет возвращать цвет фигуры. Создать класс "Rectangle", который наследуется от класса "Shape" и добавляет свойства "width" и "height". Добавить методы "getArea" и "getPerimeter", которые будут возвращать площадь и периметр прямоугольника соответственно. Создать класс "Square", который наследуется от класса "Rectangle" и имеет только одно свойство "sideLength".
class Shape {
    constructor(color) {
      this.color = color;
    }
  
    getColor() {
      return this.color;
    }
  }
  class Rectangle extends Shape {
    constructor(color, width, height) {
      super(color);
      this.width = width;
      this.height = height;
    }
  
    getArea() {
      return this.width * this.height;
    }
  
    getPerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  class Square extends Rectangle {
    constructor(color, sideLength) {
      super(color, sideLength, sideLength);
      this.sideLength = sideLength;
    }
  }
const shape = new Shape('red');
console.log('Цвет:', shape.getColor()); 
  
const rectangle = new Rectangle('blue', 4, 5);
console.log('Площадь прямоугольника:', rectangle.getArea()); 
console.log('Периметр прямоугольника:', rectangle.getPerimeter()); 
  
const square = new Square('green', 3);
console.log('Площадь квадрата:', square.getArea()); 
console.log('Площадь квадрата:', square.getPerimeter()); 
    
  
  
  