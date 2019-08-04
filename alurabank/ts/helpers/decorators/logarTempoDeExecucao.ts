//cria uma funcao que pode ser utilziada em qualquer parte do codigo
export function logarTempoDeExecucao(segundos : boolean = false){

    //esta funcao obtem o metodo original (target), seu nome (propertyKey) e seu valor (descriptor)
    return function(target : any, propertyKey : string, descriptor : PropertyDescriptor){
        //atribui o metodo original para a constatnte metodoOriginal
        const metodoOriginal = descriptor.value;
        //altera o descriptor mantendo as funcoes dos parametros que podem ser varias
        descriptor.value = function(...args : any[]){
            //cria logica para mudar tempo de execucao para segundos ou milisegudos
            let divisor = 1;
            let unidade = 'ms';
            if(segundos){
                divisor = 1000;
                unidade = 's';
            }
            console.log('----------------------------------');
            console.log(`Parametros do metodo ${propertyKey} : ${JSON.stringify(args)}`);
            const t1 = performance.now(); // o performance inicia um tempo de execucao
            //executa o metodo original
            const resultado = metodoOriginal.apply(this, args);
            console.log(`Resultado do metodo ${JSON.stringify(resultado)}`);
            const t2 = performance.now();
            console.log(`${propertyKey} demorou ${(t2 - t1)/divisor} ${unidade}`);
            console.log('----------------------------------');
            return resultado;
        }
        //retorna a funcao com metodo alterado
        return descriptor;
    }
}