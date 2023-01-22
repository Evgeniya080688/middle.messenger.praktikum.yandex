import {Block, Props} from '../../../utils/Block';
import tpl from "./tpl";

export default class Page500 extends Block {
    constructor(...props: Props[]) {
        // Создаём враппер дом-элемент input
        super("div",{...props,
            stl: {page404: 'page404', bigtitle: 'bigtitle'}});
    }

    render() {
        return this.compile(tpl);
    }

}



