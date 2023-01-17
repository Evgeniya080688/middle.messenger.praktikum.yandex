import Handlebars from 'handlebars';
import tpl from './tpl.js';
import './style.less';
import style from  './style.less';

export default (props = {}) => {
	return Handlebars.compile(tpl)(
		{...props, stl: {chat: 'chat', list: 'chat-list', field: 'chat-field', contacts: 'list-contacts',
			search: 'search', info: 'chat-field__info', text: 'chat-field__text', inputblock: 'chat-field__input',
			ava: 'info__ava', name: 'info__name', menu: 'info__menu', from: 'text__from', to: 'text__to',
			input: 'field__input'}});
}

