import {Block} from '../../../utils/Block';
import tpl from "./tpl";

export default class ChangePass extends Block {
    constructor(props) {
        // Создаём враппер дом-элемент input
        super("div", props);

    }

    render() {
        return this.compile(tpl);
    }

}



