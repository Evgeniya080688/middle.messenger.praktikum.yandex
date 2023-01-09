import Handlebars from 'handlebars';
import tpl from './tpl.js';
import stl from  './style.less';

export default (name, label, type, value ) => {
	return Handlebars.compile(tpl)({ name, label, type, value, stl: {input: 'form-input'} });
}
