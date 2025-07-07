let input = document.querySelector("input");
let img = document.querySelector("img")
let coupon_code = "Vivek420";

const getCoupon = () => {
  //   console.log("hello");
  let x = new Promise((res, rej) => {
    if (coupon_code == input.value) {
      res("Get 50% off");
    } else {
      rej("Expired");
    }
  });

  x.then((res) => {
    console.log(res);
    img.src =
      "https://media.tenor.com/L5ixYM94LJQAAAAM/shaquille-o-neal-excited.gif";
  }).catch((err) => {
    console.log(err);
    img.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCPnWyrQXLz2QePGO_VvC9G8kLMbRFfCaiSZ7khBItxAKBW6K9QHW3fgPeh6t-uJSvJoQ&usqp=CAU";
  });
};

const getRes= ()=>{
setTimeout(getCoupon,2000)
}


// https://media.tenor.com/L5ixYM94LJQAAAAM/shaquille-o-neal-excited.gif

// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCPnWyrQXLz2QePGO_VvC9G8kLMbRFfCaiSZ7khBItxAKBW6K9QHW3fgPeh6t-uJSvJoQ&usqp=CAU