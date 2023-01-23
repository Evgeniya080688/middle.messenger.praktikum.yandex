import Input from "../../components/input/input";
import Submit from "../../components/submit/submit";
import SignIn from "./autorization";
import {Patterns} from "../../../service/patterns";

export const signPage = new SignIn (
    'section',
    {
        attr: {class: 'reg-form'},
        login: new Input ({
            name: 'login',
            label: 'Логин',
            type: 'text',
            value: '',
            placeholder: 'Введите логин',
            required: true,
            stl: {input: 'form-input', label: 'form-label'},
            pattern: Patterns.login,
            events: {
                blur: (e: Event) => {
                    //const t = e.target;
                    e.preventDefault();
                    console.log('блюр');

                    // if (typeof t == '') {
                    //     t.validate(t);
                    // }
                },
                focus: (e: Event) => {
                    e.preventDefault();

                }
            }
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
                    signPage.send();
                    signPage.validateForm();
                    console.log('Я сейчас отправлю форму авторизации')
                },}
        }),
        stl: {form: 'reg-form', link: 'form-link', error: 'error'},
    }
);

