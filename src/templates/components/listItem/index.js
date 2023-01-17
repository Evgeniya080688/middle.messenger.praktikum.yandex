import Handlebars from 'handlebars';
import tpl from './tpl.js';
import stl from  './style.less';

export default (props = {}, title,alt, image, name, message, time, unreadCount ) => {
	return Handlebars.compile(tpl)({ title,alt, image, name, message, time, unreadCount,
		stl: {li: 'list-contacts__item ', itemava: 'item__ava', iteminfo: 'item__info', iteminfomess: 'item__infomess',
		infotime: 'info-time', infocounter: 'info-counter'} });
}

