<template>
    <div :class="cl">
        <div v-show="catalogItems.length < 1" style="width: 100%;font-size: 5rem;color: #eeeeee;text-align: center;">
            <i class="fas fa-spinner fa-spin"></i>
        </div>
        <Item v-for="item of items" :key="item.id" :item="item" />
    </div>
</template>

<script>
import Item from './item';
import { httpGet } from '@/services/http-service';
export default {
    props: {
        cl: String,
    },
    components: {
        Item,
    },

    data() {
        return {
            catalogItems: [],
            baseUrl: '/api/',
        };
    },

    methods: {
        async getProducts(url) {
            let items = await httpGet(url);
            this.catalogItems = items ? items : [];
        },

        sortItems() {
            const typeSort = this.$store.state.sortForm.sort;
            console.log('sort : ', typeSort);
            return this.catalogItems.sort((a, b) => {
                switch (typeSort) {
                    case 'name':
                        if (a[typeSort] > b[typeSort]) return 1;
                        if (a[typeSort] < b[typeSort]) return -1;
                        return 0;
                    case 'price':
                        if (+a[typeSort] > +b[typeSort]) return 1;
                        if (+a[typeSort] < +b[typeSort]) return -1;
                        return 0;
                    default:
                        return 0;
                }
            });
        },

        matchPath(path) {
            const re = /catalog\/.*\/?/;
            const res = path.match(re);
            if (res){
                return res[0]
            }else{
                switch (path) {
                    case '/':
                        return 'catalog/featured';
                    default:
                        return 'catalog';
                }
                
            }
            
        },
    },
    computed: {
        items() {
            return this.sortItems();
        },
        
    },

    created() {
        this.getProducts(this.baseUrl + this.matchPath(this.$route.path));
    },

    watch: {
        $route(toPath) {
            this.getProducts(this.baseUrl + this.matchPath(toPath.path));
        },
    },
};
</script>

<style></style>
