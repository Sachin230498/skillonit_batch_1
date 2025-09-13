const fs = require("fs")

// create file 
fs.writeFileSync("notes.txt", "Hello FS module")

// Append text

fs.appendFileSync("notes.txt", "\nAdding more notes")

// read file
fs.readFile("notes.txt", "utf-8", (err,data)=>{
    if(err) throw err ;

    console.log(data)
})

// rename file

fs.renameSync("notes.txt", "myNotes.txt")


// Delete

fs.unlinkSync("myNotes.txt")