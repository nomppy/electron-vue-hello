<template>
	<div>
		<form @submit.prevent='handleSubmit'>
			<input v-model="name" type="text" placeholder="group name"/>
		</form>
	</div>
</template>

<script>

import { mapMutations } from 'vuex';

export default {
	name: 'AddGroup',
	data() {
		return {
			name: '',
		}
	},
	methods: {
		...mapMutations([
			'group/addGroup'
		]),
		addGroup(group) {
			this.$store.commit('group/addGroup', group);
		},
		handleSubmit() {
			this.addGroup({name: this.name, items: []});
			this.name = '';
		}
	}
}

</script>

<style scoped>

</style>
