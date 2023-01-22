import {Block, Props} from '../../../utils/Block';
import tpl from "./tpl";
import './style.less';
import Input from "../../components/input/input";
import Submit from "../../components/submit/submit";

export default class Registration extends Block {
    constructor(...props: Props[]) {
        // Создаём враппер дом-элемент input
        super("div", {...props,
            mail: new Input ({
                name: 'email',
                label: 'Почта',
                type: 'text',
                value: '',
                placeholder: 'Введите e-mail',
                required: true,
                stl: {input: 'form-input', label: 'form-label'}
            }),
            login: new Input ({
                name: 'login',
                label: 'Логин',
                type: 'text',
                value: '',
                placeholder: 'Придумайте логин',
                required: true,
                stl: {input: 'form-input', label: 'form-label'}
            }),
            name: new Input ({
                name: 'first_name',
                label: 'Имя',
                type: 'text',
                value: '',
                placeholder: 'Введите имя',
                required: true,
                stl: {input: 'form-input', label: 'form-label'}
            }),
            surname: new Input ({
                name: 'second_name',
                label: 'Фамилия',
                type: 'text',
                value: '',
                placeholder: 'Введите фамилию',
                required: true,
                stl: {input: 'form-input', label: 'form-label'}
            }),
            phone: new Input ({
                name: 'phone',
                label: 'Телефон',
                type: 'text',
                value: '',
                placeholder: 'Введите телефон',
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
            passwordonemore: new Input ({
                name: 'password',
                label: 'Пароль',
                type: 'password',
                value: '',
                placeholder: 'Введите пароль еще раз',
                required: true,
                stl: {input: 'form-input', label: 'form-label'}
            }),
            submit: new Submit ({
                id: 'regin',
                value: 'Зарегистрироваться',
                stl: {button: 'submit-button'}
            }),
            stl: {form: 'reg-form', link: 'form-link'}
        });
    }

    render() {
        return this.compile(tpl);
    }

     addEvents() {
         //this._element.querySelectorAll('input').forEach((input: HTMLElement) => {
            // input.addEventListener('blur', (<Props>this)._props.events.blur);
             //input.addEventListener('focus', (<Props>this)._props.events.blur);
        // });

         this._element.querySelectorAll('form').forEach((form: HTMLElement) => {
             //form.addEventListener('submit',(<Props>this)._props.events.getDataForm);

             // input.addEventListener('blur', (<Props>this)._props.events.blur);
             //input.addEventListener('focus', (<Props>this)._props.events.blur);
              });

         }
}



