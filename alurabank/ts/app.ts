//cria objeto controller
const controller = new NegociacaoController();
//add evento de clique do botao
document
    .querySelector('.form')
    .addEventListener(
        'submit', //tipo do evento - submit do form
        controller.adiciona.bind(controller) //acao a ser disparada, conecta ela a isntancia de controller
    );