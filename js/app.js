// 1)Prompdan daxil olan ədədin faktorialini tapin
// function factorial(n){
//     if(n < 0){
//         return "Eded musbet olmalidir"
//     }
//     if(n == 0 || n == 1){
//         return 1;
//     }else{
//         return n * factorial(n-1);
//     }
// }
// let n = +prompt("Ededi daxil edin");
// answer = factorial(n)
// console.log("Factorial of " + n + " : " + answer);

// 2)Arrayin içərisindəkiləri kiçikdən böyüyə göstərin

// let numbers = [-5, -7, 0, 12, -55, 31, 13, 75, 81, 100];
// numbers.sort(function(a, b){
//     return a - b});
// console.log(numbers);      


// 3)Arraydaki sadə ədədləri göstərin
// let a = [68, 5, 26, 32, 43, 3];

// function sadeEded() {
//   let b = [];

//   for (let i = 0; i < a.length; i++) {
//     let x = a[i];
//     let count = 0;
//     for (let y = 1; y <= x; y++) {
//       if (x % y === 0) {
//         count++;
//       }
//     }
//     if (count === 2) {
//       b.push(x);
//     }
//   }
//   console.log(b);
// }
// sadeEded();


// 4)Stringdə olan saitleri ve onlarin sayini tapin

// let word = prompt("Sozu daxil edin")

// function vowel(word) {
//   let vowel_list = 'aeiou';
//   let count = 0;

//   for(var a = 0; a < word.length ; a++) {
//     if (vowel_list.indexOf(word[a]) !== -1) {
//       count += 1;
//     }
//   }
//   return count;
// }
// console.log(`Daxil edilen soz: ${word}`);
// console.log(`Saitlerin sayi: ${vowel(word)}`)

// 5)Promptdan n sayda ədəd daxil olacaq 
// daxil olunan ədədlər arasinda ən böyüyü tapin


// var a = prompt("Nece ededden ibaret massiv isteyirsiniz?")
// let arr = []

// for (let i = 0; i < a; i++) {
//     arr[i] = prompt(`${i+1}. elementi daxil edin`)
// }

// console.log(arr);
// console.log(`Maximum value of given array is ${Math.max(...arr)}`);



// 6)Verilən cümlədə bütün sözlerin baş hərfini böyüdün

// let a = prompt("Metni daxil edin: ").split(" ");
// function capitalized() {
//   for (var i = 0; i < a.length; i++) {
//     a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
//   }
//   console.log(a.join(" "));
// }
// capitalized();


// 7)Verilən ədəddən sonraki ilk sade ədədi tapin

// let a = prompt("enter a number");
// function sadeEded(a) {
//   a++;
//   while (true) {
//     let counter = 0;
//     for (let i = 0; i <= a; i++) {
//       if (a % i == 0) {
//         counter++;
//       }
//     }
//     if (counter == 2) {
//       return console.log(`${a}`);
//     }
//     a++;
//   }
// }
// sadeEded(a);

// 8)Verilən array sonu 9 bitən ədəd varmi? Varsa True, yoxsa False ekrana cixardin
// let a = prompt("Nece eded daxil edeceksiniz?");
// let arr = [];

// let counter = 0;

// for (let i = 0; i < a; i++) {
//   arr[i] = prompt(`enter number ${i + 1}`);
//   if (arr[i] % 10 === 9) {
//     counter++;
//   }
// }

// console.log(`Daxil olunan ededler &{arr}`);
// console.log(`Sonu 9-la biten ededlerin sayi: ${counter}`);

// 9)Daxil etdiyimiz array-de neçə cüt element var. Bunu tapan funksiya yazin

// let a = +prompt("Nece ededden ibaret massiv isteyirsiniz?")
// let arr = []

// for (let i = 0; i < a; i++) {
//     arr[i] = +prompt(`${i+1}. elementi daxil edin`)
// }

// console.log(`Daxil edilen ededler: ${arr}`);
// let counter = 0;

// function findEvenNumber(){
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] % 2 === 0) {
//           counter++;
//         }
// }
// }
// findEvenNumber();
// console.log(`Cut ededlerin sayi: ${counter}`);
// 10)Array içerisində 0-9 kimi rəqəmlər var,1 catmir onu tapin

// let a = prompt("Bir setirde bosluqlar qoyaraq 0-9 arasi ededler daxil edin, ancaq birisi xaric").split(" ").sort(function (a, b) {return a - b});
// function finder() {
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] != i) {
//       return console.log(`${i}`);
//     }
//   }
// }
// finder();

// 11)Daxil olunan stiringin ilk hərfini böyüyə çevir
//  let a = prompt("enter a word");
//  let b = a.charAt(0).toUpperCase() + a.slice(1);
//  console.log(b);

// 12)Arrayda forla ədədləri 5 vahid artirmaq

// let a = +prompt("Nece ededden ibaret massiv isteyirsiniz?")
// let arr = []

// for (let i = 0; i < a; i++) {
//     arr[i] = +prompt(`${i+1}. elementi daxil edin`)
// }

// console.log(`Daxil edilen ededler: ${arr}`);
// let counter = 0;

// for(let j = 0; j < arr.length; j++){
//     arr[j]+= 5
// }

// console.log(arr);

// 13)n = 7
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6
// 1 2 3 4 5 6 7

// let a = 7
// let b = ""
// for(let i = 1; i <= a; i++){
//     for (let j = 1; j <= i; j++) {
//         b += j + " "
//     }
//     b += "\n"
// }
// console.log(b)



// 14) a = 4, b = 5
// * * * *
// *     *
// *     *
// *     *
// * * * *

// var col = 4;
// var row = 5;
// var a = "";

// for(let i = 1; i <= col; i++){
//     for(let j = 1; j <= row; j++){
//         if (j == 1 || j == row || i == 1 || i == col) {
//             a += "* "
//         }
//         else{
//             a += "  "
//         }
//     }
//     a+="\n"
// }
// console.log(a);

// 15) Fibonacci sequence-ni recursion ile edin 

// function fibonacci(n) {
//   if (n <= 1) {
//     return 1;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// }
// console.log(fibonacci(8));

// 16)ES6 ve ondan sonrakilar nədir?

// ES6 ve ondan sonra gelenler javascriptin versiyalari adlanir.
// hansiki ES6-dan once de versiyalar var idi ve iller kecdikce
// bu versiyalar inkisaf ede ede gedir ve ozleri ile bir sira yeni 
// elementler getirir hal hazirda meselen es6 ozu ile
// let ve const keywordlerini
// promises
// arrow function 
// multi-line strings ve.s kimi parametrleri getirib

// 17)Closure funksiyası haqqında ətraflı məlumat yazın.(misal verin)

// Closure funksiyasi odur ki deyisenin ozu 
// basqa scope-un daxilinde olunsa da oz deyerini
// itirmir yeni onu qoruyub saxlaya bilir


// 18)Hoisting dedikdə nə başa düşürsüz?

// Normalda kodlar yuxaridan asagi sinxron sekilde oxunur
// ve o sekilde de funksiya icra edilir.Ancaq hoistingde 
// deyiseni yuxarida declare etmesek bele asagida etmisikse 
// o icra olunur.Lakin bu butun hamisina aid edilmir.
// Meselen var-da bu odenir lakin let ve const-da bu odenmir.

// 19)HOF nəyə deyilir?

// High ordered function- yeni yuksek seviyyeli funksiya da 
// adlandirilir. Diger funksiyalar uzerinde emeliyyatlar gore
// bilen funksiyalardir.Bu funksiyalar 1 ve daha cox funskiyalari
// arqument kimi goturur ve neticeni de funksiya kimi qaytara biler.
// Ve sonda birini ve daha coxunu yuksek funksiyali edir.

// 20)Callback nədir?
// Funksiyaya ozu arqument ve ya parametr kimi geden
// funksiya callback function adlandirilir.
// 21)Data types neçə dənədir və hansılardır?
// Data tipleri 2 yere bolunur
// Primitive ve Non-primitive(reference)

// Primitive:
// String
// Boolean
// Number
// null
// undefined

// Non-primitive:
//function 
// Object data tipi de adlanir:
// array class interface daxildir

// 22)Let ve const fərqi nələrdir?

// Bir deyisen eger constla declare olunubsa onu deyise bilmerik
// yeni o sabit qalmalidir adindan da oldugu kimi. Let ile 
// teyin olunan bir deyisken uzerinde ise muxtelif emeliyyatlar apara bilerik
// elave olaraq her ikisinin ortaq ozelliyine gelsek let ve constun
// her ikisi block-scope elementlerdir.

// 23)Recursion funksiya nədir və if else olmadan yazmaq mümkündür?

// Bir emeliyyati rekursiv funksiya ile yazmaq daha rahat hala getirir ancaq 
// rekursiv funksiyanin ozu cetindir.Rekursiv funksiya qarisiq olan bir funksiyani
// daha oxunaqli ve sade hala getirir.Rekursiv funksiyalara fibonaccini misal gostermek olar
//if else olmadan da yazmaq mumkundur.


// 24)SetTimeout() asinxron yoxsa sinxron funksiyadır ? Ve misal ile izah edin

// setTimeout() asinxron funksiyadir.Yeni ki bu funksiya
// digerinin bitmesini gozlemir yeni hansi tez icra olunmalidisa
// o birinci icra olunur daha sonra digerleri zamanina gore icra olunmaga bashlayir.
// 5000 ve 6000 5 ve 6 saniyeye uygun gelir
// setTimeout(() => {
//     console.log("this is the first message")}, 1000);
// setTimeout(() => {
//     console.log("this is the second message")}, 2000);
// setTimeout(() => {
//     console.log("this is the third message")}, 3000);

// 25)Hansı method arrayı string’e çevirir?

// join()
