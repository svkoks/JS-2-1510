const fs = require('fs');
const path = require('path');
const Logger = new (require('../logger'))(' SERVER:DB ');
class DB {
    constructor() {
        this._basket = null;
        this._catalog = null;
        this.connect();
    }
    get catalog() {
        return this._catalog;
    }

    get basket() {
        return this._basket;
    }

    set basket(data) {
        this._basket = data;
    }

    connect() {
        this.readStorage('basket');
        this.readStorage('catalog');
        Logger.info('Server DB run successful');
    }

    readStorage(name) {
        try {
            this['_' + name] = JSON.parse(fs.readFileSync(path.join(__dirname, 'storage', `${name}.json`), { encoding: 'utf-8' }));
            Logger.info(`Storage : ${name} is loaded`);
        } catch (error) {
            Logger.error(`Connect storage ${name} is error : `, error);
        }
    }

    async writeStorage(name, data) {
        try {
                await fs.writeFile(path.join(__dirname, 'storage', `${name}.json`), JSON.stringify(data), (err) => {});
          Logger.info(`Write to storage ${name} successful`);
            this[name] = data;
        } catch (error) {
            Logger.error(`Write to storage ${name} error`, error);
        }
    }

    getCategory(category) {
        return this.catalog.filter((item) => item.category.includes(category));
    }

    getProduct(id) {
        return this.catalog.find((item) => item.id == id);
    }
}
module.exports = DB;
