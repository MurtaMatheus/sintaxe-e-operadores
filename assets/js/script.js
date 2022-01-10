function verifica() {
    n1 = Number(prompt("Informe um número: "));
    n2 = Number(prompt("Informe outro número: "));
    let soma = n1 + n2;

    alert(`Os números ${n1} e ${n2} ${n1 == n2 ? "" : "não"} são iguais. Sua soma é ${soma}, que é ${soma > 10 ? "maior" : "menor"} que 10 e ${soma > 20 ? "maior" : "menor"} que 20`);

    verifica();

}

verifica();