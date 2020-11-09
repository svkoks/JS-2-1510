const Logger = new (require('../../logger'))(' BASKET:SERVICE ');
class BasketService {
    constructor(db) {
        this.db = db;
        Logger.info('BasketService created');
    }

    async add(id, amount = 1) {
        let find = this.findItem(this.db.basket, id);
        if (find) {
            await this.update(id, 'increase');
            return ' ';
        }
        find = this.findItem(this.db.catalog, id);
        const product = Object.assign({}, { amount }, find);
        const data = [...this.db.basket];
        data.push(product);
        await this.db.writeStorage('basket', data);
    }

    async update(id, action, amount = 1) {
        const data = [...this.db.basket];
        let find = this.findItem(data, id);
        if (find) {
            switch (action) {
                case 'increase':
                    find.amount += amount;
                    break;
                case 'decrease':
                    find.amount -= amount;
                    break;
            }
            await this.db.writeStorage('basket', data);
        }
    }

    async delete(id) {
        const data = [...this.db.basket];
        let find = this.findItem(data, id);
        if (find.amount > 1) {
            this.update(id, 'decrease');
            return ' ';
        }
        data.splice(data.indexOf(find), 1);
        await this.db.writeStorage('basket', data);
    }

    async clear() {
        await this.db.writeStorage('basket', []);
    }

    findItem(obj, id) {
        return obj.find((el) => el.id == id);
    }
}

module.exports = BasketService;
