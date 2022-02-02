// //  const country = 'india';
// //  const continent = 'india celebrate all festival with full happiness.';
// //  let population = 1.65;
// //  const isLand = true;
// //  let language;
// //  language = "Gujarati";
// //  console.log(typeof language);
// //  console.log(typeof country);
// //  console.log(typeof continent);
// //  console.log(typeof population);
// //  console.log(typeof isLand);
// //  console.log(typeof language);


// // const massMarks=78;
// // const heightMark = 1.69;
// // const massJohn = 92;
// // const heightJohn = 1.95;

// // const BMIMark = massMarks /  heightMark ** 2;
// // const BMIJohn = massJohn / (heightJohn * heightJohn);
// // console.log(BMIMark,BMIJohn);

// // if(BMIMark > BMIJohn){
// //     console.log(`mark (${BMIMark}) is higher than john's(${BMIJohn})!`);
// // }else{
// //     console.log(`john(${BMIJohn}) BMI is higher than marks(${BMIMark})!`);
// // }

// // const bill = 430;
// // const tip = bill <=300 && bill >= 50 ? bill * 0.15 : bill * 0.20;
// // console.log(`This bill was ${bill},the tip was ${tip} , and the total value ${bill + tip}`);


// function findStringorNumber(str){
//     let value = str.split("");
//     let sum = 0;
//     let ch = "";
//     let wcount =0;
//     let result = 0;
//     for (i=0;i<value.length;i++){
//         if(+value[i]){
//             sum += +value[i];
//             console.log(sum);
//         }else{
//             ch += value[i];
//             console.log(ch);
//             wcount = ch.length;
//             console.log(wcount);
//         }
//     }
//      result = sum / wcount;
//      console.log(result); 
    
//     }
// findStringorNumber("hello346r");



// function findvowels(str){
//   let vowel = str.split("");
//   console.log(vowel);
//   let sum = "";
//   let count = 0;
//   for(let i = 0;i<vowel.length;i++){
      
//       if(vowel[i] == 'a' || vowel[i] == 'e' || vowel[i] == 'i' || vowel[i] == 'o' || vowel[i] == 'u' || vowel[i] == 'A' || vowel[i] == 'E' || vowel[i] == 'I' || vowel[i] == 'O' || vowel[i] == 'U')
//       {
//         sum += vowel[i];
//         count = sum.length;
//         console.log(count);
//       }
     
//   }
// }
// findvowels("aetiod");


// function reverse(str){
//   if(!str|| str.length<2 || typeof str !== 'string'){
//     return "please enter string";
// }

// const array = [];
// const length = str.length - 1;
// for(let i = length;i>=0;i--){
//     array.push(str[i]);
// }
// console.log(array);
// return array.toString();
// }

// function reverse2(str){
//     console.log( str.split("").reverse().join(''));
// }

// reverse2("hi my name id isha");


// function mergeArray(arr1,arr2){
//     let newarray = arr1.concat(arr2);//join
//     console.log(newarray);
// }

// mergeArray([0,4,7,8],[9,11,23]);



function countword(str){
    string = str.toLowercase;
    console.log(string);
   let  wcount = 0;
   let ncount = 0;
    for(let i = 0 ;i<str.length;i++){
        if(str.charAt(i)>='a'&&str.charAt(i)<='z'){
           wcount += 1;
        }
        if(str.charAt(i)>=0 && str.charAt<=9){
            ncount += Number(str.charAt(i));
        }

        let result = Math.round(ncount/wcount);
        console.log(result);
    }

}
countword("Hello09 !");