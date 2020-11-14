function findItem(arr, id) { return arr.find(el => el.productId == id); };


module.exports = {
    add(cart, item) {
        cart.content.push(item);
        return cart;
    },
    change(cart, id, amount) {
        let find = findItem(cart.content, id);
        find.amount += amount;
        return cart;
    },
    delete(cart, id) {
        let find = findItem(cart.content, id);
        cart.content.splice(cart.content.indexOf(find), 1);
        return cart;
    }
}
