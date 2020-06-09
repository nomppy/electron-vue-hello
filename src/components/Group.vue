<template>
    <div id='group'>
        <div id='category'>
            {{ group.name }}
        </div>
        <div id='items'>
            <ul class='list'>
                <li class='list-item' v-for="item in group.items" :key="item.id">
                    <Checkbox @click.native="check(item.id)" :completed="item.completed"/>
                    <GroupBrief :brief="item.brief"/>
                    <!-- <span class='brief'> {{ item.brief }} </span> -->
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Checkbox from '@/components/Checkbox.vue';
import GroupBrief from '@/components/GroupBrief.vue';

export default {
    name: "Group",
    components: {
        Checkbox,
        GroupBrief,
    },
    props: [
        'group',
    ],
    methods: {
        check(id) {
            this.$emit('mark-complete', this.group.id, id);
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

.list {
    padding: 0;
    list-style: none;
}

.list-item {
    margin: 15px 0;
}

.brief {
    left: 30px;
    position: relative;
}

</style>