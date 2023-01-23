import {Block} from '../../../utils/Block';
import tpl from "./tpl";
import './style.less';

export default class ChatList extends Block {
    send() {
        const data: any = {};
        let formValidate = true;
        const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[type="text"],input[type="password"]' );
        inputs.forEach((input: HTMLInputElement) => {
            //if (input.value && !input.dataset.noValidate) {
            if (input.value ) {
                data[input.name] = input.value;
            } else {
                formValidate = false;
            }

        });
        if (formValidate) {
            //authController.signIn(data);
        }
        console.log(data);
    }

    render() {
        return this.compile(tpl);
    }

}



