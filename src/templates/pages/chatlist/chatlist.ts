import {Block, Props} from '../../../utils/Block';
import tpl from "./tpl";
import './style.less';
import Submit from "../../components/submit/submit";
import ListItem from "../../components/listItem/listitem";
import ava from "../../../img/andrey.png";

export default class ChatList extends Block {
    constructor(...props: Props[]) {
        // Создаём враппер дом-элемент input
        super("div", {...props,
            submit: new Submit ({
                id: 'send',
                value: '>',
                stl: {button: 'submit-button'}
            }),
            listitem1: new ListItem({
                title: 'Фото Андрея',
                alt: 'Фото пользователя',
                image: ava,
                name: 'Андрей',
                message: 'Жду',
                time: '23:30',
                unreadCount: '1',
                stl: {li: 'list-contacts__item ', itemava: 'item__ava', iteminfo: 'item__info', iteminfomess: 'item__infomess',
                    infotime: 'info-time', infocounter: 'info-counter'}
            }),
            listitem2: new ListItem({
                title: 'Фото Андрея',
                alt: 'Фото пользователя',
                image: ava,
                name: 'Андрей',
                message: 'Жду',
                time: '23:30',
                unreadCount: '1',
                stl: {li: 'list-contacts__item ', itemava: 'item__ava', iteminfo: 'item__info', iteminfomess: 'item__infomess',
                    infotime: 'info-time', infocounter: 'info-counter'}
            }),
            listitem3: new ListItem({
                title: 'Фото Андрея',
                alt: 'Фото пользователя',
                image: ava,
                name: 'Андрей',
                message: 'Жду',
                time: '23:30',
                unreadCount: '1',
                stl: {li: 'list-contacts__item ', itemava: 'item__ava', iteminfo: 'item__info', iteminfomess: 'item__infomess',
                    infotime: 'info-time', infocounter: 'info-counter'}
            }),
            stl: {chat: 'chat', list: 'chat-list', field: 'chat-field', contacts: 'list-contacts',
                search: 'search'}
        });
    }

    render() {
        return this.compile(tpl);
    }

}



