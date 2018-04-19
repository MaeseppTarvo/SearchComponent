<template>
    <div class="searchBarMain">
      <input id="searchBarInput" type="text" :placeholder="searchbar_placeholder" :value="msg" @input="searchChanged">
    </div>
</template>

<script>
export default {
	props: {
		searchbar_placeholder: {
			type: String,
			default: 'Otsi kasutajat...'
		},
		msg: ''

	},

	data() {
		return {
			user_input: 'tere'
		}
	},

	methods: {
		searchChanged(event) {
			this.user_input = event.target.value;
			this.$emit('searchChanged', this.user_input)
		}
	}

}
</script>

<style scoped>
.searchBarMain {
	background: #fff;
	width: 100%;
	margin: 0 auto;
	height: 42px;
	
}

.searchBarMain input#searchBarInput {
	height: 42px;
	box-sizing: border-box;
	background: transparent;
	width: 100%;
	outline: none;
	padding-right: 32px;
	font-size: 16px;
	color: rgba(0, 0, 0, 0.76);
	font-weight: 400;
	font-family: 'Roboto', sans-serif;
	padding: 0% 16% 0% 16px;
	border-bottom: solid .1rem #E0E0E0;
}

.searchBarMain input#searchBarInput:focus {
    border-bottom: 1px solid blue;
}

</style>
