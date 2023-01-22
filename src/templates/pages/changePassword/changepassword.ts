import {Block, Props} from '../../../utils/Block';
import tpl from "./tpl";
import Image from "../../components/image/image";
import ava from "../../../img/andrey.png";
import Input from "../../components/input/input";
import Submit from "../../components/submit/submit";

export default class ChangePass extends Block {
    constructor(...props: Props[]) {
        // Создаём враппер дом-элемент input
        super("div", {...props,
            image: new Image({
                title: 'Андрей',
                alt: 'Фото пользователя',
                src: ava
            }),
            oldPassword: new Input ({
                name: 'oldPassword',
                label: 'Старый пароль',
                type: 'password',
                value: '89035475544',
                placeholder: '',
                required: false,
                stl: {input: 'form-input', label: 'form-label'}
            }),
            newPassword: new Input ({
                name: 'newPassword',
                label: 'Новый пароль',
                type: 'password',
                value: '89035475544',
                placeholder: '',
                required: false,
                stl: {input: 'form-input', label: 'form-label'}
            }),
            newPasswordOneMore: new Input ({
                name: 'newPassword',
                label: 'Новый пароль еще раз',
                type: 'password',
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
            stl: {info: 'info-block', avatar: 'avatar', changeinput: 'changeinput'}
        });

    }

    render() {
        return this.compile(tpl);
    }

}



