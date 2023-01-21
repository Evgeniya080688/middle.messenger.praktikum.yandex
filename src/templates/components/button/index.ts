import Handlebars from 'handlebars';
import tpl from './tpl';

export default (id: string, value: string):string => {
	return Handlebars.compile(tpl)({ id, value, stl: {button: 'button'} });
}

