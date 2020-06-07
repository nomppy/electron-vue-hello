<template>
    <div id='group'>
        <div id='category'>
            {{ data.name }}
        </div>
        <div id='items'>
            {{ data.items }}
        </div>
    </div>
</template>

<script>
export default {
    name: "Group",
    props: [
        'data',
    ],
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
#group {
    display: flex;
    flex-direction: column;
    list-style: none;
    font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
}

#category {
    text-align: center;
    font-size: 20px;
    margin: 10px;
}

#items {
    padding: 10px;
    box-shadow: inset 0 0 5px rgba(67, 94, 233, 0.733);
}

</style>