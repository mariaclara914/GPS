// =========================
// ELEMENTOS DA TELA INICIAL
// =========================

const btnIniciar = document.getElementById("btnIniciar");
const inicio = document.getElementById("inicio");
const quiz = document.getElementById("quiz");

// =========================
// ELEMENTOS DO RESULTADO
// =========================

const botaoResultado = document.getElementById("botaoResultado");

const resultado = document.getElementById("resultado");

const grifinoriaTexto = document.getElementById("grifinoria");
const sonserinaTexto = document.getElementById("sonserina");
const corvinalTexto = document.getElementById("corvinal");
const lufalufaTexto = document.getElementById("lufalufa");

const casaFinal = document.getElementById("casaFinal");

// =========================
// INICIAR TESTE
// =========================

btnIniciar.addEventListener("click", () => {
    inicio.style.display = "none";
    quiz.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// =========================
// CALCULAR RESULTADO
// =========================

function calcularResultado() {

    let grifinoria = 0;
    let sonserina = 0;
    let corvinal = 0;
    let lufalufa = 0;

    // Verifica se todas as perguntas foram respondidas

    for (let i = 1; i <= 6; i++) {

        const resposta = document.querySelector(
            `input[name="q${i}"]:checked`
        );

        if (!resposta) {
            alert("Responda todas as perguntas antes de ver o resultado!");
            return;
        }

        switch (resposta.value) {

            case "grifinoria":
                grifinoria++;
                break;

            case "sonserina":
                sonserina++;
                break;

            case "corvinal":
                corvinal++;
                break;

            case "lufalufa":
                lufalufa++;
                break;
        }
    }

    // =========================
    // PORCENTAGENS
    // =========================

    const totalPerguntas = 6;

    const porcentagemGrifinoria =
        ((grifinoria / totalPerguntas) * 100).toFixed(1);

    const porcentagemSonserina =
        ((sonserina / totalPerguntas) * 100).toFixed(1);

    const porcentagemCorvinal =
        ((corvinal / totalPerguntas) * 100).toFixed(1);

    const porcentagemLufalufa =
        ((lufalufa / totalPerguntas) * 100).toFixed(1);

    // =========================
    // MOSTRA RESULTADOS
    // =========================

    grifinoriaTexto.textContent =
        `🦁 Grifinória: ${porcentagemGrifinoria}%`;

    sonserinaTexto.textContent =
        `🐍 Sonserina: ${porcentagemSonserina}%`;

    corvinalTexto.textContent =
        `🦅 Corvinal: ${porcentagemCorvinal}%`;

    lufalufaTexto.textContent =
        `🦡 Lufa-Lufa: ${porcentagemLufalufa}%`;

    // =========================
    // DEFINE A CASA PRINCIPAL
    // =========================

    const casas = [
        {
            nome: "🦁 Grifinória",
            pontos: grifinoria
        },
        {
            nome: "🐍 Sonserina",
            pontos: sonserina
        },
        {
            nome: "🦅 Corvinal",
            pontos: corvinal
        },
        {
            nome: "🦡 Lufa-Lufa",
            pontos: lufalufa
        }
    ];

    casas.sort((a, b) => b.pontos - a.pontos);

    casaFinal.textContent =
        `✨ O Chapéu Seletor acredita que sua casa é ${casas[0].nome}!`;

    // =========================
    // EXIBE O RESULTADO
    // =========================

    resultado.style.display = "block";

    resultado.scrollIntoView({
        behavior: "smooth"
    });
}

// =========================
// BOTÃO RESULTADO
// =========================

botaoResultado.addEventListener(
    "click",
    calcularResultado
);