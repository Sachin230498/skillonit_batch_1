// Father is asking his son to plant seeds, with the following commands
// 1 ==> *
// 2 ==> **
// 3 ==> ***
// 4 ==> ****
// 5 ==> *****

for (let farm = 1; farm <= 5; farm++) {
  console.log("farm no is", farm);
  for (let seeds = 1; seeds <= farm; seeds++) {
    console.log("*");
  }
}



// farm = 1, 1<=5 clg("farm no is", 1)
     //seeds = 1 , 1<= 1 , clg("*")
     //seeds = 2 , 2<= 1 
 
// farm = 2, 2<=5 clg("farm no is", 2)
     //seeds = 1 , 1<= 2 , clg("*")
     //seeds = 2 , 2<= 2 , clg("*")
     //seeds = 3 , 3<=2

// farm = 3, 1<=5 clg("farm no is", 3)
     //seeds = 1 , 1<= 3 , clg("*")
     //seeds = 2 , 2<= 3 , clg("*")
     //seeds = 3 , 3<= 3 , clg("*")
    