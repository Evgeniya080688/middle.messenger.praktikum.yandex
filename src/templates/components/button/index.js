import Handlebars from 'handlebars';
import tpl from './tpl.js';
import style from  './style.less';

export default (id, value) => {
	return Handlebars.compile(tpl)({ id, value, stl: {button: 'button'} });
}
