<template>
	<div id='add-todo'>
		<div @click.stop="showAddMenu" id='add-container'>
			<div id='close-1'/><div id='close-2'/>
		</div>

		<div class='add-menu elevation-4' :class="{ 'show-add-menu': showAdd && add }">
			<form @submit.prevent="handleSubmit">
				<input 
				ref="brief" 
				v-model="brief" placeholder="brief description"
				:style="{ 'border-bottom': '1px solid ' + (validSubmit ? '#2ae6f7' : '#ea1919')}"/> 
				<!-- changes color of underline if there is text -->
				<textarea class='text-area' v-model="details" placeholder="details... (optional)"/>
			</form>
		</div>
	</div>
</template>

<script>
export default {
    name: 'AddTodo',
    data() {
        return {
			showAdd: false,
			brief: '',
			details: '',
        }
	},
	props: [
		'add'
	],
	computed: {
		validSubmit() {
			return (this.brief.length > 0);
		}
	},
	methods: {
		showAddMenu() {
			this.$emit('show-add-menu');
			this.showAdd = true;
			
			setTimeout(() => {
				this.$refs.brief.focus();
			}, 10)
		},
		closeAddMenu() {
			this.showAdd = false;
			this.$emit('close-add-menu');
		},
		handleSubmit() {

			if (!this.validSubmit) {
				this.$refs.brief.classList.add('shake');
				setTimeout(() => {
					this.$refs.brief.classList.remove('shake');
				}, 500);
				

				// this.$refs.brief.removeClass('shake').addClass('shake');
				return;
			}

			this.closeAddMenu();

			this.brief='';
			this.details='';
		}
	}
}

</script>

<style scoped>

.add-menu {
	position: absolute;
	display: none;
	transition: opacity 0.1s ease;
	/* display: flex; */
	flex-flow: column nowrap;
	margin-left: 10px;
	margin-bottom: 5px;
	width: 85%;
	height: 100px;
	background-color: white;
	border-radius: 10px 0 10px 0;
	overflow: hidden;
	bottom: 10px;
	z-index: -2;
}

.show-add-menu {
	display: block;
	z-index: 2;
	opacity: 1;
}

input {
	border-bottom: 1px solid rgb(121, 239, 255)
}

.shake {
	animation: shakeX 0.5s;
}

textarea {
	height: 3.6em;
	background-color: white;
}

.add-menu input, textarea{
	outline: none;
	margin-left: 20px;
	width: 80%;
	resize: none;
	background-color: white;
}

.add-menu::-webkit-scrollbar, .text-area::-webkit-scrollbar {
	background: transparent;
	display: none;
	scrollbar-width: none;
	width: 0;
	height: 0;
	-ms-overflow-style: none;
}

#close-1 {
    height: 4px;
    width: 12px;
    margin: auto;
    Z-index: 1;
    transform: rotate(90deg);
    border-radius: 2px;
    background: black;
    position: relative;
    top: 20%;
}   

#close-2 {
    height: 4px;
    width: 12px;
    margin: auto;
    background: black;
    Z-index: 2;
    border-radius: 4px;
}

#add-container {
    height: 20px;
    width: 20px;
    left: 85%;
    opacity: 0.7;
    position: relative;
    /* display: flex; */
    transition: transform 0.2s ease;
    cursor: pointer;
	z-index: 2;
}

#add-container:hover {
	transform: scale(0.8);
    opacity: 1;
}

@keyframes shakeX {
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(1px, 0, 0);
  }
}

</style>