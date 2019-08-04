export function domInject(seletor : string){
    return function(propriedadeAlvo : any, propriedadeNome : string){
        let elemento : JQuery;
        const getter = function(){
            //verifica se o elento ja nao foi buscado
            if(!elemento){
                console.log(`buscando elemento ${seletor} para injetar em ${propriedadeNome}`);
                elemento = $(seletor);
            }
            //retorna o elemento caso ele ja foi buscando anteriormente (lazyloading)
            return elemento;
        }
        //aqui a funcao subtitui a propriedade original
        Object.defineProperty(propriedadeAlvo, propriedadeNome ,{
            get : getter
        });
    }
}