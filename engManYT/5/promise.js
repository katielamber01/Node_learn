const promise = new Promise((resolve, reject) => {
  resolve("good");
  //reject('bad')
});
promise
  .then((value) => {
    // throw 'really bad' // this will become err
    console.log(value);
    return 1;
  })
  .then((value) => {
    console.log(value);
    return 2;
  })
  .then((value) => {
    console.log(value);
    return 3;
  })
  .then((value) => {
    console.log(value);
    return 4;
  })
  .then((value) => {
    console.log(value);
    return 5;
  });
