const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf8');

const wordsCount = content.split(' ');

//const reactWordCount = wordsCount.filter(word => word.toLowerCase().includes('react')).length;
//Busqueda con expresion regular

const reactWordCount = content.match(/react/gi ?? []).length



console.log('Palabras: ', wordsCount.length)

console.log('Palabras React: ', reactWordCount);

