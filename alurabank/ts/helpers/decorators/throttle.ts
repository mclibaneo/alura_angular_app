export function throttle(tempo = 500){
    return function(target : any, propertyKey : string, descriptor : PropertyDescriptor){
        const metodoOriginal = descriptor.value;
        let timer = 0;
        descriptor.value = function(...args : any[]){
            //o event ja vem omitido do metedo original            
            if(event) event.preventDefault();//para evitar que o form recarregue a pagina
            clearInterval(timer); //reseta o tempo toda vez que passa pelo metodo
            //posterga a execucao em 500 ms conforme padrao do metodo
            timer = setTimeout(() => metodoOriginal.apply(this, args), tempo);
        }
        return descriptor;
    }
}