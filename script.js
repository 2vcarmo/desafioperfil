// Declarando como variável global o ID do botão simular.
let simular = document.getElementById("simular");

// Declasração de variáveis.
let nome = document.getElementById("nome");
let idade = document.getElementById("idade");
let rendaMensal = document.getElementById("renda mensal");
let perfil = document.getElementById("perfil do Investidor");
let select = document.getElementById("sexo");
const resultado = document.getElementById('resultado');


const perfilDeInvestidor = {
    simSemExperiencia: {
        conservador: 10,
        dinamico: 90
    },
    simComExperiencia: {
        dinamico: 35,
        arrojado: 65
    },
    naoComExperiencia: {
        dinamico: 77,
        arrojado: 23
    },
    naoPoucaExperiencia: {
        conservador: 64, 
        dinamico: 36
    },
    naoSemExperiencia: {
        ultraConservador: 60,
        conservador: 40
    },
}

const produtoConhecido = {
    poupanca: {
        ultraConservador: 60,
        conservador: 40
    },
    tesouro: {
        dinamico: 40,
        arrojado: 60
    },
    produtos: {
        dinamico: 22,
        arrojado: 78
    },
    nuncaInvestiuMasConhece: {
        conservador: 73,
        dinamico: 27
    },
    nuncaInvestiuNaoConhece: {
        ultraConservador: 60,
        conservador: 40
    },

}

function perfilDoInvestidor(){
    if (perfilDeInvestidor == simSemExperiencia && produtoConhecido == poupanca){

    }
}


// Condicional que irá verificar se o usuário é maior de idade.
if (idade >= 18){

} else {
    console.log("VocÊ precisa ser maior de idade para investir.");
}    



// Diagnóstico do usuário: 

resultado.innerHTML = 
`<strong>Diagnóstico:</strong><br><br>
<strong>Perfil do Investidor:</strong> ${perfil}<br>`

//Adicionando a ação de clicar no botão "SIMULAR" e mostrar o resultado
simular.addEventListener('click', perfilDoInvestidor);