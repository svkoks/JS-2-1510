import { Basket } from './basket.js';
import { Catalog } from './catalog.js';
import { mainMenuItems } from './mainMenuItems.js';
import { footerMenuItems } from './footerMenuItems.js';

export default () => {
    let basket = new Basket();
    let catalog = new Catalog(basket);
    let mainMenu = new mainMenuItems();
    let footerMenu = new footerMenuItems();
}