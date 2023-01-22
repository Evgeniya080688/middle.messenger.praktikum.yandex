import {Block, Props} from '../../../utils/Block';
import tpl from "./tpl";
import './style.less';
import Image from "../../components/image/image";
import ava from "../../../img/andrey.png";
import Input from "../../components/input/input";
import Submit from "../../components/submit/submit";
import ListItem from "../../components/listItem/listitem";

export default class Talking extends Block {
    constructor(...props: Props[]) {
        // Создаём враппер дом-элемент input
        super("div", {...props,
            image: new Image({
                title: 'Андрей',
                alt: 'Фото пользователя',
                src: ava
            }),
            input: new Input ({
                name: 'message',
                label: 'Текст сообщения',
                type: 'text',
                value: '',
                placeholder: 'Введите текст сообщения...',
                required: false,
                stl: {input: 'form-input', label: 'form-label'}
            }),
            submit1: new Submit ({
                id: 'send',
                value: '>',
                stl: {button: 'submit-button'}
            }),
            submit2: new Submit ({
                id: 'sendMess',
                value: 'Отправить',
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
            listitem4: new ListItem({
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
            listitem5: new ListItem({
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
            listitem6: new ListItem({
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
                search: 'search', info: 'chat-field__info', text: 'chat-field__text', inputblock: 'chat-field__input',
                ava: 'info__ava', name: 'info__name', menu: 'info__menu', from: 'text__from', to: 'text__to',
                input: 'field__input', file: 'field__file'}});
    }

    render() {
        return this.compile(tpl);
    }

}



