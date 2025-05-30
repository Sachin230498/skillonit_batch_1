// loop

// increment decrements

// let a = 5; 

// a = a*2;  // 10
// a = a/2;  // 10/2

// console.log(a)


// a = a + 5; 

// console.log(a)

// a = a+2;

// console.log(a)


// let b = 10;

// // b = b + 7;
// b+=7;  // b = b + 7;
// b-=2  // 15
// b*=2  // 30
// b/=3  // 10



// let x = 2;

// increment by 1

// x+=1;  // 2+1 = 3
// console.log(x)

// x++;  // 4  post increment
// console.log(x)

// ++x; // 5 pre increment
// console.log(x)

// x--;
// console.log(x)

// --x;
// console.log(x)



//post increment

// let x = 5;
// let y ;

// y =  x++; 

// console.log(x)  // 6
// console.log(y)  // 5


//pre increment

// let x = 5;
// let y ;

// y =  ++x; 

// console.log(x)  // 6
// console.log(y)  // 6




// a = 10;

// b = ++a;



// let z = 4;
// z++
// console.log(z++) // 5
// console.log(++z) // 6




//loop while loop

// intilize 
// while (condtion){ 
// code 
// iteration 
// }

// let a = 5;
// while(a<10){
//     console.log("hello")
//     a++;
// }

// 5<=10  "hello"  6
// 6<=10  "hello"   7
// 7<=10  "hello"   8
// 8<=10  "hello"   9
// 9<=10  "hello"   10
// 10<10  "hello"   11
// 11<=10  false




// print numbers from  15 to 5 

// let  i = 15;
// while(i>=5){
//     console.log(i)
//     i--;
// }

// i = 15 , 15>=5  , 15  , 14
// i = 14 , 14>=5  , 14  13
// i = 5 , 5>=5  ,   5   4
// i = 4 , 4>=5   


// for loop

// syntex for(intilize, condition, iteration){ code }

// for(let i = 1; i<=5; i++){
//     console.log(i, "hello")
// }


// nested for loop

for(let i = 1;i<=5;i++){  //upper loop
   console.log("i;s count" , i)
    for (let j = 1; j <= 5; j++) { //inner loop
         console.log("j's value", j)
    }

    console.log("************")

}

// i = 1 , 1<=5 , i;s count" , 1 ,
    // j =1 , 1<=5  j's value", 1
    // j =2 , 2<=5  j's value", 2
    // j =3 , 3<=5  j's value", 3
    // j =4 , 4<=5  j's value", 4
    // j =5 , 5<=5  j's value", 5
    // j =6 , 6<=5  false

// i = 2 , 2<=5 , i;s count" , 2 ,
    // j =1 , 1<=5  j's value", 1
    // j =2 , 2<=5  j's value", 2
    // j =3 , 3<=5  j's value", 3
    // j =4 , 4<=5  j's value", 4
    // j =5 , 5<=5  j's value", 5
    // j =6 , 6<=5  false
