'use strict';

import Handlebars from "handlebars";
import tpl from 'bundle-text:./index.hbs';
import './style.less';
import submit from './templates/components/submit';
import input from './templates/components/input';
import form1 from './templates/pages/autorization';
import form2 from './templates/pages/registration';
import page404 from './templates/pages/page404';
import page500 from './templates/pages/page500';

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
} else {
	document.getElementById('root').innerHTML = signinPage();
}

document.getElementById('root').querySelector('a').addEventListener('click', (e) => {

})



