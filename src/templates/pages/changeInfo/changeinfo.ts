import {Block, Props} from '../../../utils/Block';
import tpl from "./tpl";
import './style.less';
import Image from "../../components/image/image";
import ava from "../../../img/andrey.png";
import Input from "../../components/input/input";
import Submit from "../../components/submit/submit";

export default class ChangeInfo extends Block {
    constructor(...props: Props[]) {
        // Создаём враппер дом-элемент input
        super("div", {...props,
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
                stl: {button: 'submit-button'}
            }),
            stl: {info: 'info-block', avatar: 'avatar', changeinput: 'changeinput'}});
    }

    render() {
        return this.compile(tpl);
    }

}



