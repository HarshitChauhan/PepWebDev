let fs=require("fs");


//promise
let pendingPromise=fs.promises.readFile("./f1.txt");

//success 
pendingPromise.then(function (data) {
    console.log("Inside Success 1st");
    console.log(data+"");
    // let f2=fs.promises.readFile("./f1.txt");
    return data;
})
.then(function (data) {
  console.log("Inside Success 2nd");
  console.log(data + "");
})
.then(function (data) {
  console.log("Inside Success 3rd");
  console.log(data + "");
});