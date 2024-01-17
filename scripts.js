const inputUser = parseInt(prompt('Ingresa la cantidad de numeros que deseas ver de la secuencia de Fibonacci'));
const fibonacci = [0,1];
const domResult = document.getElementById('fibonacci');

for (let i = 1; i < inputUser-1; i++) {
    let temp = fibonacci[i] + fibonacci[i-1]
    fibonacci.push(temp)
    console.log(fibonacci)
}

domResult.innerText = fibonacci
