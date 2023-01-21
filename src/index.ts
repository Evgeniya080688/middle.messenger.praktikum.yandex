'use strict';
import Handlebars from "handlebars";
import tpl from './tpl';
import './style.less';
import submit from './templates/components/submit';
import input from './templates/components/input';
import image from './templates/components/image';
import form1 from './templates/pages/autorization';
import form2 from './templates/pages/registration';
import info from './templates/pages/info';
import changeinfo from './templates/pages/changeInfo';
import changepassword from './templates/pages/changePassword';
import page404 from './templates/pages/page404';
import page500 from './templates/pages/page500';
import chatlist from "./templates/pages/chatlist";
import talking from "./templates/pages/talking";
import listitem from "./templates/components/listItem";

import Input from './templates/components/input/input';
import Button from './templates/components/button/button';
import Submit from './templates/components/submit/submit';
import SignIn from './templates/pages/autorization/autorization';

import ava  from './img/andrey.png';
import SignIn from "./templates/pages/autorization/autorization";

function render(query, block) {
    const root = document.querySelector(query);
    root.appendChild(block.getContent());
    return root;
}

const inputik = new Input ({
    name: 'inputTest',
    label: 'Инпутик',
    type: 'text',
    value: 'enter your text',
    placeholder: 'enter your text',
    required: true,
    stl: {input: 'form-input', label: 'form-label'}
});

const signPage = new SignIn({
    login: new Input ({
        name: 'inputTest',
        label: 'Инпутик',
        type: 'text',
        value: 'enter your text',
        placeholder: 'enter your text',
        required: true,
        stl: {input: 'form-input', label: 'form-label'}
    }),
    password: new Input ({
        name: 'inputTest2',
        label: 'Инпутик2',
        type: 'text',
        value: 'enter your text',
        placeholder: 'enter your text',
        required: true,
        stl: {input: 'form-input', label: 'form-label'}
    }),
    submit: new Submit ({
        id: 'signin',
        value: 'Сабмит',
        stl: {button: 'submit-button'}
    }),
    stl: {form: 'reg-form', link: 'form-link'}
});

console.log(inputik);

function signinPage() {
    const comp = Handlebars.compile(tpl);
    const res = comp({
        form1: form1(
            {login: input('login','Логин','text', '', 'Введите логин',
                    true, '^[а-яА-ЯёЁa-zA-Z0-9]+$'),
            password: input('password','Пароль','password', '', 'Введите пароль', true, ''),
            submit: submit('signin','Войти')})
    });
    return res;
}

function regPage() {
    const comp = Handlebars.compile(tpl);
    const res = comp({
        form2: form2(
            {mail: input('email','Почта','text', '', 'Введите e-mail', true),
            login: input('login','Логин','text', '','Придумайте логин',
                true),
            name: input('first_name','Имя','text', '','Введите имя',
                true),
            surname: input('second_name','Фамилия','text', '','Введите фамилию',
                true),
            phone: input('phone','Телефон','text', '','Введите телефон', true),
            password: input('password','Пароль','password', '','Введите пароль', true),
            passwordonemore: input('password','Пароль еще раз','password', '','Введите пароль еще раз', true),
            submit: submit('signin','Зарегистрироваться')})
    });
    return res;
}

function getInfo() {
    const comp = Handlebars.compile(tpl);
    const res = comp({
        info: info({image: image('Андрей', 'Аватар Андрея', ava)},
            'Андрей',
            'lan1@yandex.ru',
            'andrew40',
            'Иванов',
            'Andreika',
            '89035475544')
    });
    return res;
}

function changeInfo() {
    const comp = Handlebars.compile(tpl);
    const res = comp({
        changeinfo: changeinfo( {
                image: image('Андрей', 'Аватар Андрея', ava),
                email: input('email','Почта','text', 'lan1@yandex.ru','', false),
                login: input('login','Логин','text', 'andrew40','', false),
                first_name: input('first_name','Имя','text', 'Андрей','', false),
                second_name: input('second_name','Фамилия','text', 'Иванов','', false),
                display_name: input('display_name','Имя в чате','text', 'Andreika','', false),
                phone: input('phone','Телефон','text', '89035475544','', false),
                submit: submit('save','Сохранить')},
            ava)
    });
    return res;
}

function changePassword() {
    const comp = Handlebars.compile(tpl);
    const res = comp({
        changepassword: changepassword( {
                image: image('Андрей', 'Аватар Андрея', ava),
                oldPassword: input('oldPassword','Старый пароль','password', '89035475544','', false),
                newPassword: input('newPassword','Новый пароль','password', '89035475544','', false),
                newPasswordOneMore: input('newPassword','Новый пароль еще раз','password', '89035475544','', false),
                submit: submit('save','Сохранить')},
            ava)
    });
    return res;
}

function chatList() {
    const comp = Handlebars.compile(tpl);
    const res = comp({
        chatlist: chatlist( {
            submit: submit('send','>'),
            listitem1: listitem(
                'Фото Андрея', 'Фото пользователя', ava,
                'Андрей', 'Жду', '23:30', '1'),
            listitem2: listitem(
                'Фото Андрея', 'Фото пользователя', ava,
                'Андрей', 'Скачу...', '23:30', '1'),
            listitem3: listitem(
                'Фото Андрея', 'Фото пользователя', ava,
                'Василиса', 'На горе догорал ярко-пламенный закат. ' +
                'Никода я такого не видала, но очень рада что но' +
                ' очень рада что но очень рада что но очень рада что', '23:30', '1')},

        )
    });
    return res;
}

function toTalk() {
    const comp = Handlebars.compile(tpl);
    const res: string = comp({
        talking: talking( {
            input: input('message','пп','text','Введите', '', false, ''),
            submit1: submit('send','>'),
            submit2: submit('send','Отправить'),
            image: image('Андрейка - фото профиля','Здесь просто фото профиля', ava),
            listitem1: listitem(
                'Фото Андрея', 'Фото пользователя', ava,
                'Андрей', 'Жду', '23:30', '1'),
            listitem2: listitem(
                'Фото Андрея', 'Фото пользователя', ava,
                'Андрей', 'Скачу...', '23:30', '1'),
            listitem3: listitem(
                'Фото Андрея', 'Фото пользователя', ava,
                'Василиса', 'На горе догорал ярко-пламенный закат. ' +
                'Никода я такого не видала, но очень рада что но' +
                ' очень рада что но очень рада что но очень рада что', '23:30', '1'),
            listitem4: listitem(
                'Фото Андрея', 'Фото пользователя', ava,
                'Василиса', 'На горе догорал ярко-пламенный закат. ' +
                'Никода я такого не видала, но очень рада что но' +
                ' очень рада что но очень рада что но очень рада что', '23:30', '1'),
            listitem5: listitem(
                'Фото Андрея', 'Фото пользователя', ava,
                'Василиса', 'На горе догорал ярко-пламенный закат. ' +
                'Никода я такого не видала, но очень рада что но' +
                ' очень рада что но очень рада что но очень рада что', '23:30', '1'),
            listitem6: listitem(
                'Фото Андрея', 'Фото пользователя', ava,
                'Василиса', 'На горе догорал ярко-пламенный закат. ' +
                'Никода я такого не видала, но очень рада что но' +
                ' очень рада что но очень рада что но очень рада что', '23:30', '1')},
        )
    });
    return res;
}

function notfoundPage() {
    const comp = Handlebars.compile(tpl);
    const res = comp({
        page404: page404()
    });
    return res;
}

function fixingPage() {
    const comp = Handlebars.compile(tpl);
    const res = comp({
        page500: page500()
    });
    return res;
}

if (window.location.pathname == '/autorization') {
    //document.getElementById('root').innerHTML = signinPage();
    render('#root', signPage);
} else if (window.location.pathname == '/registration') {
    document.getElementById('root').innerHTML = regPage();
} else if (window.location.pathname == '/page404') {
    document.getElementById('root').innerHTML = notfoundPage();
} else if (window.location.pathname == '/page500') {
    document.getElementById('root').innerHTML = fixingPage();
} else if (window.location.pathname == '/info') {
    document.getElementById('root').innerHTML = getInfo();
} else if (window.location.pathname == '/changeinfo') {
    document.getElementById('root').innerHTML = changeInfo();
} else if (window.location.pathname == '/changepassword') {
    document.getElementById('root').innerHTML = changePassword();
} else if (window.location.pathname == '/chatlist') {
    document.getElementById('root').innerHTML = chatList();
} else if (window.location.pathname == '/chat') {
    document.getElementById('root').innerHTML = toTalk();
} else {
    document.getElementById('root').innerHTML = signinPage();
}

// document.getElementById('root').querySelector('a').addEventListener('click', (e) => {
//
// })

