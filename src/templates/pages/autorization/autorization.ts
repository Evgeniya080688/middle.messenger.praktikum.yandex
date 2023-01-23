import {Block} from '../../../utils/Block';
import tpl from './tpl';

//interface HTMLInputElement extends HTMLElement

export default class SignIn extends Block {

    render() {
        return this.compile(tpl);
    }

    validateForm() {
        const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[type="text"],input[type="password"]' );
        inputs.forEach((input: HTMLInputElement) => {
            //if (input.value && !input.dataset.noValidate) {
            if (input.value && input.name == 'login') {

                return (/^[a-zA-Z\-0-9]+@+(([a-zA-Z\-]+[a-zA-Z]\.)+[a-zA-Z]{2,})$/).test(input.value);
            } else if (input.value && input.name == 'email'){
                return (/^[a-zA-Z\-0-9]+@+(([a-zA-Z\-]+[a-zA-Z]\.)+[a-zA-Z]{2,})$/).test(input.value);
            }

        });

    }

    send() {
        const data: any = {};
        let formValidate = true;
        const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[type="text"],input[type="password"]' );
        inputs.forEach((input: HTMLInputElement) => {
            //if (input.value && !input.dataset.noValidate) {
            if (input.value) {
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

    addEvents() {
        //this._element.addEventListener('submit', test);

        // this._element.querySelectorAll('input').forEach((input: HTMLElement) => {
        //     input.addEventListener('blur', (<Props>this)._props.events.blur);
        //     input.addEventListener('focus', (<Props>this)._props.events.blur);
        // });
        //super.addEvents();
    }
}



