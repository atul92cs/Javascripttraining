let numbers=new Array(1,2,3,4,5);//old way of declaring array
console.log(numbers);
let jobs=['Backend developer','Database Admin','Frontend developer']; //new way of declaring array
console.log(jobs);
console.log(jobs[2]);
jobs[3]='Database developer'; //adding value at specifice position
console.log(jobs);
jobs.push('Designer'); //to add element at the end of the array
console.log(jobs);
jobs.unshift('Hr executive');
console.log(jobs);
jobs.pop(); //to remove elements from the end of the array
console.log(jobs);
jobs.splice(0,1);//to remove elements from starting of array
console.log(jobs);
let result=Array.isArray(jobs);
console.log(result);
console.log(jobs.indexOf('Database Admin'));
console.log(jobs.includes('Database Admin'));