import {Block} from '../../../utils/Block';
import tpl from "./tpl";
import './style.less';

export default class Talking extends Block {
    send() {
        const data: any = {};
        let formValidate = true;
        const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[type="text"],input[type="password"]');
        console.log(inputs);
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

    componentDidUpdate(oldProps, newProps): boolean {
        return oldProps['input'] !== newProps['input'];
    }

    render() {
        return this.compile(tpl);
    }

}



