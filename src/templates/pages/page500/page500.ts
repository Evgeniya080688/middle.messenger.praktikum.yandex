import {Block} from '../../../utils/Block';
import tpl from "./tpl";

export default class Page500 extends Block {

    render() {
        return this.compile(tpl);
    }

}



