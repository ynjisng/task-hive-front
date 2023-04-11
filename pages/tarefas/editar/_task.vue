<template>
    <div>
        <h1>Editar Tarefa {{ tarefa.id }}</h1>
        <p>{{ this.$route.params.task }}</p>
    </div>
</template>

<script setup>

import TarefaService from '@/service/TarefaService';
import { ref } from 'vue'
import { onMounted } from 'vue';
import { useRoute } from 'vue2-helpers/vue-router';

const route = useRoute()
console.log(route.params.task)
const tarefa = ref({});


function update() {
    console.log(tarefa)
}

function load() {
    console.log("")
    TarefaService.load(route.params.task).then(
        response => {
            console.log(response.status);
            tarefa.value = response.data;
        }
    )
}

onMounted(
    () => {
        load();
    }
)

</script>