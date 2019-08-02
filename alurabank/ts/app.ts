//cria objeto controller
const controller = new NegociacaoController();
//add evento de clique do botao

//utilizando JQUERY
$('.form').submit(controller.adiciona.bind(controller));

/*document
    .querySelector('.form')
    .addEventListener(
        'submit', //tipo do evento - submit do form
        controller.adiciona.bind(controller) //acao a ser disparada, conecta ela a isntancia de controller
    );
*/

/*
Nesse sentido, se quisermos instalar os tsd das três bibliotecas 
    que foram citadas, fazemos:

npm install @types/jquery --save-dev
npm install @types/loadash --save-dev
npm install @types/underscore --save-dev
Qualquer tsd files que esteja dentro de 
    node_modules/@types será lidado automaticamente 
    pelo compilador do TypeScript.

É preciso se conformar 
    quando não houver do Typing para sua biblioteca preferida, 
    neste caso, a estratégia do declare var 
    que vimos neste treinamento é uma saída, 
    não muito ideal, 
    mas que permitirá seu código compilar 
    até que você encontre seu tsd.
*/