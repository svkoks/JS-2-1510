export default () => {
        const app = new Vue({
            el: '#app', 
            data: {
                catalog: {
                    items: [], 
                    url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json'
                }
            }, 
            methods: {
                get(url) {
                    return fetch(url).then(data => data.json())
                }
            }, 
            async mounted() {
                try {
                    this.catalog.items = await this.get(this.catalog.url);
                }
                catch (err) {
                    console.log(err);
                }
            }
        })
    }