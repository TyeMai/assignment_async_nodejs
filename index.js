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

var countDown = function(resolveFromDelay) {
  if (resolveFromDelay > 1) {
    console.log(resolveFromDelay)
    var promise = new Promise(function(resolve,reject){
      setTimeout(function(){
        resolve(resolveFromDelay  - 100)
      }, 500)
    })
  } else if(resolveFromDelay === 0) {
    console.log('done!')
  }
    return promise
}

//delay(1000).then(countDown).then(countDown).then(countDown).then(countDown).then(countDown).then(countDown).then(countDown).then(countDown).then(countDown).then(countDown).then(countDown)

// 3.

var squaring = function(num){
  var promise = new Promise(function(resolve,reject){
    if (typeof(num) === "number" ) {
      resolve(num * num)
    } else {
      reject("sorry thats not a number")
    }
  })
  return promise
}

var num = [1,2,3,4,5,6,7,8,9]
num = num.map(function(i) {
  return squaring(i)
})

Promise.all(num)
  .then(function(results) {
    console.log(results);
  });
