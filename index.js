async function carregarDados() {
    // Lê dados do servidor
    const resposta = await fetch('dados.json');
    return resposta.json();
}

function rolarDados20(bonus, vantagem) {
    let resultado;
    let isCritical = false;
    const dado1 = Math.floor(Math.random() * 20) + 1;
    ;
    if (vantagem === "adv") {
        const dado2 = Math.floor(Math.random() * 20) + 1
        resultado = Math.max(dado1, dado2);
    } else if (vantagem === "dis") {
        const dado2 = Math.floor(Math.random() * 20) + 1
        resultado = Math.min(dado1, dado2);
    }
    if(resultado === 20){
        isCritical = true
    }
    return {
        resultado: resultado,
        bonus: bonus,
        total: resultado+bonus,
        critico: isCritical
    };
  }

console.log(rolarDados20(2,"adv"))