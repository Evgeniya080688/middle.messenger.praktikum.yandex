import {Block} from '../../../utils/Block';
import tpl from "./tpl";

export default class Page500 extends Block {
    constructor(props) {
        // Создаём враппер дом-элемент input
        super("div", props);
    }

    render() {
        return this.compile(tpl);
    }

}



