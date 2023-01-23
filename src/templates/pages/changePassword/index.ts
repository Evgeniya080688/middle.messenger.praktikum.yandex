import ChangePass from './changepassword';
import Image from "../../components/image/image";
import ava from "../../../img/andrey.png";
import Input from "../../components/input/input";
import Submit from "../../components/submit/submit";

export const changePassPage = new ChangePass(
    'section',
    {
        attr: {class: 'info-block'},
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
            stl: {button: 'submit-button'},
            events: {
                click: (e: Event) => {
                    e.preventDefault();
                    e.stopPropagation();
                    changePassPage.send();
                    console.log('Я сейчас отправлю измененные данные на сервер')
                },}
        }),
        stl: {info: 'info-block', avatar: 'avatar', changeinput: 'changeinput'}
    }
);
