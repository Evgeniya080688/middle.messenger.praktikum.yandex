import Handlebars from 'handlebars';
import tpl from './tpl';


export default (title, alt, src) => {
	return Handlebars.compile(tpl)({ title, alt, src, stl: {avatar: 'favatar'} });
}

