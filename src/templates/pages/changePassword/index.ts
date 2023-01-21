import Handlebars from 'handlebars';
import tpl from './tpl';

export default (props = {}, src) => {
	return Handlebars.compile(tpl)
	({...props, src, stl: {info: 'info-block', avatar: 'avatar'}});
}

