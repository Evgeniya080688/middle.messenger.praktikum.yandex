import Handlebars from 'handlebars';
import tpl from './tpl.js';
import './style.less';
import style from  './style.less';

export default (props = {}, name, email, login, surname, nikname, phone, ) => {
	return Handlebars.compile(tpl)
	({...props, name, email, login, surname, nikname, phone,
		stl: {info: 'info-block', avatar: 'avatar', tdright: 'tdright'}});
}

