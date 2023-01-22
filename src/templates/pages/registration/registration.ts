import {Block, Props} from '../../../utils/Block';
import tpl from "./tpl";
import './style.less';

export default class Registration extends Block {
    constructor(props) {
        // Создаём враппер дом-элемент input
        super("div", props);
    }

    render() {
        return this.compile(tpl);
    }

     addEvents() {
         //this._element.querySelectorAll('input').forEach((input: HTMLElement) => {
            // input.addEventListener('blur', (<Props>this)._props.events.blur);
             //input.addEventListener('focus', (<Props>this)._props.events.blur);
        // });

         this._element.querySelectorAll('form').forEach((form: HTMLElement) => {
             //form.addEventListener('submit',(<Props>this)._props.events.getDataForm);

             // input.addEventListener('blur', (<Props>this)._props.events.blur);
             //input.addEventListener('focus', (<Props>this)._props.events.blur);
              });

         }
}



