

let a = 1;
let bag = "";

 while(a<=5){

    bag = bag + " "+ a;
    a++;
 }

 console.log(bag);


//  dry run

// a = 1 , 1<=5 bag = "" + 1  bag = "1" clg("1")  a= 2
// a = 2   2<=5 bag = "1" + 2 bag = "12" clg("12") a = 3
// a = 3   3<=5 bag = "12" + 3 bag = "123" clg("123") a = 4
// a = 4   4<=5 bag = "123" + 4 bag = "1234" clg("1234") a = 5
// a = 5   5<=5 bag = "1234" + 5 bag = "12345" clg("12345") a = 6
// a = 6   6<=5