// სტრინგები
// lenght
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length)
// slice
let text1 = "Apple, Banana, Kiwi";
let textslice = text1.slice(7, 13);
console.log(textslice)
// შესაძლებელია ასევე რიცხვების გამოყენება მინუსით. ხოლო ერთი რიცხვი უბრალოდ ამოჭრის ამ რიცხვამდე სტრინგს და დალოგავს დარჩენილ კონტენტს.
// substring
let str = "Apple, Banana, Kiwi";
let textstr = str.substring(7, 13);
console.log(textstr)
// replace
let textreplace = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText)
// toUpperCase-Lowercase
let text2 = "Hello World!";
let text3 = text2.toUpperCase();
console.log(text3)
// lowercaseს შემთხვევაში უბრალოდ შევცვლით toUpperCaseს toLowerCaseზე
// concat
let text4 = "Hello";
let text5 = "World";
let textconcat = text4.concat(" ", text2);
console.log(textconcat)
// trim
let texttrim = "      Hello World!      ";
let texttrimtest = texttrim.trim();
console.log(texttrimtest)
// trimstart - აშორებს სივრცეს დასაწყისიდან. trimend - აშორებს სივრცეს ბოლოდან
// padStart
let textpadding = "5";
let padded = textpadding.padStart(4,"0");
console.log((padded))
// პადინგის მზგავსია, უბრალოდ აქ სივრცის მაგივრად რიცხვს სვავს (ამ შემთხევვაში სამ ნულიანს) padEnd მოქმედებს ზუსტად იგივენაირად ოღონდ ბოლოდან.
// charAt
let textchar = "HELLO WORLD";
let char = textchar.charAt(0);
console.log(char)
// ირჩევს კონტენტს ინდექსით
// split - გადააქვს სტრინგი მასივში
text.split(",")    // ახალი მასივი მძიმედან
text.split(" ")    // ახალი მასივი გამოტოვებიდან
text.split("|")    // ახალი მასივი |დან
