import ChangeInfo from './changeinfo';
import Image from "../../components/image/image";
import ava from "../../../img/andrey.png";
import Input from "../../components/input/input";
import Submit from "../../components/submit/submit";

export const changeInfoPage = new ChangeInfo(
    'section' ,
    {
        attr: {class: 'info-block'},
        image: new Image({
            title: 'Андрей',
            alt: 'Фото пользователя',
            src: ava
        }),
        email: new Input ({
            name: 'email',
            label: 'Почта',
            type: 'text',
            value: 'lan1@yandex.ru',
            placeholder: 'Введите e-mail',
            required: false,
            stl: {input: 'form-input', label: 'form-label'}
        }),
        login: new Input ({
            name: 'login',
            label: 'Логин',
            type: 'text',
            value: 'andrew40',
            placeholder: 'Введите логин',
            required: false,
            stl: {input: 'form-input', label: 'form-label'}
        }),
        first_name: new Input ({
            name: 'first_name',
            label: 'Имя',
            type: 'text',
            value: 'Андрей',
            placeholder: 'Введите имя',
            required: false,
            stl: {input: 'form-input', label: 'form-label'}
        }),
        second_name: new Input ({
            name: 'second_name',
            label: 'Фамилия',
            type: 'text',
            value: 'Иванов',
            placeholder: 'Введите имя',
            required: false,
            stl: {input: 'form-input', label: 'form-label'}
        }),
        display_name: new Input ({
            name: 'display_name',
            label: 'Имя в чате',
            type: 'text',
            value: 'Andreika',
            placeholder: '',
            required: false,
            stl: {input: 'form-input', label: 'form-label'}
        }),
        phone: new Input ({
            name: 'phone',
            label: 'Телефон',
            type: 'text',
            value: '89035475544',
            placeholder: '',
            required: false,
            stl: {input: 'form-input', label: 'form-label'}
        }),
        submit: new Submit ({
            id: 'save',
            value: 'Сохранить',
            stl: {button: 'submit-button'},
            events: {
                click: (e: Event) => {
                    e.preventDefault();
                    e.stopPropagation();
                    changeInfoPage.send();
                    console.log('Я сейчас отправлю измененные данные на сервер')
                },}
        }),
        stl: {info: 'info-block', avatar: 'avatar', changeinput: 'changeinput'}
    }
);
