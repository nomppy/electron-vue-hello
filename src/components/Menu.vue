<template>
    <div id="Menu">
        <div id=list-container v-show="show">
            <ul id="menu-list">
                <li v-for="item in menuItems" :key="item.name">
                    <div class='slide-under'>
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
                    name: 'Home',
                    icon: '@/assets/home.png',
                    path: '/',
                },
                {
                    name: 'Settings',
                    icon: '@/assets/settings.png',
                    path: '/settings',
                },
                {
                    name: 'Dummy',
                    icon: '@/assets/dummy.png',
                    path: '#',
                }
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
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    margin-top: 40px;
    margin-bottom: 50px;
    background-color: #30489a;
}

li a {
    display: block;
    padding: 25px 0;
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