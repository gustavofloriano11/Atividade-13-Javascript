function exercicio1(){
    let numero1 = 0;
    let numero2 = 0;
    let diferenca = 0;
    let equacao = 0;
    numero1 = window.prompt("Digite um número: ")
    numero2 = window.prompt("Digite outro número: ")
    let numeroOrdenado = [numero1, numero2];
    if (numero2 > numero1){
        diferenca = numero2-numero1
    } else {
        diferenca = numero1-numero2
    }
    equacao = 2*numero1 + 3*numero2
    window.alert(`A diferença dos números é: ${diferenca}`)
    window.alert(`O dobro de ${numero1} somado com triplo de ${numero2}, é: ${equacao}`)
    window.alert(`A multiplicação das variáveis, é; ` + numero1*numero2)
    numeroOrdenado.sort(
        function(a, b){
            return b-a;
        }
    )
    console.log(numeroOrdenado)
};

function exercicio2(){
    let nomeUser = window.prompt("Digite seu nome: ")
    let salario = window.prompt("Digite seu salário: ")
    let taxaDesconto = 0.08
    let INSS = taxaDesconto*salario
    console.log(nomeUser)
    console.log(`Seu salário é: R$${salario}`)
    console.log(`Seu INSS é: R$` + INSS)
    console.log(`Seu salário líquido, é: R$` + (salario-INSS))
};

function exercicio3(){
    let nomeUser = window.prompt("Digite seu nome: ")
    let salario = window.prompt("Digite seu salário: ")
    console.log(nomeUser)
    if (salario <= 1000){
        let taxaDesconto = 0.08;
        console.log(`Seu salário é: R$${salario}`)
        console.log(`Seu desconto é de: ${taxaDesconto}`)
        let INSS = taxaDesconto*salario
        console.log(`Seu INSS é: R$` + INSS)
        console.log(`Seu salário líquido, é: R$` + (salario-INSS))
    } else if (salario >= 1000.01 && salario <= 1500){
        taxaDesconto = 0.085
        console.log(`Seu salário é: R$${salario}`)
        console.log(`Seu desconto é de: ${taxaDesconto}`)
        let INSS = taxaDesconto*salario
        console.log(`Seu INSS é: R$` + INSS)
        console.log(`Seu salário líquido, é: R$` + (salario-INSS))
    } else {
        taxaDesconto = 0.09
        console.log(`Seu salário é: R$${salario}`)
        console.log(`Seu desconto é de: ${taxaDesconto}`)
        let INSS = taxaDesconto*salario
        console.log(`Seu INSS é: R$` + INSS)
        console.log(`Seu salário líquido, é: R$` + (salario-INSS))
    }
};