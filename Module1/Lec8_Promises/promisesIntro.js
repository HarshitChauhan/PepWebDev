let fs=require("fs");

//promise
let pendingPromise=fs.promises.readFile("./f.txt");
console.log(pendingPromise);

//success 
pendingPromise.then(function (data) {
    console.log(pendingPromise);
    console.log("Inside Success");
    console.log(data+"");
});


// failure
pendingPromise.catch(function(error){
    console.log(pendingPromise);
    console.log("Inside Failure");
});