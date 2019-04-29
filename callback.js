// Async vs Synchronous
// function timer(callback, num, str, arr) {
//   // console.log(str);

//   // callback('the STRING');

//   var result = 'not changed';

//   setTimeout(function (data) {
//     result = 'changed in the timer';

//     callback(result, arr);
//   }, 3000);

//   console.log(result);
// }


// timer(function (asdfasfd, qwerwr) { console.log(asdfasfd, qwerwr) }, 2342432, 'some string', ['apple', 'orange']);



// var obj = {
//   then: function () {
//     console.log('yep, i am a method')
//   }
// }

// obj.then();


function doSomething(str) {
  // Promise is an Object Constructor -- creates an object -- you can pass args and the constructor
  // uses those to do custom things
  console.log('one');
  return new Promise(function (resolve, reject) {
    console.log('two');
    if (str === 'JD') {
      setTimeout(function () {
        console.log('three');
        resolve('Name is correct');
      }, 3000)
    } else {
      reject('Name is incorrect');
    }

  });
}


doSomething('JD')
  .then(function (asdfas) {
    console.log(asdfas);

    return 'passed on to the next';
  })
  .then(function (val) {
    console.log(val);
  })
  .then(function () {
    console.log('third thing');
  })
  .catch(function (err) {
    console.log(err);
  });

// var result = doSomething();

// console.log(result);





