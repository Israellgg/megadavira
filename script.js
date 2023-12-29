// Definir blocos de números diretamente em JavaScript
var blocos = [
  {
    nome: 'Tiago e Pri',
    numeros: [
      [7, 18, 30, 42, 49, 56],
      [9, 17, 26, 38, 44, 59],
      [2, 14, 27, 36, 48, 55],
      [11, 20, 33, 41, 50, 60]
    ]
  },
  {
    nome: 'Manu e Ade',
    numeros: [
      [57, 25, 23, 11, 8, 9],
      [14, 16, 33, 57, 54, 6],
      [10, 14, 7, 28, 41, 60],
      [25, 49, 5, 57, 9, 23]
    ]
  },
  {
      nome: 'Joaozin e Gracinha',
      numeros: [
        [3, 5, 16, 35, 55, 49],
        [8,11, 44, 47, 49, 60],
        [4, 20, 22, 25, 27, 29],
        [7, 8, 10, 25, 27, 31]
      ]
    },
    {
      nome: 'Israel e Tamara',
      numeros: [
        [5, 14, 17, 18, 41, 51],
        [1, 6, 27, 28, 35, 49],
        [18, 23, 7, 26, 30, 58],
        [2, 22, 36, 43, 44, 60]
      ]
    },
];

// Exibir blocos na página
var blocosContainer = document.getElementById('blocosContainer');

// Função para criar um bloco de números
function criarBloco(bloco) {
var blocoDiv = document.createElement('div');
blocoDiv.classList.add('bloco');

var nomeDiv = document.createElement('div');
nomeDiv.classList.add('nome');
nomeDiv.textContent = bloco.nome;
blocoDiv.appendChild(nomeDiv);

bloco.numeros.forEach(function(lote) {
  lote.sort(function(a, b) {
    return a - b; // Ordena os números em ordem crescente
  });

  var loteDiv = document.createElement('div');
  loteDiv.classList.add('lote');

  // Novo elemento para a soma de acertos
  var somaDiv = document.createElement('div');
  somaDiv.classList.add('soma');
  loteDiv.appendChild(somaDiv);

  lote.forEach(function(numero) {
    var numeroSpan = document.createElement('span');
    numeroSpan.classList.add('numero');
    numeroSpan.textContent = numero;
    loteDiv.appendChild(numeroSpan);
  });

  blocoDiv.appendChild(loteDiv);
});

return blocoDiv;
}

// Criar e adicionar os blocos à página
blocos.forEach(function(bloco) {
var blocoElement = criarBloco(bloco);
blocosContainer.appendChild(blocoElement);
});


function destacarNumeros() {
  // Remova realces existentes
  var numeros = document.querySelectorAll('.numero');
  numeros.forEach(function(numero) {
    numero.classList.remove('highlight');
  });

  // Obtém o valor da barra de pesquisa
  var valor = document.getElementById('numeroInput').value.trim();

  // Destaque os números correspondentes e calcule a soma
  if (valor !== "") {
    var numerosPesquisa = valor.split(',').map(function(numero) {
      return numero.trim();
    });

    var lotes = document.querySelectorAll('.lote');
    lotes.forEach(function(lote) {
      var numerosLote = lote.querySelectorAll('.numero');
      var acertos = 0;

      numerosLote.forEach(function(numero) {
        var numeroAtual = numero.textContent;

        // Destaca os números correspondentes
        if (numerosPesquisa.includes(numeroAtual)) {
          numero.classList.add('highlight');
          acertos++;
        }
      });

      // Atualiza a soma de acertos no quadrado ao lado do lote
      var somaDiv = lote.querySelector('.soma');
      somaDiv.textContent = 'Acertos: ' + acertos;
    });
  }
}
