'use strict';

import Handlebars from "handlebars";
import tpl from 'bundle-text:./index.hbs';
import './style.less';
import submit from './templates/components/submit';
import input from './templates/components/input';
import image from './templates/components/image';
import form1 from './templates/pages/autorization';
import form2 from './templates/pages/registration';
import info from './templates/pages/info';
import changeinfo from './templates/pages/changeinfo';
import page404 from './templates/pages/page404';
import page500 from './templates/pages/page500';

import ava from './img/andrey.png';

console.log(ava);

console.log(window.location.pathname);

function signinPage() {
	const comp = Handlebars.compile(tpl);
	const res = comp({
		form1: form1({login: input('login','Логин','text'),
							password: input('password','Пароль','password'),
							submit: submit('signin','Войти')})
	});
	return res;
}

function regPage() {
	const comp = Handlebars.compile(tpl);
	const res = comp({
		form2: form2({mail: input('email','Почта','text'),
							login: input('login','Логин','text'),
			                name: input('first_name','Имя','text'),
							surname: input('second_name','Фамилия','text'),
							phone: input('phone','Телефон','text'),
							password: input('password','Пароль','password'),
							passwordonemore: input('password','Пароль еще раз','password'),
							submit: submit('signin','Зарегистрироваться')})
	});
	return res;
}

function getInfo() {
	const comp = Handlebars.compile(tpl);
	const res = comp({
		info: info({image: image('Андрей', 'Аватар Андрея', ava)},
			'Андрей',
			'lan@yandex.ru',
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
			email: input('email','Почта','text', 'lan@yandex.ru'),
			login: input('login','Логин','text', 'andrew40'),
			first_name: input('first_name','Имя','text', 'Андрей'),
			second_name: input('second_name','Фамилия','text', 'Иванов'),
			display_name: input('display_name','Имя в чате','text', 'Andreika'),
			phone: input('phone','Телефон','text', '89035475544'),
			submit: submit('save','Сохранить')},
			ava)
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
	document.getElementById('root').innerHTML = signinPage();
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
} else {
	document.getElementById('root').innerHTML = signinPage();
}

document.getElementById('root').querySelector('a').addEventListener('click', (e) => {

})



