<template>
    <section class="like center">
        <h2 class="like__h2">you may like also</h2>
        <Catalog category="women" cl="like__content" :amount="4" />
    </section>
</template>

<script>
import Catalog from '@/components/shared/catalog';
export default {
    components: {
        Catalog,
    },
};
</script>

<style></style>
