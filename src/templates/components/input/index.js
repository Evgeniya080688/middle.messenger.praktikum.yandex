import Handlebars from 'handlebars';
import tpl from './tpl.js';
import stl from  './style.less';

export default (name, value, type ) => {
	return Handlebars.compile(tpl)({ name, value, type, stl: {input: 'form-input'} });
}
