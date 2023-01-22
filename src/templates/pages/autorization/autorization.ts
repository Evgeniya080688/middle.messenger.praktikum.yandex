import {Block, Props} from '../../../utils/Block';
import tpl from "./tpl";
import Input from "../../components/input/input";
import Submit from "../../components/submit/submit";

export default class SignIn extends Block {
    constructor(...props: Props[]) {
        // Создаём враппер дом-элемент input
        super("div", {...props,
            login: new Input ({
                name: 'login',
                label: 'Логин',
                type: 'text',
                value: '',
                placeholder: 'Введите логин',
                required: true,
                stl: {input: 'form-input', label: 'form-label'}
            }),
            password: new Input ({
                name: 'password',
                label: 'Пароль',
                type: 'password',
                value: '',
                placeholder: 'Введите пароль',
                required: true,
                stl: {input: 'form-input', label: 'form-label'}
            }),
            submit: new Submit ({
                id: 'signin',
                value: 'Войти',
                stl: {button: 'submit-button'},
                events: {
                    click: (e: Event) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log('Я сейчас отправлю форму авторизации')
                    },}
            }),
            stl: {form: 'reg-form', link: 'form-link'},


        });
    }

    render() {
        return this.compile(tpl);
    }

    addEvents() {
        this._element.addEventListener('submit', test);
        // this._element.querySelectorAll('input').forEach((input: HTMLElement) => {
        //     input.addEventListener('blur', (<Props>this)._props.events.blur);
        //     input.addEventListener('focus', (<Props>this)._props.events.blur);
        // });
        super.addEvents();
    }
}

function test(){
    console.log('work');
}



