import { MenuItem } from './MENUITEM.js';

export class MENU {
    constructor(container, type){
        this.container = document.querySelector(container);
        this.type = type;
        this._init();
    }
    _init(){
        this._render();
    }
    _render(){
        let htmlStr = '';
        htmlStr += new MenuItem().render(this.type);
        this.container.innerHTML = htmlStr;
    }
}