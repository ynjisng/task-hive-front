<template>
    <div>
        <h1>{{ projeto.nome }}</h1><br>
        <v-divider></v-divider><br>
        <v-btn prepend-icon="mdi-plus">
            <NuxtLink :to="'criar/' + id_projeto">
              Adicionar Tarefa
            </NuxtLink>
        </v-btn><br><br>
        <task-list-status :tasks="tarefas" :taskslist="tarefas_lista" :statuses="statuses" />
    </div>
</template>

<script setup>

import ProjetoService from '@/service/ProjetoService';
import { ref } from 'vue'
import { onMounted } from 'vue';
import { useRoute } from 'vue2-helpers/vue-router';

const route = useRoute()
const id_projeto = route.params.tarefaprojeto;
const tarefas = ref({});
const tarefas_lista = ref({});
const projeto = ref({});
const statuses = ['PENDENTE', 'EM ANDAMENTO', 'CONCLUÍDO'];

function load() {
    ProjetoService.loadTarefas(id_projeto).then(
        response => {
            tarefas.value = response.data;
            tarefas.value.forEach((tarefa, index) => {
                tarefa.statuses = statuses[index]
            });
        }
    )
}

function loadLista() {
    ProjetoService.loadTarefasLista(id_projeto).then(
        response => {
            tarefas_lista.value = response.data;
            tarefas_lista.value.forEach((tarefa, index) => {
                tarefa.statuses = statuses[index]
            });
        }
    )
}

function loadProjeto() {
    ProjetoService.load(id_projeto).then(
        response => {
            projeto.value = response.data;
        }
    )
}

onMounted(() => {
    load();
    loadLista();
    loadProjeto();
})

</script>