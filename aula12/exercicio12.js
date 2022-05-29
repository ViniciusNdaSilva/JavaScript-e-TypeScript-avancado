let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A 

// Forma antiga de resolver 

// const varATemp = varA;
// varA = varB;
// varB = varC;
// varC = varATemp;

// Forma atual 

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);