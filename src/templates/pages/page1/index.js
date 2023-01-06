import Handlebars from 'handlebars';
import tpl from './tpl.js';
import './style.less';
import style from  './style.less';

export default (props = {}) => {
	return Handlebars.compile(tpl)({...props, stl: {page: 'page1'}});
}
