let fname = 'Cristian';
let lname = 'Ronaldo';
let age = prompt("Masukkan umur crhistian ronaldo!");

// cara lama
// let result = fname + ' ' + lname + 'is' + age + 'years old';
// alert(result);

//memakai template strings 
let result = `${fname} ${lname} is ${age} years old`;
alert(result);