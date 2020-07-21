<template>
    <div id='add-todo'>
        <div id='close-container'>
            <div id='close-1'/><div id='close-2'/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddTodo',
}
</script>

<style scoped>

#add-todo {
    cursor: pointer;
    position: absolute;
    bottom: 10px;
    right: 10px;
}

#add-todo:hover #close-container {
    transform: scale(0.8);
    opacity: 1;
}

#close-1 {
    height: 4px;
    width: 12px;
    margin: auto;
    /* background-color: #fff; */
    Z-index: 1;
    /* border: 1px solid black; */
    transform: rotate(90deg);
    border-radius: 2px;
    background: black;
    position: relative;
    top: 20%
}   

#close-2 {
    height: 4px;
    width: 12px;
    margin: auto;
    background: black;
    /* border: 1px solid black; */
    Z-index: 2;
    border-radius: 4px;
}

#close-container {
    height: 20px;
    width: 20px;
    opacity: 0.7;
        
    /* display: flex; */
    transition: transform 0.2s ease;
    cursor: pointer;
}

</style>