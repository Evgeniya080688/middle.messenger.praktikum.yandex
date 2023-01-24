import Input from "../../components/input/input";
import Submit from "../../components/submit/submit";
import SignIn from "./autorization";
import {LOGIN_PATTERN, PASSWORD_PATTERN} from "../../../service/patterns";

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
            error: 'ошибка',
            success: 'Все верно, ура!',
            stl: {input: 'form-input', label: 'form-label', error: 'error', success: 'success'},
            pattern: '^[A-Za-z0-9]{3,20}$',
            events: {
                blur: (e: Event) => {
                    //const t = e.target;
                    e.preventDefault();
                    console.log('блюр');
                },
                focus: (e: Event) => {
                    //const t = e.target;
                    e.preventDefault();
                    console.log('focus');
                },
            }
        }),
        password: new Input ({
            name: 'password',
            label: 'Пароль',
            type: 'password',
            value: '',
            placeholder: 'Введите пароль',
            pattern: PASSWORD_PATTERN,
            required: true,
            error: 'ошибка',
            stl: {input: 'form-input', label: 'form-label', error: 'error'}
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
        stl: {form: 'reg-form', link: 'form-link', error: 'error', success: 'success'},
    }
);

