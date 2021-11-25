// Selection Sort Algorithm - O(n²)

//1. Localizando o menor valor em um array
function buscaMenorIndice(array) {
  let menorElemento = array[0] //Guarda o menor valor
  let menorIndice = 0 //armazena o indice do menor valor

  for (var i = 1; i < array.length; i++) {
    if (array[i] < menorElemento) {
      menorElemento = array[i]
      menorIndice = i
    }
  }

  return menorIndice
}

// 2. Ordenando o array

function ordenanacaoPorSelecao(array) {
  let novoArray = []
  let tamanho = array.length

  for (var i = 0; i < tamanho; i++) {
    //Localiza o menor elemento no array
    var menorIndex = buscaMenorIndice(array)

    //Adiciona o menor elemento no novo array
    novoArray.push(array.splice(menorIndex, 1)[0])
  }

  return novoArray
}

var arrayExemplo = [5, 3, 6, 1, 10]
// var indice = buscaMenorIndice(arrayExemplo)
console.log(
  'Mostra a posição do menor índice no array [' +
    arrayExemplo +
    '] que é o número ' +
    arrayExemplo[buscaMenorIndice(arrayExemplo)] +
    ' na posição ' +
    buscaMenorIndice(arrayExemplo) +
    ' do array'
)

console.log('--------/Ordenada/---------')

console.log('Array Ordenado ' + ordenanacaoPorSelecao(arrayExemplo)) // [2, 3, 5, 6, 10]
