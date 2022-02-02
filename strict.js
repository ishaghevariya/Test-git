// 'use strict';

// // let hasDriversLicense = false;
// // const passTest = true;

// // if(passTest) hasDriversLicense = true;
// // if(hasDriversLicense) console.log('I can Drive :D');


// // // function fruitProcessor(apples,oranges){
// // //     const juice = `juice with ${apples} apples and ${oranges}`;
// // //     return juice; 
// // // }

// // // const appleJuice = fruitProcessor(2,5);
// // // console.log(appleJuice);
// // //function declaration
// // function calAge(birthYear){
// //     return 2022 - birthYear;
// // }

// // const result = calAge(2000);
// // console.log(result);

// // //function expresion
// // const calAge2 = function (birthYear){
// //     return 2022 - birthYear;
// // }


// // const result2 = calAge2(2000);
// // console.log(result2);


// // const calAge3 = birthYear => 2000 - birthYear;
// // const age = calAge(2000);
// // console.log(age);

// // const yearUntilRetirement = (birthYear,firstName) => {
// //     const age = 2022 - birthYear;
// //     const retirment = 65 - age;
// //    // return retirment;
// //    return `${firstName} retires in ${retirment} year`
// // }
// // console.log(yearUntilRetirement(2000,'isha'));

// // function cutFruitPics(fruit){
// //   return fruit * 4;
// // }

// // function fruitProcessor(apples,oranges){

// //     const applePices = cutFruitPics(apples);
// //     const OrangePices = cutFruitPics(oranges);

// //     const juice = `juice with ${applePices} apples pices and ${OrangePices} orange pices`;
// //     return juice; 
// // }
// // console.log(fruitProcessor(2,4));

// // const calcAverage = (a,b,c) => (a+b+c)/3;
// // console.log(calcAverage(3,4,5));

// // const scoreDolphins = calcAverage(44,23,71);
// // const scoreKoalas = calcAverage(65,54,49);

// // console.log(scoreDolphins,scoreKoalas);

// // const checkwinner = function(avgDolphins,avgKoalas){
// //     if(avgDolphins >= 2 * avgKoalas)
// //     {
// //         console.log(`dolphine win ${avgDolphins} vs ${avgKoalas}`);
// //     }else if(avgKoalas >= 2 * avgDolphins){
// //           console.log(`koalas win`);
// //     }else{
// //         console.log(`no win`);
// //     }
// // }

// // checkwinner(scoreDolphins,scoreKoalas);


// // function calTip(bill){
// //     return bill <=300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// // }

// // const bills = [125,55, 54];
// // const tips = [calTip(bills[0]),calTip(bills[1]),calTip(bills[2])];
// // console.log(bills,tips);
// // const total = [bills[0] + tips[0],bills[1]+tips[1],bills[2]+tips[2]];

// // console.log(total);

// // const oneWord = function(str){
// //     return str.replace(/ /g,'').toLowerCase();
// // }

// // const upperFirstWord = function(str){
// //     const [first , ...others] = str.split(' ');
// //     return [first.toUpperCase(),...others].join(' ');
// // }

// // const transformer = function(str,fn){
// //  console.log(`Transfor String:${fn(str)}`);
// // }

// // transformer('Javascrpit is the best',upperFirstWord);


// // const high5 = function(){
// //     console.log('👍');
// // }

// // document.body.addEventListener('click',high5);


// // const greet = function(greeting){
// //     return function(name){
// //         console.log(`${greeting} ${name}`);
// //     };
// // };
// // const greeterHey = greet('hey');
// // //console.log(greeterHey);
// // greeterHey('jonas');
// // greeterHey('dfd');

// // const lufthansa = {
// //     airline : 'jiosd',
// //     iataCode : 'LH',
// //     bookings :[],
// //     book(flightNum,name){
// //         console.log(`${name} book a seat on ${this.airline} flight${this.iataCode}${this.flightNum}`);
// //      this.bookings.push({flight:`${this.iataCode}`});
// //     }
// // };

// // lufthansa.book(239,'jona bjdjf');
// // lufthansa.book(455,'frrrfr');

// // const eurowing = {
// //     name:"Eurowing",
// //     iataCode:"EW",
// //     bookings:[],

// // };

// // const book = lufthansa.book;
// // //book(23,'sahjjsds');
// // book.call(eurowing,23,'fdfdfd');
// // console.log(eurowing);

// // book.call(lufthansa,4545,'fggfgf');
// // console.log(lufthansa);


// // const poll = {
// //    question : 'What is Your Favourite Programming Language?',
// //    options:['0:JavaScript','1:Python','2:Rust','3:C++'],
// //    answer:new Array(4).fill(0),
// //    registerNewAnswer(){
// //      const answer = number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write Option number)`   
// //      )
// //      );
// //      console.log(answer);
// //      typeof answer === 'number' && answer <this.answer.length && this.answer[answer]++;
// //      console.log(this.answer);
// //     },
// // };

// // document.querySelector('.')
// //poll.registerNewAnswer();



// // const accounts =[4545,566,5656,movements[]];
// // const bankDepositSum = accounts.map(acc => acc.movements);


// const Car = function(make,speed)
// {
//     this.make = make;
//     this.speed = speed;
// }
// Car.prototype.accelerate = function(){
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed}`);
// }
// Car.prototype.brake = function(){
//     this.speed -= 5; 
//     console.log(`${this.make} is going at ${this.speed}`);
// }
// const BMW = new Car('BMW',120);
// const mercedes = new Car('Mercedes',95);

// BMW.accelerate();
// BMW.accelerate();
// BMW.brake();
// BMW.accelerate();

