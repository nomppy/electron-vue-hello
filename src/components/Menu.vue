<template>
    <div id="Menu">
        <div v-show="show">
            <ul id="menu-list">
                <li v-for="item in menuItems" :style="{ 'margin-top': menuItemMargin }" :key="item.name">
                    <router-link @click.prevent="$emit('nav')" :to="item.path">
                        {{ item.name }}
                    </router-link>
                </li>
            </ul>
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
            menuItems: [
                {
                    name: 'Home',
                    path: '/',
                },
                {
                    name: 'Settings',
                    path: '/settings',
                },
            ],
        }
    },
    computed: {
        menuItemMargin() {
            return 100/this.menuItems.length + '%';
        }
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
    background-attachment: #f1f1f1;
}

li a {
    position: relative;
    display: block;
    color: #000;
    text-align: center;
    text-decoration: none;
    align-items: center;
    height: 100px;
} 

li a:hover {
    background-color: #555;
    color: white;
}
</style>