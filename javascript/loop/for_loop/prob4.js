// find the sum of even and odd from 1 to 10

// 2+4+6+8+10 =  30
// 1+3+5+7+9  =  25


let esum = 0;
let osum = 0;

for(let i = 1;i<=10;i++){
    
    if(i%2==0){
    //    console.log("even no is", i) 
    esum = esum + i
   
    }else{
        // console.log("odd no is", i)
        osum+=i
    }
    // console.log(i)
}

// console.log("even num sume is", esum);
// console.log("odd num sume is", osum);





// 1 to 5 
// 1+2+3+4+5 = 15/5


let sum = 0;
let count = 0;
for (let i = 1; i <= 5; i++) {
    sum+=i;
    count++;
   
}
console.log(sum/count)
