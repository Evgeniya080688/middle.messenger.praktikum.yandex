import {Block} from '../../../utils/Block';
import tpl from "./tpl";
import './style.less';

export default class Page404 extends Block {

    render() {
        return this.compile(tpl);
    }

}



