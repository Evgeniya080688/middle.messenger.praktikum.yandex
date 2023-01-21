import Handlebars from 'handlebars';
import tpl from './tpl';

export default
	(name: string, label: string, type: string, value: string, placeholder: string, requied: boolean, pattern?: string ):
		string => {
			return Handlebars.compile(tpl)({ name, label, type, value, placeholder, requied, pattern,
			stl: {input: 'form-input', label: 'form-label'} });
	}

