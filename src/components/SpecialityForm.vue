<template>
    <div class="list">
  <div class="list-title">
    {{title}}
    <i class="material-icons list-close-icon">clear</i>
  </div>
  <div class="list-item-container">
      <search-bar></search-bar>
      <div class='list-item' v-for="(item, index) in filtered_items" :key="item.name" @click="test(index)">
          <div class="list-item-selection" style="float: right;">
            <input id="item.id" name="list-checkbox" type="checkbox"  v-model="item.id">
        </div>
        <div class="list-item-icon"></div>
        <div class="list-item-text">
          {{ item.name }}
        </div>
        
      </div>
  </div>
    </div>
</template>

<script lang="coffee" type="text/coffeescript">
import SearchBar from './SearchBar'
export default {
    props: {
        title: {
            type: String
            default: 'Määra kasutaja...'
        }
    }
    components: {
        SearchBar
    }
    data: ->
        search: 'Tarvo'
        is_checked: false
        items: [{avatar: '', name: 'Tarvo'}, {avatar: '', name: 'Lennart'}]
        

    methods: {
        test: (index) ->
            console.log index
    }

    computed: {
        filtered_items: ->
            self = this
            @items.filter (cust) ->
                cust.name.toLowerCase().indexOf(self.search.toLowerCase()) >= 0
    }
}
</script>

<style>
/* -- import Roboto Font ------------------------------ */
@import "https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic&subset=latin,cyrillic";


html, body{
  background:#f1f1f1;
    font-family: "Roboto", 'Helvetica Neue, Helvetica, Arial', sans-serif; 
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style-type: none;
}
a {
  text-decoration: none;
}

a:visited {
  color: black;
}

.list{
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.3);
  width: 260px;
  margin: 0 auto;
  background:white;
}

.list-title {
  background-color: #5677fc;
  padding:16px 16px;
  color: white;
  font-size: 20px;
}

.list-title i.list-close-icon {
	margin-left: 20%;
}

.list-title i.list-close-icon:hover {
	cursor: pointer;
}

.list-item-container {
  padding:8px 0;
}

.list-item {
    padding: 16px;  
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
}
.list-item:hover{
  background:#f1f1f1 ;
}
.list-item-icon {
  height: 10px;
  width: 10px;
  background: #818181;
  display: inline-block;
  vertical-align: middle;
}

.list-item-text{
  color:rgba(0, 0, 0, 0.870588);
  font-size: 16px;
  padding-left: 24px;
  display: inline-block;
}
</style>

