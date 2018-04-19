<template>
    <div class="searchBarMain">
      <input type="text" name="header-search" value="" id="searchBarInput" :placeholder="searchbar_placeholder" v-model="search">
	  {{search}}
    </div>
</template>

<script lang="coffee" type="text/coffeescript">
export default {

	props: {
		searchbar_placeholder: {
			type: String
			default: 'Otsi kasutajat...'
		}
		search: ''
	}


}
</script>

<style>
.searchBarMain {
	background: #fff;
	width: 100%;
	max-width: 680px;
	margin: 0 auto;
	height: 42px;
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
	
}

.searchBarMain i.searchBarSearchIcon {
	height: 100%;
	line-height: 42px;
	float: left;
	width: 52px;
	text-align: center;
	color: rgba(68, 68, 68, 0.5);
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
}

</style>
