<template>
    <div id="Menu">
        <div id="list-container">
            <ul id="menu-list">
                <li v-for="item in menuItems" :key="item.name">
                    <router-link class='tooltip-right' :to="item.path">
                        <img :src="item.icon" class="menubar-icon"/>
                        <span class="tooltiptext">{{item.name}}</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Menu",
    data() {
        return {
            menuItems: [
                {
                    name: 'home',
                    path: '/',
                    icon: require('@/assets/menu_icons/home.png')
                },
                {
                    name: 'settings',
                    path: '/settings',
                    icon: require('@/assets/menu_icons/settings.png')
                },
            ],
        }
    },
    methods: {
    },
    computed: {

    }
}
</script>

<style scoped>
.menubar-icon {
    width: 30px; 
    height: 30px; 
    margin: 10px 0;
    position: relative;
}

.tooltip-right .tooltiptext{
    top: 10px;
    left: 120%;
    font-size: 11px;
    letter-spacing: 1px;
}

#menu-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: block;
    position: relative;
    top: 50px;
    width: 100%;
    margin-bottom: 50px;
    background-color: #30489a;
}

li a {
    display: block;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 20px;
    color: black;
    position: relative;
}

</style>