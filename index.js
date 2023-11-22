
let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

function dadosVinte(status, vantagem) {
    let bonus = calcularBonus(status)
    let resultado = bonus;
    let isCritical = false;
    const dado1 = Math.floor(Math.random() * 20) + 1;

    if(vantagem === "adv"){
        const dado2 = Math.floor(Math.random() * 20) + 1;
        resultado += Math.max(dado1, dado2);
    }else if(vantagem === "dis"){
        const dado2 = Math.floor(Math.random() * 20) + 1;
        resultado += Math.min(dado1, dado2);
    }else {
        resultado += dado1;
    }
    
    if((resultado - bonus) === 20){
        isCritical = true;
    }

    return dVinte = {
        resultado: resultado,
        critico: isCritical
    };
}

function dadosNormal(rolagens, lados, critico, status){
    const dados = [];
    let resultado = calcularBonus(status);

    if(critico){
        rolagens*=2;
    }
    for (let i = 0; i < rolagens; i++) {
        const dado = Math.floor(Math.random() * lados) + 1;
        dados.push(dado);
        resultado += dado;
    }
    return {
        dados: dados,
        resultado: resultado
    }
}

function calcularBonus(status){
    let modificadores = [-10, -5, -4, -4, -3, -3, -2, -2, -1, -1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5];
    return modificadores[status];
}

console.log(dadosVinte(20));

console.log(dadosNormal(2,6,dVinte.critico,12));
