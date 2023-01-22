import {Block, Props} from '../../../utils/Block';
import tpl from "./tpl";
import './style.less';
import Image from "../../components/image/image";
import ava from "../../../img/andrey.png";

export default class Info extends Block {
    constructor(...props: Props[]) {
        // Создаём враппер дом-элемент input
        super("div", {...props,
            image: new Image({
                title: 'Андрей',
                alt: 'Фото пользователя',
                src: ava
            }),
            name: 'Андрей',
            email: 'lan1@yandex.ru',
            login: 'andrew40',
            surname: 'Иванов',
            nikname: 'Andreika',
            phone: '89035475544',
            stl: {info: 'info-block', avatar: 'avatar', tdright: 'tdright'}});
    }

    render() {
        return this.compile(tpl);
    }

}



