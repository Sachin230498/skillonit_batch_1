// Give me the names of emp living in Delhi
let emp_data = [
  { name: "Aman", age: 40, location: "Delhi" },
  { name: "Arjun", age: 45, location: "Haryana" },
  { name: "Vijay", age: 55, location: "Delhi" },
  { name: "Naman", age: 42, location: "Delhi" },
  { name: "Vidya", age: 45, location: "Kolkata" },
  { name: "Chunnu", age: 45, location: "Mumbai" },
];

// console.log(emp_data)

for(let i=0;i<emp_data.length;i++){
    // console.log(emp_data[i].location)
    if(emp_data[i].location == "Delhi" ){
        if(emp_data[i].age>=40 && emp_data[i].age<=50){
        console.log(emp_data[i].name)
        }
    }
}





