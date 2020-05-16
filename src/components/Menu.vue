<template>
    <div id="Menu">
        <div id=list-container :style="{ left: show ? '0' : '-100px' }">
            <ul id="menu-list">
                <li v-for="item in menuItems" :key="item.name">
                    <div class="slide-over">
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
                },
                {
                    name: 'settings',
                    path: '/settings',
                },
                {
                    name: 'dummy',
                    path: '#',
                }
            ],
        }
    },
    methods: {
        getImgUrl(pic) {
            return require('@/assets/'+pic)
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