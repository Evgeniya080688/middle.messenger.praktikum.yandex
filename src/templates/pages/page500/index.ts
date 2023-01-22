import Handlebars from 'handlebars';
import tpl from './tpl';


export default (props = {}) => {
	return Handlebars.compile(tpl)({...props, stl: {page404: 'page404', bigtitle: 'bigtitle'}});
}

