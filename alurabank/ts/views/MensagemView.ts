import { View } from './index';
export class MensagemView extends View<String>{

    template(modelo : string) : string{
        return `
            <p class="alert alert-info">${modelo}</p>
        `;
    }
}