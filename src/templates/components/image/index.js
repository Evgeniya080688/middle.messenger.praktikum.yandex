import Handlebars from 'handlebars';
import tpl from './tpl.js';
import stl from  './style.less';

export default (title, alt, src) => {
	return Handlebars.compile(tpl)({ title, alt, src, stl: {avatar: 'favatar'} });
}

