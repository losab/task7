/*
დაწერეთ ფუნქცია რომელიც შეამოწმებს გადაცემული ტექსტი არის თუ არა პალინდრომი . 
პალინდრომი არის სიტყვა რომელიც შებრუნებულ მდგომარეობაშიც იგივეა . მაგ. madam - მარცხნიდანაც და მარჯვნიდანაც ერთი და იგივეა(შებრუნებულიც და ჩვეულებრივადაც) .
!!!!დაწერეთ ამ ამოცანის მინიმუმ სამი სხვადასხვა ამოხსნის გზა 
function palindrom(txt) {

}

*/

    function palindrome(txt) {
        let re = /[^A-Za-z0-9]/g;
        txt = txt.toLowerCase().replace(re, '');
        let len = txt.length;
        for (let i = 0; i < len/2; i++) {
        if (txt[i] !== txt[len - 1 - i]) {
            return false;
        }
        }
        return true;
    }
    console.log(palindrome("A man, a plan, a canal. Panama"));

   
//Task 2

/*
დაწერეთ ფუნქცია რომელიც დაგვიბრუნებს პირველ არაგამეორებადი ქარაქტერი/სიმბოლოს. 
მაგალითად გვაქვს string 'bcskbrk' -> c - პირველი არაგამეორებადი ქარაქტერი არის 'c'
'cbcbdde' -> 'e'
'worsdorw' -> 's' 
'worsdorws'-> 'd'


*/
    let text = 'worsdorws';
    const myArray = text.split("");
    const newUnique=myArray.filter((value, index) => {
        return myArray.indexOf(value) === myArray.lastIndexOf(value);
    });
    console.log(newUnique);

/*
Task 3 : 
დაწერეთ ფუნქცია რომელიც გადაცემულ ტექსტის camelCase ში კონვერტაციას გააკეთებს
camelize("sad midis Matarebeli") -> "sadMidisMatarebeli"

*/
    function camelize(str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
        if (+match === 0) return ""; 
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
        });
    }
    console.log(camelize("sad midis Matarebeli"));
/*
Task 4: 
დაწერეთ ფუნქცია რომელიც დაგვიბრუნებს რიცხვს სწორი სუფიქსით , როგორიცაა 1st, 2nd, 3rd or 4th და ა.შ

მაგ . normilize(121) -> '121st' 
normilize(124) -> '124th' 
normilize(33) -> '33rd' 
    

*/


console.log(normilize("112"));

//Task 5

/*
დაწერეთ ფუნქცია რომელსაც გადაეცემა მასივი და ეს ფუნქცია დაგვიბრუნებს
ამ მასივში ყველაზე ხშირად გამოერებად ელემენტს და გამეორების რაოდენობას
მაგალითად
arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
პროგრამამ უნდა დაგვიბრუნოს 'a - 5'
უმჯობესია გამოიყენოთ reduce მეთოდი

*/
    function mode(array)
    {
        if(array.length == 0)
            return null;
        var modeMap = {};
        var maxEl = array[0], maxCount = 1;
        for(var i = 0; i < array.length; i++)
        {
            var el = array[i];
            if(modeMap[el] == null)
                modeMap[el] = 1;
            else
                modeMap[el]++;  
            if(modeMap[el] > maxCount)
            {
                maxEl = el;
                maxCount = modeMap[el];
            }
        }
        return maxEl;
    }
    let newArr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
    console.log(mode(newArr));

    const counted = mode(newArr);
    const counts = {};
    for (const num of newArr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    console.log(counts[counted]);


/*
Task 6 : 
დაწერეთ ფუნქცია რომელიც იღებს ორ მასივს და უნდა დაგვიბრუნოს 
ამ ორი მასივის დამერჯილი მასივი , გაერთიანებული , არადუბლირებული მნიშვნელობებით .
let array1 = [1, 2, 3];
let array2 = [2, 30, 1];

შედეგი უნდა იყოს : [1,2,3,30]

*/
let arr1 = [1,2,3];
    let arr2 = [2,1,30];
    let arr3 = arr1.concat(arr2);
    let unique = [...new Set(arr3)];
    console.log(unique);

/*
Task 7 : 
ფუნქციამ უნდა დააბრუნოს მასივი ისე როგორც კომენტარშია ნაჩვენები . 
გამოიყენეთ map

// */

// function readyToPutInTheDOM(arr) {
// }
// console.log(
//   readyToPutInTheDOM([
//     {
//       name: "Angelina Jolie",
//       age: 80,
//     },
//     {
//       name: "Eric Jones",
//       age: 2,
//     },
//     {
//       name: "Paris Hilton",
//       age: 5,
//     },
//     {
//       name: "Kayne West",
//       age: 16,
//     },
//     {
//       name: "Bob Ziroll",
//       age: 100,
//     },
//   ])
// );

// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]


//Task 8

/*

დაწერეთ ფუნქცია რომელიც დაითვლის ნულების მიმდევრობის რაოდენობას .  მიმდევრობა ვალიდურია თუ კი არის არანაკლებ 4 სიგრძისა 

[0, 0, 0, 0, 0, 1]  -->  1
# ერთი ჯგუფი 0ლების მიმდევრობის რომელიც 4ზე მეტია

[0, 0, 0, 0, 1, 0, 0, 0, 0]  -->  2
# ორი სხვადასხვა 4 სიგრძის მიმდევრობა

[0, 0, 0, 1, 0]  -->  0 
# ერთი მიმდევრობა არის 3 სიგრძის მეორე 1 სიგრძის ანუ არც ერთი არ არის ვალიდური და ფუნქციამ უნდა დაგვიბრუნოს 0 

[0, 0, 0, 1, 0, 0]  -->  0
# იგივე

[1, 2, 3, 4, 5]  -->  0
# საერთოდ არ გვაქვს მიმდევრობა

[]  -->  0
# ცარიელია


*/


//Task 9
/*
დაწერეთ ფუნქცია ციფრების ჯამი , sumOfDigits(n) რომელიც იღებს ერთ პარამეტრს 
და აბრუნებს გადაცემული მნიშვნელობის შემადგენელი ციფრების ჯამს . 
sumOfDigits(1312) = 1+3+1+2 = 7;

აღნიშნული დავალება შეასრულეთ ორნაირად , როგორც ჩვეულებრივი ასევე რეკურსიული
ფუნქციის გამოყენებით . 

hint : 15670 
1567 % 10 -> 7
156 % 10 -> 6
15 % 10 -> 5

n < 10 -> n 
*/

    function sumOfDigits(n) {
    if (n === 0) return 0;
    return (n % 10) + sumOfDigits(Math.floor(n / 10));
  }
    console.log(sumOfDigits(1312)); 

    function sumOfDigits(n) {
    let converted = '' + n;
    let splitted = converted.split('');
    return splitted.reduce((acc,cur) => {
    return acc = acc + +cur; 
     },0)
        }
    console.log(sumOfDigits(7777))
    
  