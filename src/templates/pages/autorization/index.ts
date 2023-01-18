import Handlebars from 'handlebars';
import tpl from './tpl';
import './style.less';

export default (props = {}) => {
	return Handlebars.compile(tpl)({...props, stl: {form: 'signin-form', link: 'form-link'}});
}

