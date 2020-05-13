<template>
    <div id="Menu">
        <div v-show="show">
            <h1> Menu </h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "Menu",
    props: [
        'show',
    ],
    data() {
        return {

        }
    }
}
</script>

<style scoped>

</style>