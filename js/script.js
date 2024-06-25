var operacao;
document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', function () {
        // Remove a classe 'active' de todas as divs
        document.querySelectorAll('.grid-item div').forEach(div => div.classList.remove('active'));

        const activeDiv = this.querySelector('div');
        activeDiv.classList.add('active');

        // Pega o valor do conteúdo da div clicada
        operacao = activeDiv.innerText;
    });
});

var calc = document.getElementById("calc");
let p = document.getElementById("result");

calc.addEventListener('click', function () {
    document.querySelectorAll('.grid-item div').forEach(div => div.classList.remove('active'));
    let num1 = parseFloat(document.getElementById("number1").value);
    let num2 = parseFloat(document.getElementById("number2").value);
    let result;
    console.log(operacao)
    switch (operacao) {
        case 'x':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        default:
            result = 'Selecione uma operação';
    }
   document.getElementById("number1").value = '';
   document.getElementById("number2").value = '';
   p.textContent = 'Resultado: ' + result
})

