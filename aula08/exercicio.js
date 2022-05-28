/*
Luíz Otávio Miranda tem 30 anos, pesa 84kg 
tem 1.8 de altura e seu IMC é de 25.92592592592524
Luiz Otávio nasceu em 1980
 */
const nome = 'Vinicius';
const sobrenome = 'Silva';
const idade = 26;
const peso = 100;
const altura = 1.75;
let imc = peso / (altura * altura); 
let anoNascimento =  2022 - idade

console.log( nome, sobrenome, 'tem', idade, 'pesa', peso,'kg',  
    'tem', altura, 'de altura e seu imc é de', imc,
    nome, 'nasceu em', anoNascimento)

//com Template strings 

console.log(`${nome} ${sobrenome} tem ${idade} pesa ${peso}kg tem ${altura} de altura e seu imc é de ${imc} ${nome} nasceu em ${anoNascimento}`)