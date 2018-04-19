<template>
<v-toolbar color="indigo" dark="">
  <v-toolbar-title class="white--text">
    <router-link to="/" tag="span" style="cursor: pointer">Solaris</router-link>
  </v-toolbar-title>
  <v-spacer></v-spacer>
  <v-toolbar-items class="hidden-xs-only">
    <v-btn  flat v-for="item in toolbar_items" :key="item.title" router :to="item.link">
      <v-icon left>{{ item.icon }}</v-icon>
      {{ item.title }}
    </v-btn>
    </v-toolbar-items>
 </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
      toolbar_items: [
        { icon: 'supervisor_account', title: 'Form', link: '/app' },
        { icon: 'supervisor_account', title: 'Report', link: '/app/report' }
        ]
    }
  }

}
</script>
