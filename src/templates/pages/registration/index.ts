import Registration from './registration';
import Input from "../../components/input/input";
import Submit from "../../components/submit/submit";

export const regPage = new Registration (
    'section', {
        attr: {class: 'reg-form'},
        mail: new Input ({
            name: 'email',
            label: 'Почта',
            type: 'text',
            value: '',
            placeholder: 'Введите e-mail',
            required: true,
            pattern: '/.*@[a-z0-9.-]*/i',
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
            stl: {button: 'submit-button'},
            events: {
                click: (e: Event) => {
                    e.preventDefault();
                    e.stopPropagation();
                    regPage.send();
                    console.log('Я сейчас отправлю форму регистрации')
                },}
        }),
        stl: {form: 'reg-form', link: 'form-link'},
        events: {

        }
    }
);
