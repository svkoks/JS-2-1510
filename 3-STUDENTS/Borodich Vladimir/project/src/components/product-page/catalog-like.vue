<template>
    <section class="like center">
        <h2 class="like__h2">you may like also</h2>
        <Catalog  cl="like__content" />
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
