import Handlebars from 'handlebars';
import tpl from './tpl';

export default (props = {}) => {
	return Handlebars.compile(tpl)({...props, stl: {form: 'reg-form', link: 'form-link'}});
}

