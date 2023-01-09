import Handlebars from 'handlebars';
import tpl from './tpl.js';
import './style.less';

export default (props = {}, src) => {
	return Handlebars.compile(tpl)
	({...props, src, stl: {info: 'info-block', avatar: 'avatar', changeinput: 'changeinput'}});
}
