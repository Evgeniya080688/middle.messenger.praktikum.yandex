import { EventBus } from './EventBus';
import Handlebars from 'handlebars';

export interface Props {
    [key: string]: any;
    tagName?: string;
    events?: { [eventName: string]: EventListener };
    onFocus?: (event: Event  | undefined) => void;
    onBlur?: (event: Event  | undefined) => void;
}

export class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    };

    public _props: Props;
    public _children;
    protected _id;
    // @ts-ignore
    protected _element: HTMLElement | Element;
    protected _meta;
    protected _eventBus;
    protected _setUpdate = false;


    /** JSDoc
     * @param {string} tagName
     * @param {Object} props
     *
     * @returns {void}
     */
    public constructor(tagName = "div", propsAndChilds = {}) {
        const { children, props } = this.getChildren(propsAndChilds);

        this._eventBus = new EventBus()
        this._id = Date.now() * Math.floor(Math.random() * 42) + 1;
        this._children = this.makePropsProxy(children);
        this._props = this.makePropsProxy({ ...props, __id: this._id });
        this._meta = { tagName, props };

        this.registerEvents();
        this._eventBus.emit(Block.EVENTS.INIT);
    }

    registerEvents() {
        this._eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        this._eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        this._eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        this._eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    protected _createResources() {
        const { tagName } = this._meta;
        this._element = this.createDocumentElement(tagName);
    }

    init() {
        this._element = this.createDocumentElement(this._meta?.tagName);
        this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }

    _createDocumentElement(tagName: string) {
        // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
        return document.createElement(tagName);
    }

    createDocumentElement(tagName: string, style?: string) {
        const element = document.createElement(tagName);
        if (typeof style === "string") {
            element.classList.add(style);
        }
        if (this._props.settings?.withInternalID) element.setAttribute('data-id', this._id);
        return element;
    }

    protected _render() {
        const block: Node = this.render();
        this.removeEvents();
        this._element.innerHTML = '';
        this._element.appendChild(block);
        this.addEvents();
        this.addAttribute();
    }

// Может переопределять пользователь, необязательно трогать
    render() {
        const template = '';
        return this.compile(template, this._props);
    }

    addEvents() {

        const { events = {} } = this._props;

        Object.keys(events).forEach((eventName) => {
            this._element.addEventListener(eventName, events[eventName]);
        });
    }

    removeEvents() {
        const { events = {} } = this._props;

        Object.keys(events).forEach((eventName: string) => {
            this._element.removeEventListener(eventName, events[eventName]);
        });
    }

    addAttribute() {
        const { attr = {} } = this._props;
        (<any>Object).entries(attr).forEach(([key, value]: any) => {
            this._element.setAttribute(key, value);
        });
    }

    getChildren(propsAndChilds) {

        const children = {};
        const props = {};

        Object.keys(propsAndChilds).forEach(key => {
            if (propsAndChilds[key] instanceof Block)
                children[key] = propsAndChilds[key];
            else
                props[key] = propsAndChilds[key];
        });

        return { children, props };
    }

    compile(template: string, props: Props = this._props) {

        if (typeof(props) == 'undefined')
            props = this._props;

        const propsAndStubs: Props = { ...props };

        (<any>Object).entries(this._children).forEach(([key, child]:any) => {
            propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
        });

        const fragment = this.createDocumentElement('template');
        fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);

        (<any>Object).values(this._children).forEach((child: any) => {
            // @ts-ignore
            const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
            if(stub)
                stub.replaceWith(child.getContent());
        });
        // @ts-ignore
        return fragment.content;
    }

    _componentDidMount() {
        this.componentDidMount();
        Object.values(this._children).forEach((child: any) => { child.dispatchComponentDidMount() });
    }

// Может переопределять пользователь, необязательно трогать
    componentDidMount() {}

    dispatchComponentDidMount() {
        this._eventBus.emit(Block.EVENTS.FLOW_CDM);
        if (Object.keys(this._children).length)
            this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }

    _componentDidUpdate(oldProps, newProps) {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (!response) {
            return;
        }
        this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
        // const isReRender = this.componentDidUpdate(oldProps, newProps);
        // if(isReRender)
        //     this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }

// Может переопределять пользователь, необязательно трогать
    componentDidUpdate(oldProps, newProps) {
        if (oldProps !== newProps) {
            return true;
        }
        return false;
    }

    setProps(newProps) {
        if (!newProps)
            return;

        this._setUpdate = false;

        const { children, props } = this.getChildren(newProps);

        if(Object.values(children).length)
            Object.assign(this._children, children);

        if(Object.values(props).length)
            Object.assign(this._props, props);

        if (this._setUpdate) {
            this._eventBus.emit(Block.EVENTS.FLOW_CDU, { ...this._props }, props);
            this._setUpdate = false;
        }
    }


    getContent() {
        return this._element;
    }

    makePropsProxy(props) {
        // Можно и так передать this
        // Такой способ больше не применяется с приходом ES6+
        return new Proxy(props, {

            get(target, prop) {
                const value = target[prop];
                return typeof value === 'function' ? value.bind(target) : value;
            },

            set: (target, prop, value) => {
                const oldValue = { ...target };
                target[prop] = value;
                this._eventBus.emit(Block.EVENTS.FLOW_CDU, oldValue, target);
                return true;
            },

        });
    }

    show() {
        (<HTMLElement>this.getContent()).style.display = 'block';


    }

    hide() {
        (<HTMLElement>this.getContent()).style.display = 'none';
    }
}
