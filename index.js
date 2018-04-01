//1.
/*
var warmup = new Promise(function (resolve, reject){
  resolve('hello promise, yay i resolved')
  reject('oops i did it again you got rejected')
})

warmup.then(function(result){
  setTimeout(function(){
    console.log(result)
  }, 1000),

  function(err) {
  console.log(err)
}
})
*/

//2.

var delay = function(milliseconds) {
  var promise = new Promise(function (resolve, reject) {
   setTimeout(function(){
      resolve(milliseconds)
      console.log(promise)
   }, milliseconds)
  })
  console.log(promise)
  return promise
}

/*
function countDown(milliseconds) {
  if (milliseconds > 0) {
    delay(milliseconds)
    console.log(milliseconds)
    countDown(milliseconds - 100)
  } else {
    console.log('done!')
  }
}

function countDown2(){
  if (milliseconds > 0) {
    console.log(milliseconds)
    return (milliseconds - 100)
  }else {
    console.log("done!")
  }
}
*/
var countDown = function(resolveFromDelay) {
  if (resolveFromDelay > 1) {
    console.log(resolveFromDelay)
    var promise = new Promise(function(resolve,reject){
      setTimeout(function(){
        //console.log(resolveFromDelay - 100)
        resolve(resolveFromDelay  - 100)
      }, 500)
    })

  } else if(resolveFromDelay === 0) {
    console.log('done!')
  }
    return promise
}
delay(1000).then(countDown).then(countDown).then(countDown).then(countDown).then(countDown).then(countDown).then(countDown).then(countDown).then(countDown).then(countDown).then(countDown)

/*
var firstMethod = function() {
   var promise = new Promise(function(resolve, reject){
      setTimeout(function() {
         console.log('first method completed');
         resolve({data: '123'});
      }, 2000);
   });
   return promise;
};


var secondMethod = function(someStuff) {
  console.log(someStuff)
   var promise = new Promise(function(resolve, reject){
      setTimeout(function() {
         console.log('second method completed');
         resolve({newData: someStuff.data + ' some more data'});
      }, 2000);
   });
   return promise;
};

var thirdMethod = function(someStuff) {
   var promise = new Promise(function(resolve, reject){
      setTimeout(function() {
         console.log('third method completed');
         resolve({result: someStuff.newData});
      }, 3000);
   });
   return promise;
};

firstMethod()
   .then(secondMethod)
   .then(thirdMethod).then(function(result){
     console.log(result)
   })
*/
