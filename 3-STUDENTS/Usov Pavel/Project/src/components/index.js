import Basket from './basket.js'
import Catalog from './catalog.js'

export default () => {
    const app = new Vue({
		el: '#app',
		data: {
			catalog_items: [],
			basket_items: [],
			url_catalog: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json',
			url_basket: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json',
			show: false
		},
		methods: {
			get_catalog(url_catalog) {
	        	return fetch(url_catalog).then(d => d.json())
	        },

	        get_basket(url_basket) {
	        	return fetch(url_basket).then(d => d.json())
	        },
	     
		    add(item) {
		        let find = this.basket_items.find(basketItem => basketItem.productId == item.productId);
		        if (!find) {
		        	let newItem = Object.assign({}, item, { amount: 1 });
		            this.basket_items.push(newItem);
		        } else {
		            find.amount++;
		        }
		    },
		    remove(id) {
		        let find = this.basket_items.find(el => el.productId == id);
		        
		        if (find.amount > 1) {
		            find.amount--;
		        } else {
		            this.basket_items.splice(this.basket_items.indexOf(find), 1);
		        }
		    },
	    },
	    computed: {
	    	sumCost() {
	    		let sum = 0;
	    		for (let item of this.basket_items) {
	    			sum+= item.productPrice * item.amount;
	    		}
	    		return sum;
	    	}
	    },
		async mounted() {
			try {
				this.catalog_items = await this.get_catalog(this.url_catalog);
				this.basket_items = (await this.get_basket(this.url_basket)).content;
			}
			catch(err) {
				console.log(err);
			}
		}
    });

}