
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


warmup.then(function(result){
  delay(1000, warmup)
})

function delay(milliseconds,name){
    //var warmup2 = new Promise(function (resolve, reject){
    //  resolve('yay i resolved')
    //  reject('oops i did it again')
  //})

    name.then(function(result){
      setTimeout(function(){
        console.log(result)
      }, milliseconds),
      function(err) {
        console.log(err)
      }
    })
 }
