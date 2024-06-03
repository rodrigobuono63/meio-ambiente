const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:"Como podemos reduzir a poluição do ar nas grandes cidades?",
        alternativas: [
            " Promover o uso de transportes públicos e alternativos: Incentivar a utilização de ônibus, metrôs, bicicletas e caminhadas através de melhorias na infraestrutura e criação de campanhas de conscientização ",
            " Implementar zonas de baixa emissão: Criar áreas onde o tráfego de veículos altamente poluentes seja restrito ou proibido, incentivando o uso de veículos elétricos e híbridos "
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();

