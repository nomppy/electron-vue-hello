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
    box-shadow: inset 0 0 3px rgba(62, 92, 226, 0.979);
    position: absolute;
    cursor: pointer;
}

#checkbox:hover {
    box-shadow: inset 0 0 3px rgba(236, 193, 48, 0.815);
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