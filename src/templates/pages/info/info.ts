import {Block} from '../../../utils/Block';
import tpl from "./tpl";
import './style.less';

export default class Info extends Block {
    constructor(props) {
        // Создаём враппер дом-элемент input
        super("div", props);
    }

    render() {
        return this.compile(tpl);
    }

}



