import { MENU } from './MENU.js';

export class mainMenuItems extends MENU{
    constructor(container, type){
        super(container = '.topNav', type = 'main');
    }
}