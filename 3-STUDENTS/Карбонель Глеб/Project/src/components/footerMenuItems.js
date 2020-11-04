import { MENU } from './MENU.js';

export class footerMenuItems extends MENU{
    constructor(container, type){
        super(container = '.footer-menu__right', type = 'footer');
    }
}