// core modules are built-in modules that come with node.js

// fs - used to work with file and foleds (write , update , delete)

// create files
// read files
// update files
// Delete files
// Rename files
// Work with folder

// synchronous way

const fs = require("fs")


// // create file
// fs.writeFileSync("example.txt", "Hello Backend")

// Asyn
// const fs = require("fs")


// // create file
//  fs.writeFile("example.txt", "Hello Backend Async", (err)=>{
//        if(err){
//         console.log(err)
//        }

//        console.log("file created")
//  })


const data = fs.readFileSync("example.txt", "utf-8");
const data1 = fs.readFile("example.txt", "utf-8" ,(err,data)=>{
    if(err) throw err

    // console.log(data)
});

// console.log(data1)


// update file

//   fs.appendFileSync("example.txt", "\nNamaste");

//   fs.writeFileSync("example.txt" , "This is Backend");


// fs.unlink()

// fs.rename("example.txt", "newname.txt", (err)=>{
//     if(err) throw err

//     console.log("file renamed")
// });


// fs.mkdirSync()