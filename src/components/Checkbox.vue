<template>
    <div id="checkbox">
        <div id='check' v-show="completed">
            &#x2713;
        </div>
    </div>
</template>

<script>
export default {
    name: "Checkbox",
    props: [
        'completed',
    ],
}
</script>

<style scoped>
#checkbox {
    height: 15px;
    width: 15px;
    border: 1px solid blue;
    border-radius: 4px;
    position: absolute;
    cursor: pointer;
}

#checkbox:hover {
    border: 1px solid rgba(236, 193, 48, 0.815);
}

#checkbox:active {
    height: 17px;
    width: 17px;
}

#check {
    color: green;
    left: 3px;
    bottom: 5px;
    font-size: 18px;
    position: relative;
}
</style>