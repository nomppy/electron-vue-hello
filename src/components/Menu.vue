<template>
    <div id="Menu">
        <div v-show="show">
            <ul id="menu-list">
                <li v-for="item in menuItems" :key="item.name">
                    <router-link @click="$emit('nav', item.path)" :to="item.path">
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
                  name: 'Settings',
                  path: '/settings',
              },
            ],
        }
    }
}
</script>

<style scoped>

</style>