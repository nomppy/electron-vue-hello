<template>
    <div class='dialog'>
        <div class='brief'>
            {{ item.brief }}
        </div>
        <!-- <div class='divide'/> -->
        <!-- <div class='divider'>
            <div class='shadow'/>
        </div> -->
        <div class='details'>
            {{ item.details }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'TodoDialog',
    props: [
        'item',
    ]
}
</script>

<style scoped>
.dialog {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    color: white;
    height: 100%;
    text-align: center;
}
.brief {
    font-size: 16px;
    cursor: default;
}

.details {
    margin: auto;
    font-size: 14px;
    cursor: default;
}

.divide {
    width: 100%;
    opacity: 0.5;
    background-color: #6ec4d3;
    height: 1px;
}
.divider {
    width: 80%;
    position: relative;
}

.divider .shadow {
    overflow: hidden;
    height: 20px;
}

.divider .shadow:after {
    content: '';
    display: block;
    margin: -25px auto 0;
    width: 100%;
    height: 25px;
    border-radius: 125px/12px;
    box-shadow: 0 0 8px #6ec4d3;
}
</style>