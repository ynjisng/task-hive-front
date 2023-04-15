<template>
    <v-container class="bg-surface-variant">
        <v-row no-gutters class="mb-6">
            <v-col class="pa-2 ma-2" v-for="(status, index) in statuses" :key="index" cols="3">
                <h2>{{ status }}</h2>
                <v-card v-for="(task, i) in tasks" :key="i" class="mb-4" v-if="task.statuses === status">
                    <v-card-title>{{ task.titulo }}</v-card-title>
                    <v-card-text>{{ task.descricao }}</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
export default {
    props: {
        tasks: {
            default: () => []
        },
        statuses: {
            default: () => []
        }
    }
}
</script>

<style>
.col-3 {
    background-color: lightgray;
    border-radius: 5px;
}

</style>
  