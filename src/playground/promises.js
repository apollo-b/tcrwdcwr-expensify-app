// Promises are good for asynchronous tasks that may resolve
// in an indeterminant time
const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        // resolve({message: 'This is my resolved data', other: 'stuff'});
        reject('Something went wrong, y\'all!');
    }, 5000);
});

console.log('before');

promise.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log('error: ', error )
});

console.log('after');