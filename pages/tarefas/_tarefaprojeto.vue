<template>
    <div>
        <h1>Tarefa Projeto {{ tarefas.projeto }}</h1>
        <p>{{ this.$route.params.tarefaprojeto }}</p>
        <taskliststatus :tasks="tarefas" :statuses="statuses" />
        <v-container class="bg-surface-variant">
        </v-container> <!-- VERFICAR SOBRE OS IDENTIFICADORES DOS STATUS -->


        <v-expansion-panels variant="inset" class="my-4">
            <v-expansion-panel v-for="tarefa in tarefas" :key="tarefa.id" title="tarefa.titulo"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.">
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script setup>

import TarefaService from '@/service/TarefaService';
import { ref } from 'vue'
import { onMounted } from 'vue';
import { useRoute } from 'vue2-helpers/vue-router';

const route = useRoute()
console.log(route.params.tarefaprojeto)
const id_projeto = route.params.tarefaprojeto;
const tarefas = ref({});
const statuses = ['pendente', 'top', 'topado']

function load() {
    TarefaService.list(null).then(
        response => {
            tarefas.value = response.data.filter(tarefa => tarefa.projeto.id == id_projeto);
            tarefas.value.forEach((tarefa, index) => {
                tarefa.statuses = statuses[index]
            }); 
            console.log(tarefas.value)
        }
    )
}

onMounted(
    () => {
        load();
    }
)

</script>