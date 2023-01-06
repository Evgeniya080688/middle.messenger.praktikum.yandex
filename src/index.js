import Handlebars from "handlebars";
import tpl from 'bundle-text:./index.hbs';
import './style.less';
import submit from './templates/components/submit';
import form1 from './templates/pages/autorization';
import form2 from './templates/pages/registration';

function indexPage() {
	const comp = Handlebars.compile(tpl);
	const res = comp({
		form1: form1({ submit: submit('signin','Авторизироваться') })
	});
	return res;
}
function regPage() {
	const comp = Handlebars.compile(tpl);
	const res = comp({
		form2: form2({ submit: submit('signin','Авторизироваться') })
	});
	return res;
}

if (window.location.href=='/') {
	document.getElementById('root').innerHTML = indexPage();
} else if (window.location.href=='/registration') {
	document.getElementById('root').innerHTML = regPage();
} else {
	document.getElementById('root').innerHTML = indexPage();
}




