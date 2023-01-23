import {Block} from '../../../utils/Block';
import tpl from "./tpl";
import './style.less';

export default class Info extends Block {

    render() {
        return this.compile(tpl);
    }

}



