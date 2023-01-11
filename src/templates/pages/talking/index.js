import Handlebars from 'handlebars';
import tpl from './tpl.js';
import './style.less';
import style from  './style.less';

export default (props = {}) => {
	return Handlebars.compile(tpl)(
		{...props, stl: {chat: 'chat', list: 'chat-list', field: 'chat-field', contacts: 'list-contacts',
			search: 'search'}});
}

