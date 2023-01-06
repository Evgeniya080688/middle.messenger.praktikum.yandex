import Handlebars from 'handlebars';
import tpl from './tpl.js';
import './style.less';
import style from  './style.less';

export default (props = {}) => {
	return Handlebars.compile(tpl)({...props, stl: {form: 'signin-form', input: 'form-input', link: 'form-link'}});
}
