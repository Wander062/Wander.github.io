let display = document.getElementById('display');

function adicionarValor(valor) {
    if (display.value === 'Erro') limpar();
    display.value += valor;
}

function limpar() {
    display.value = '';
}

function calcular() {
    try {
        let expressao = display.value
            .replace(/×/g, '*')
            .replace(/%/g, '/100');
        
        let resultado = eval(expressao);
        
        if (isNaN(resultado) || !isFinite(resultado)) {
            throw new Error();
        }
        
        display.value = resultado;
    } catch (error) {
        display.value = 'Erro';
        setTimeout(limpar, 1000);
    }
}
