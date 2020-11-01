import bootstrap from 'bootstrap'
// import App from './components'
import 'bootstrap/dist/css/bootstrap.min.css'
import './layout/css/style.css'

// App();

const app = new Vue({
	el: '#app',
	data: {
		catalog_items: [],
		items: [],
		url_catalog: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json',
		url_basket: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json',
		wrapper: document.querySelector('.drop-cart'),
	},
	methods: {
		get_catalog(url_catalog) {
        	return fetch(url_catalog).then(d => d.json())
        },

        get_basket(url_basket) {
        	return fetch(url_basket).then(d => d.json())
        },
     //    catalog_handleEvents() {
	    //     document.querySelector('#catalog').addEventListener('click', e => {
	    //         if (e.target.name == 'add') {
	    //             this.basket.add({
	    //                 productId: e.target.dataset.id,
	    //                 productImg: e.target.dataset.img,
	    //                 productName: e.target.dataset.name,
	    //                 productPrice: +e.target.dataset.price,
	    //             })
	    //         }
	    //     })
	    // },
	    add(item) {
	        let find = this.items.find(basketItem => basketItem.productId == item.productId);

	        if (!find) {
	            this.items.push(Object.assign({}, item, { amount: 1 }));
	        } else {
	            find.amount++;
	        }
	    },
	    remove(id) {
	        let find = this.items.find(basketItem => basketItem.productId == id);

	        if (find.amount > 1) {
	            find.amount--;
	        } else {
	            this.items.splice(this.items.indexOf(find), 1);
	        }
	    },
	    basket_handleEvents() {
	        document.querySelector('#toggle-basket').addEventListener('click', () => {
	            this.wrapper.classList.toggle('hidden');
	            console.log(this)
	        });

	        document.querySelector('#basket').addEventListener('click', e => {
	            if (e.target.name == 'remove') {
	                this.remove(e.target.dataset.id)
	            }
	        })
    	}
    },
	mounted() {
		this.get_catalog(this.url_catalog)
		.then(data => {
            this.catalog_items = data;
        });
        // .then(() => {
        //     catalog_handleEvents();
        // })
        this.get_basket(this.url_basket)
        .then(basketObject => {
            this.items = basketObject.content;
        })
        .then(() => {
            this.basket_handleEvents();
        })
	}
});
