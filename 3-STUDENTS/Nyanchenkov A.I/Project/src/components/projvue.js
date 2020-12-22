const app = new Vue({
    el: '#app',
    data: {
        items: [],
        url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json'
    },
    methods: {
        get(url) {
            return fetch(url).then(d => d.json())
        },
        buy(item) {
                       
        },
    },
    
    mounted() {
        this.get(this.url)
        .then(data => {
            this.items = data;
        });
    },
    
});