<template>
<v-container>
    <v-layout row wrap align-center>
        <v-flex class="text-xs-center">
            <v-flex xs12>
                <v-card>
                    <v-card-text class="px-0">
                        <tab></tab>
                        <table-chart></table-chart>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import Tab from './Tab'
import TableChart from './Charts/TableChart'
export default {
    
    components: {
        TableChart,
        Tab
    },
    data () {
        return {
            
        }
    }
}
</script>
