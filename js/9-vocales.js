// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

let frase = prompt('Ingrese una frase');
let vocales = '';

for(i = 0; i < frase.length; i ++) {
    const caracter = frase.charAt(i);

    if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u' || 
      caracter === 'A' || caracter === 'E' || caracter === 'I' || caracter === 'O' || caracter === 'U') 
      {
    vocales += caracter;
      }
}

document.write('Vocales encontradas: ' + vocales);