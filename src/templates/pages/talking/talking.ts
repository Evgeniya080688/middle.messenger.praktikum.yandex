import {Block} from '../../../utils/Block';
import tpl from "./tpl";
import './style.less';

export default class Talking extends Block {
    constructor(props) {
        // Создаём враппер дом-элемент input
        super("div", props);
    }

    render() {
        return this.compile(tpl);
    }

}



