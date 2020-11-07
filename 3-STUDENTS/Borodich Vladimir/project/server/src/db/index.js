const fs = require('fs');
const path = require('path');

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
        console.log('Connect to storage');
        this.readStorage('basket');
        this.readStorage('catalog');
    }

    readStorage(name) {
        try {
            this['_' + name] = JSON.parse(fs.readFileSync(path.join(__dirname, 'storage', `${name}.json`), { encoding: 'utf-8' }));
            console.log(`Storage : ${name} is loaded`);
        } catch (error) {
            console.log(`Connect storage ${name} is error : `, error);
        }
    }

    writeStorage(name, data) {
        try {
            fs.writeFileSync(path.join(__dirname, 'storage', `${name}.json`), JSON.stringify(data));
            console.log(`Write to storage ${name} successful`);
            this[name] = data;
            return true;
        } catch (error) {
            console.log(`Write to storage ${name} error`, error);
            return false;
        }
    }

    update(storageName, data) {
        console.log('Storage before update : ', this[storageName]);
        const resultWrite = this.writeStorage(storageName, data);
        if (resultWrite) {
            console.log('Storage after updated : ', this.basket);
            return { error: undefined, data: null };
        } else {
            console.log('Storage was not update : ', this.basket);
            return { error: {}, data: this[storageName] };
        }
    }

    getCategoryCatalog(category) {
        return this.catalog.filter(item => item.category.includes(category));
    }
}
module.exports = DB;
