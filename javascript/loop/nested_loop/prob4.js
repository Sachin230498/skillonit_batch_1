// Father is basically asking his son to plant 5 seeds in 5 farm but in horizontal fashion.

//sub problem 2: Doing the planting operation for 5 farms


for (let farm = 1; farm <= 5; farm++) {
  console.log("farm no is", farm);
  let bag = "";
  for (let seeds = 1; seeds <= 5; seeds++) {
    bag = bag + "*"  + " "
  }
  console.log(bag);
}




//bag = ""
//farm = 1 , 1<=5 
//clg("farm no is",1 )
//seeds = 1 , 1<=5 
// bag = ""+1
// clg("1")
//seeds = 2 , 2<=5 
// bag = "1"+2
// clg("12")
//seeds = 3 , 3<=5 
// bag = "12"+3
// clg("123")
//seeds = 4 , 4<=5 
// bag = "123"+1
// clg("1234")
//seeds = 4 , 5<=5 
// bag = "1234"+5
// clg("12345")

//bag = "12345"
//farm = 2 , 2<=5 
//clg("farm no is",2 )
//seeds = 1 , 1<=5 
// bag = "123456"+1
// clg("123451")
//seeds = 2 , 2<=5 
// bag = "1"+2
// clg("12")
//seeds = 3 , 3<=5 
// bag = "12"+3
// clg("123")
//seeds = 4 , 4<=5 
// bag = "123"+1
// clg("1234")
//seeds = 4 , 5<=5 
// bag = "1234"+5
// clg("12345")











// let jhola = "";
// for(let i =1;i<=5;i++){
//     jhola = jhola+ i + " "
   
//     // console.log(i)
// }
// console.log(jhola);

//jhola = ""
   // i = 1 , 1<=5  , jhola = "" + 1  clg("1")
//jhola = "1"
   // i = 2 , 2<=5  , jhola = "1" + 2  clg("12")
//jhola = "12"
// i = 3 , 3<=5  , jhola = "12" + 3  clg("123")
//jhola = "123"
   // i = 4 , 4<=5  , jhola = "123" + 4  clg("1234")
//jhola = "1234"
   // i = 5 , 5<=5  , jhola = "1234" + 5  clg("12345")



