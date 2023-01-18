import Handlebars from 'handlebars';
import tpl from './tpl';

export default (name, label, type, value, placeholder, requied ) => {
	return Handlebars.compile(tpl)({ name, label, type, value, placeholder, requied,
		stl: {input: 'form-input', label: 'form-label'} });
}

