// Logica de la aplicacion
function calcularFibonacci() {
    const domResult = document.getElementById('fibonacci');
    const fibonacci = [0,1];
    const inputUser = parseInt(prompt('Ingresa la cantidad de numeros que deseas ver de la secuencia de Fibonacci'));

    if (inputUser === parseInt(inputUser)) {
        for (let i = 1; i < inputUser-1; i++) {
            let temp = fibonacci[i] + fibonacci[i-1]
            fibonacci.push(temp)
        }
        domResult.innerText = fibonacci
    } 
    else {
        alert('Invalid Input')
        calcularFibonacci()
    }
}
calcularFibonacci()