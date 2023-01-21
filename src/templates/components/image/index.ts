import Handlebars from 'handlebars';
import tpl from './tpl';

export default (title: string, alt: string, src: string): string => {
	return Handlebars.compile(tpl)({ title, alt, src, stl: {avatar: 'favatar'} });
}

