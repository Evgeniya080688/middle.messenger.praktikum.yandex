import Handlebars from 'handlebars';
import tpl from './tpl';
import './style.less';

export default (props = {}) => {
	return Handlebars.compile(tpl)({...props, stl: {form: 'reg-form', input: 'form-input', link: 'form-link'}});
}

