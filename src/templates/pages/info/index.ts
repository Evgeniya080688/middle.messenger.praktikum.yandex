import Info from './info';
import Image from "../../components/image/image";
import ava from "../../../img/andrey.png";

export const infoPage = new Info(
    'section',
    {
        attr: {class: 'info-block'},
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
        stl: {info: 'info-block', avatar: 'avatar', tdright: 'tdright'}
    }
);
