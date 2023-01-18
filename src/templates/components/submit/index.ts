import Handlebars from 'handlebars';
import tpl from './tpl';
import './style.less';

export default (id, value) => {
	return Handlebars.compile(tpl)({ id, value, stl: {button: 'submit-button'} });
}

