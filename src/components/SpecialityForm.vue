<template>
    <div class="list">
  <div v-if="header_enabled" class="list-header">
    {{title}}
    <i class="material-icons list-close-icon">clear</i>
  </div>
  <div class="list-item-container">
      <search-bar :msg="user_input" @searchChanged="user_input = $event"></search-bar>
      
      <div class='list-item' v-for="(item, index) in filtered_items" :key="item.name" @click="test(index)">
          <div class="list-item-selection" style="float: right;">
            <input id="item.id" name="list-checkbox" type="checkbox"  v-model="item.id" ref="ticker">
        </div>
        <avatar></avatar>
        <div class="list-item-text">
          {{ item.name }}
        </div>
        
      </div>
  </div>
    </div>
</template>

<script lang="coffee" type="text/coffeescript">
import SearchBar from './SearchBar'
import Avatar from './Avatar'
export default {
    props: {
        title: {
            type: String
            default: 'Määra kasutaja...'
        },
        header_enabled: {
            type: Boolean,
            default: true
        }
    }
    components: {
        SearchBar,
        Avatar
    }
    data: ->
        user_input: ''
        is_checked: false
        items: [{avatar: '', name: 'Tarvo'}, {avatar: '', name: 'Lennart'}]
        selected_items: []

    methods: {
        test: (index) ->
            if this.user_input.length >= 1
                if @.$refs.ticker[index].checked == true
                    @.$refs.ticker[index].checked = false
                else
                    @.$refs.ticker[index].checked = true
            else
                if @.$refs.ticker[index].checked == true
                    @.$refs.ticker[index].checked = false
                else
                    @.$refs.ticker[index].checked = true
    }

    computed: {
        filtered_items: ->
            self = this
            @items.filter (item) ->
                item.name.toLowerCase().indexOf(self.user_input.toLowerCase()) >= 0
    }
}
</script>

<style scoped>
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
  box-shadow: 0 6px 16px 0 rgba(0,0,0,.26), 0 -1px 0 0 rgba(224,224,224,.5), 0 0 2px 0 rgba(0,0,0,.12), 0 2px 4px 0 rgba(0,0,0,.24);
  width: 260px;
  margin: 0 auto;
  background:white;
}

.list-header {
  background-color: #FFF;
  border-bottom: solid .1rem #E0E0E0;
  padding:16px 16px;
  color: #202020;
  font-size: 20px;
}

.list-header i.list-close-icon {
	margin-left: 20%;
    color: #9E9E9E;
    font-size: 1.6rem;
}

.list-header i.list-close-icon:hover {
	cursor: pointer;
}

.list-item:hover {
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

