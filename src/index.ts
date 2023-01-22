'use strict';
import './style.less';

import Input from './templates/components/input/input';
import Submit from './templates/components/submit/submit';
import Image from './templates/components/image/image';
import ListItem from './templates/components/listItem/listitem';

import SignIn from './templates/pages/autorization/autorization';
import Registration from './templates/pages/registration/registration';
import Page500 from './templates/pages/page500/page500';
import Page404 from './templates/pages/page404/page404';
import Info from './templates/pages/info/info';
import ChangeInfo from './templates/pages/changeInfo/changeinfo';
import ChangePass from './templates/pages/changePassword/changepassword';
import ChatList from './templates/pages/chatlist/chatlist';
import Talking from './templates/pages/talking/talking';

import ava  from './img/andrey.png';


function render(query, block) {
    const root = document.querySelector(query);
    if(root)
        root.appendChild(block.getContent());

    block.dispatchComponentDidMount();
    return root;
}


const signPage = new SignIn({
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
        stl: {button: 'submit-button'}
    }),
    stl: {form: 'reg-form', link: 'form-link'}
});

const regiPage = new Registration({
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

const page500 = new Page500({
    stl: {page404: 'page404', bigtitle: 'bigtitle'}
});

const page404 = new Page404({
    stl: {page404: 'page404', bigtitle: 'bigtitle'}
});

const info = new Info({
    image: new Image({
        title: 'Андрей',
        alt: 'Фото пользователя',
        src: ava
    }),
    name: 'Андрей',
    email: 'lan1@yandex.ru',
    login: 'andrew40',
    surname: 'Иванов',
    nikname: 'Andreika',
    phone: '89035475544',
    stl: {info: 'info-block', avatar: 'avatar', tdright: 'tdright'}
});

const changeinfo = new ChangeInfo({
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
    stl: {info: 'info-block', avatar: 'avatar', changeinput: 'changeinput'}
});

const changepass = new ChangePass({
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

const chatlist = new ChatList({
    submit: new Submit ({
        id: 'send',
        value: '>',
        stl: {button: 'submit-button'}
    }),
    listitem1: new ListItem({
        title: 'Фото Андрея',
        alt: 'Фото пользователя',
        image: ava,
        name: 'Андрей',
        message: 'Жду',
        time: '23:30',
        unreadCount: '1',
        stl: {li: 'list-contacts__item ', itemava: 'item__ava', iteminfo: 'item__info', iteminfomess: 'item__infomess',
            infotime: 'info-time', infocounter: 'info-counter'}
    }),
    listitem2: new ListItem({
        title: 'Фото Андрея',
        alt: 'Фото пользователя',
        image: ava,
        name: 'Андрей',
        message: 'Жду',
        time: '23:30',
        unreadCount: '1',
        stl: {li: 'list-contacts__item ', itemava: 'item__ava', iteminfo: 'item__info', iteminfomess: 'item__infomess',
            infotime: 'info-time', infocounter: 'info-counter'}
    }),
    listitem3: new ListItem({
        title: 'Фото Андрея',
        alt: 'Фото пользователя',
        image: ava,
        name: 'Андрей',
        message: 'Жду',
        time: '23:30',
        unreadCount: '1',
        stl: {li: 'list-contacts__item ', itemava: 'item__ava', iteminfo: 'item__info', iteminfomess: 'item__infomess',
            infotime: 'info-time', infocounter: 'info-counter'}
    }),
    stl: {chat: 'chat', list: 'chat-list', field: 'chat-field', contacts: 'list-contacts',
    search: 'search'}
    }
);

const talkPage = new Talking({
    image: new Image({
        title: 'Андрей',
        alt: 'Фото пользователя',
        src: ava
    }),
    input: new Input ({
        name: 'message',
        label: 'Текст сообщения',
        type: 'text',
        value: '',
        placeholder: 'Введите текст сообщения...',
        required: false,
        stl: {input: 'form-input', label: 'form-label'}
    }),
    submit1: new Submit ({
        id: 'send',
        value: '>',
        stl: {button: 'submit-button'}
    }),
    submit2: new Submit ({
        id: 'sendMess',
        value: 'Отправить',
        stl: {button: 'submit-button'}
    }),
    listitem1: new ListItem({
        title: 'Фото Андрея',
        alt: 'Фото пользователя',
        image: ava,
        name: 'Андрей',
        message: 'Жду',
        time: '23:30',
        unreadCount: '1',
        stl: {li: 'list-contacts__item ', itemava: 'item__ava', iteminfo: 'item__info', iteminfomess: 'item__infomess',
            infotime: 'info-time', infocounter: 'info-counter'}
    }),
    listitem2: new ListItem({
        title: 'Фото Андрея',
        alt: 'Фото пользователя',
        image: ava,
        name: 'Андрей',
        message: 'Жду',
        time: '23:30',
        unreadCount: '1',
        stl: {li: 'list-contacts__item ', itemava: 'item__ava', iteminfo: 'item__info', iteminfomess: 'item__infomess',
            infotime: 'info-time', infocounter: 'info-counter'}
    }),
    listitem3: new ListItem({
        title: 'Фото Андрея',
        alt: 'Фото пользователя',
        image: ava,
        name: 'Андрей',
        message: 'Жду',
        time: '23:30',
        unreadCount: '1',
        stl: {li: 'list-contacts__item ', itemava: 'item__ava', iteminfo: 'item__info', iteminfomess: 'item__infomess',
            infotime: 'info-time', infocounter: 'info-counter'}
    }),
    listitem4: new ListItem({
        title: 'Фото Андрея',
        alt: 'Фото пользователя',
        image: ava,
        name: 'Андрей',
        message: 'Жду',
        time: '23:30',
        unreadCount: '1',
        stl: {li: 'list-contacts__item ', itemava: 'item__ava', iteminfo: 'item__info', iteminfomess: 'item__infomess',
            infotime: 'info-time', infocounter: 'info-counter'}
    }),
    listitem5: new ListItem({
        title: 'Фото Андрея',
        alt: 'Фото пользователя',
        image: ava,
        name: 'Андрей',
        message: 'Жду',
        time: '23:30',
        unreadCount: '1',
        stl: {li: 'list-contacts__item ', itemava: 'item__ava', iteminfo: 'item__info', iteminfomess: 'item__infomess',
            infotime: 'info-time', infocounter: 'info-counter'}
    }),
    listitem6: new ListItem({
        title: 'Фото Андрея',
        alt: 'Фото пользователя',
        image: ava,
        name: 'Андрей',
        message: 'Жду',
        time: '23:30',
        unreadCount: '1',
        stl: {li: 'list-contacts__item ', itemava: 'item__ava', iteminfo: 'item__info', iteminfomess: 'item__infomess',
            infotime: 'info-time', infocounter: 'info-counter'}
    }),
    stl: {chat: 'chat', list: 'chat-list', field: 'chat-field', contacts: 'list-contacts',
        search: 'search', info: 'chat-field__info', text: 'chat-field__text', inputblock: 'chat-field__input',
        ava: 'info__ava', name: 'info__name', menu: 'info__menu', from: 'text__from', to: 'text__to',
        input: 'field__input', file: 'field__file'}
});

if (window.location.pathname == '/autorization') {
    render('#root', signPage);
} else if (window.location.pathname == '/registration') {
    render('#root', regiPage);
} else if (window.location.pathname == '/page404') {
    render('#root', page404);
} else if (window.location.pathname == '/page500') {
    render('#root', page500);
} else if (window.location.pathname == '/info') {
    render('#root', info);
} else if (window.location.pathname == '/changeinfo') {
    render('#root', changeinfo);
} else if (window.location.pathname == '/changepassword') {
    render('#root', changepass);
} else if (window.location.pathname == '/chatlist') {
    render('#root', chatlist);
} else if (window.location.pathname == '/chat') {
    render('#root', talkPage);
} else {
    render('#root', signPage);
}

// document.getElementById('root').querySelector('a').addEventListener('click', (e) => {
//
// })

