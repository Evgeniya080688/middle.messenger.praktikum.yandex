import Handlebars from 'handlebars';
import tpl from './tpl.js';
import stl from  './style.less';

export default (id, value) => {
	return Handlebars.compile(tpl)({ id, value, stl: {button: 'button'} });
}

