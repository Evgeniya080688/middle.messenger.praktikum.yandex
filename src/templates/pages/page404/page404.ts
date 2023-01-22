import {Block, Props} from '../../../utils/Block';
import tpl from "./tpl";
import './style.less';

export default class Page404 extends Block {
    constructor(...props: Props[]) {

        super("div", {...props,
            stl: {page404: 'page404', bigtitle: 'bigtitle'}});
    }

    render() {
        return this.compile(tpl);
    }

}



