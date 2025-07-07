let password = "123321";
let pass = document.getElementById("pass")
let img = document.getElementById("img")

function check(){
    // console.log("hello")
    let promise = new Promise(function(res,rej){
      if(password == pass.value){
           res("Yess image")
      }else{
         rej("wrong image")
      }
    })

    promise.then(function(res){
         img.src ="https://gifsec.com/wp-content/uploads/2022/09/yes-gif-1.gif";
         console.log(res)
    }).catch(function(err){
        img.src = "https://media.tenor.com/WqpiNQKLg48AAAAM/no.gif";
    })
}

function check1(){
    setTimeout(check,2000)
}
