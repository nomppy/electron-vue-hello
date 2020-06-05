<template>
    <div id="Menu">
        <div id=list-container>
            <ul id="menu-list">
                <li v-for="item in menuItems" :key="item.name">
                    <img :src="item.icon" 
                    class="menubar-icon"
                    style="width: 20px; height: 20px; float: right; right: 7px; top: 2px; position: relative;"/>
                    <div class="slide-over" :style="{ left: show ? '0' : '-100px' }">
                        <router-link :to="item.path">
                            <div class='slide-bar'>
                                {{ item.name }}
                            </div>
                        </router-link>
                    </div>
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
                    name: 'home',
                    path: '/',
                    icon: require('@/assets/menu_icons/home.png')
                },
                {
                    name: 'settings',
                    path: '/settings',
                    icon: require('@/assets/menu_icons/settings.png')
                },
                // {
                //     name: 'dummy',
                //     path: '#',
                // }
            ],
        }
    },
    methods: {
        getImgUrl(pic) {
            return require('../assets/menu_icons/'+pic)
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
#list-container {
    position: relative;
    transition: left 0.5s;
}

ul {
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
    padding: 35px 0;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 20px;
    color: black;
}

.slide-over {
    position: relative;
    transition: left 0.5s;
}

/* li a:hover {
    color: white;
    background-color: black;
} */

/* li a {
    position: relative;
    text-transform: uppercase;
    display: flex;
    color: #000;
    text-align: center;
    text-decoration: none;
    align-items: center;
    height: 100px;
    background-color: #222
} 

li a:hover {
    background-color: #555;
    color: white;
} */
</style>