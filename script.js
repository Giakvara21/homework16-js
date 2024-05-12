//homework-1:  შევქმნათ ყველა მარტივი ტიპის ცვლადი რაც ვისწავლეთ

let userName = "giak";
let age = 26;
let isStudent = true;
console.log("Hello, I am " + userName + " and I am " + age + " years old.");

//homework-2: არითმეტიკული ოპერაციები მიმატება, გამოკლება, გაყოფა, გამრავლება ყველაფერი რაც ვისწავლეთ

let x = 10;
let y = 3;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

//homework-3: სტრინგების კონკატენაცია + ით და სტრინგების კონკატენაცია `ბექტიკებით`

let job = "student";
let at = "smart academy";
let fullDescription = "Hello, I am a" + job + " " + "at" + " " + at;
console.log(fullDescription);
let subject = "java script";
let homeWork = `learning ${subject}`;
console.log(homeWork);

//homework-4: მოცემულა მართკუთხედი სიგრძე ცვლადი = 7 და სიგანე = 5 (შექმენით 2 ცვლადი) გამოთვალეთ მართკუთხედის ფართობი ამ 2 ცვლადის გამოყენებით

let length = 7;
let width = 5;
let area = length * width;
console.log(area);

//ეს JavaScript კოდი ითვლის ყველა რიცხვის ჯამს numbersArray მასივში.

const numbersArrayFirst = [10, 5, 39, 45, 53];
let sumFirst = 0;
for (let i = 0; i < numbersArrayFirst.length; i++) {
  sumFirst = sumFirst + numbersArrayFirst[i];
}
console.log(sumFirst);

//კოდი ახდენს მასივის ინიციალიზებას, სახელად peopleArray, რომელიც შეიცავს ობიექტებს, რომლებიც წარმოადგენენ ადამიანებს მათი შესაბამისი თვისებებით, როგორიცაა სახელი, ასაკი და მისამართი.

const peopleArray = [
  { name: "Khvicha", age: 23, address: "Napoli" },
  { name: "Giorgi", age: 23, address: "Valencia" },
  { name: "George", age: 23, address: "Metz" },
];

// ეძებს და ბეჭდავს ინფორმაციას პირველი პირის შესახებ peopleArray-ში.

console.log(
  "My name is " +
    peopleArray[0].name +
    ", My age is " +
    peopleArray[0].age +
    ", My address is " +
    peopleArray[0].address
);

// ამოწმებს, არის თუ არა მეორე პირის ასაკი 19 წელზე ნაკლები. თუ ასეა, იბეჭდება "I am a teenager"; წინააღმდეგ შემთხვევაში იბეჭდება "I am an adult"
if (peopleArray[1].age < 19) {
  console.log("I am a teenager");
} else {
  console.log("I am an adult");
}

// ეს JavaScript კოდი იმეორებს რიცხვების მასივის თითოეულ ელემენტს და ბეჭდავს თითოეულ ელემენტს კონსოლში.

const numbers = [10, 5, 39, 45, 53];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// კოდი იყენებს switch-ის ბრძანებას კვირის მიმდინარე დღის დასადგენად და ბეჭდავს დღის სახელს ქართულად.

const currentDay = new Date().getDay();
switch (currentDay) {
  case 0:
    console.log("კვირა");
    break;
  case 1:
    console.log("ორშაბათი");
    break;
  case 2:
    console.log("სამშაბათი");
    break;
  case 3:
    console.log("ოთხშაბათო");
    break;
  case 4:
    console.log("ხუთშაბათი");
    break;
  case 5:
    console.log("პარასკევი");
    break;
  case 6:
    console.log("შაბათი");
}

//კოდი ბეჭდავს ნომრებს 0-დან 100-მდე კონსოლში, თითო სტრიქონზე ერთი რიცხვი.

for (let i = 0; i <= 100; i++) {
  console.log(i);
}

//კოდი ბეჭდავს რიცხვებს 0-დან 50-მდე while გამოყენებით.

let i = 0;
while (i <= 50) {
  console.log(i);
  i++;
}

//კოდი ახდენს სხვადასხვა მანიპულაციებს:

// მასივის ინიციალიზაცია მოთამაშის ხუთი სახელით
let namesArray = ["Ronaldo", "Messi", "Zidane", "Becks", "Ronney"];

// საწყისი მასივის ჩვენება
console.log(namesArray);

// ბოლო მოთამაშის მასივიდან ამოღება და განახლებული მასივის ჩვენება
let removedLastPlayer = namesArray.pop();
console.log(namesArray);

// პირველი მოთამაშის მასივიდან ამოღება და განახლებული მასივის ჩვენება
let removedFirstPlayer = namesArray.shift();
console.log(namesArray);

// "Frank Lampard" მასივის დასაწყისში დამატება და განახლებული მასივის ჩვენება
namesArray.unshift("Frank Lampard");
console.log(namesArray);

// "Scholes" მასივის ბოლოს დამატება და განახლებული მასივის ჩვენება
namesArray.push("Scholes");
console.log(namesArray);

//მეორე მოთამაშის მასივიდან წაშლა, „Berbatov“-ით შეცვლა და განახლებული მასივის ჩვენება.
delete namesArray[1];
namesArray[1] = "Berbatov";
console.log(namesArray);

//კოდი ქმნის მასივს სახელწოდებით numbersArray, რომელიც შეიცავს 1-დან 10000-მდე რიცხვების კვადრატებს.

let numbersArray = [];
for (let i = 1; i <= 10000; i++) {
  numbersArray.push(i * i);
}
console.log(numbersArray);

//while ლუპი

let numbersArrayWhile = [];
let j = 1;
while (j <= 10000) {
  numbersArrayWhile.push(j * j);
  j++;
}
console.log(numbersArrayWhile);

//do while ლუპი

let numbersArrayDoWhile = [];
let k = 1;
do {
  numbersArrayDoWhile.push(k * k);
  k++;
} while (k <= 10000);
console.log(numbersArrayDoWhile);

//ეს კოდი ითვლის ყველა რიცხვის ჯამს numbersTwoArray მასივში.

let numbersTwoArray = [8, 17, 65, 23, 25];
let sum = 0;
for (let i = 0; i < numbersTwoArray.length; i++) {
  sum += numbersTwoArray[i];
}
console.log(sum);

//ეს JavaScript ფუნქცია, oddOrEven, განსაზღვრავს მოცემული რიცხვი x კენტია თუ ლუწი.

function oddOrEven(x) {
  if (x % 2 === 0) {
    console.log("False");
  } else {
    console.log("True");
  }
}
oddOrEven(2);
oddOrEven(5);
oddOrEven(11241);
oddOrEven(5424);

//ეს JavaScript ფუნქცია გარდაქმნის მოცემულ სტრიქონს მცირე ასოზე toLowerCase() მეთოდის გამოყენებით.

function toLowerCase(str) {
  return str.toLowerCase();
}
let lowerCaseString = toLowerCase("I AM SMART ACADEMY STUDENT");
console.log(lowerCaseString);

//ეს JavaScript ფუნქცია, filterEvenNumbers, ფილტრავს ლუწი რიცხვებს რიცხვების მასივიდან filter() მეთოდის გამოყენებით.

function filterEvenNumbers(numbers) {
  return numbers.filter(function (number) {
    return number % 2 === 0;
  });
}

let numbersFilterArray = [134, 2123, 341, 4144, 5124, 6362];
let evenNumbersArray = filterEvenNumbers(numbersFilterArray);
console.log(evenNumbersArray);

// 1. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და დააბრუნებს true -ს თუ რიცხვი  არის 3ის ჯერადი , ხოლო თუ არაა მაშნ false-ს

function isMultipleOf3(number) {
  if (number % 3 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isMultipleOf3(333));
console.log(isMultipleOf3(63));
console.log(isMultipleOf3(99));
console.log(isMultipleOf3(113));
console.log(isMultipleOf3(154));
console.log(isMultipleOf3(211));

// 2. დაწერეთ ფუნქცია, getCurrencySymbolFromCode რომელიც პარამეტრად მიიღებს ვალუტის კოდს (USD ან EUR ან GEL) სტრინგის სახით და დააბრუნებს ამ კოდის შესაბამის სიმბოლოს ($, €, ლ) თუ ისეთი კოდს გადავცემ რომლის სიმბოლოც არ მაქვს დააბრუნოს კოდი.

function getCurrencySymbolFromCode(currencyCode) {
  const symbols = { USD: "$", EUR: "€", GEL: "l" };
  if (currencyCode in symbols) {
    return symbols[currencyCode];
  } else {
    return "Code";
  }
}
console.log(getCurrencySymbolFromCode("USD"));
console.log(getCurrencySymbolFromCode("EUR"));
console.log(getCurrencySymbolFromCode("GEL"));
console.log(getCurrencySymbolFromCode("JPY"));

//3. დაწერეთ ფუნქცია, რომელიც მიიღებს lowerCase სტრინგს მაგ (my name is joe) და დააბრუნებს UpperCase (MY NAME IS JOE) სტრინგს.

function toUpperCase(str) {
  return str.toUpperCase();
}
let upperCaseString = toUpperCase("my name is joe");
console.log(upperCaseString);

//4.  დაწერეთ ფუნქცია, რომელიც არგუმენტად მიიღებს გასაყიდ და ასაღებ ფასს, დათვლის მოგებას  და დააბრუნებს გასაყიდი ფასის რა პროცენტს შეადგენს მოგება.

function calculateProfitPercentage(sellingPrice, askingPrice) {
  const profit = sellingPrice - askingPrice;
  const profitPercentage = (profit / sellingPrice) * 100;
  return profitPercentage;
}

const sellingPrice = 120;
const askingPrice = 90;
console.log(calculateProfitPercentage(sellingPrice, askingPrice));

//5. დაწერეთ ფუნქცია, რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს გაფილტრულ მასივს .filter სადაც მხოლოდ ლუწი რიცხვები იქნება.

function filterEvenNumbers(array) {
  const evenNumbers = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenNumbers.push(array[i]);
    }
  }
  return evenNumbers;
}

const numbersToFillter = [
  11, 224, 321, 436, 5123, 6455432, 76234, 822312, 934, 1000,
];
const evenNumbers = filterEvenNumbers(numbersToFillter);
console.log(evenNumbers);

//6. დაწერეთ ფუნქცია, რომელიც მიიღებს ობიექტების მასივს (ობიექტს უნდა ქონდეს ველი name) და მეორე პარამეტრად მიიღებს სტრინგს და ამ მასივში .find ით მოვძებნოთ ობიექტის name === ფუნქციის მეორე პარამეტრს და დავაბრუნოთ ნაპოვნი ობიექტი.

const objects = [
  { name: "ვაშლი", quantity: 2 },
  { name: "ბანანი", quantity: 0 },
  { name: "კივი", quantity: 5 },
];

function findObjectByName(objectsArray, name) {
  return objectsArray.find((obj) => obj.name === name);
}

let foundObject = findObjectByName(objects, "ბანანი");

if (foundObject) {
  console.log(foundObject);
} else {
  console.log("Object not found.");
}
