import Handlebars from 'handlebars';
import tpl from './tpl';
import './style.less';

export default
  (title: string, alt: string, image: string, name: string, message: string, time: string, unreadCount: string ): string => {
	return Handlebars.compile(tpl)({ title,alt, image, name, message, time, unreadCount,
		stl: {li: 'list-contacts__item ', itemava: 'item__ava', iteminfo: 'item__info', iteminfomess: 'item__infomess',
		infotime: 'info-time', infocounter: 'info-counter'} });
}

