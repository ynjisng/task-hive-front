<template>
    <div>
        <h1>Editar Tarefa {{ tarefa.id }}</h1>
        <p>{{ this.$route.params.task }}</p>
        <v-form>
            <v-container>
                <v-row>
                    <v-col cols="12" md="4">
                        <v-text-field label="Projeto"  disabled></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                        <v-text-field label="Id Tarefa" v-model="tarefa.id" disabled></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                        <v-text-field label="Titulo" v-model="tarefa.titulo"></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                        <v-text-field label="Data Prevista" v-model="tarefa.data_prevista"></v-text-field>
                    </v-col>
                </v-row>

                <v-btn type="submit" block class="mt-2" @click.prevent="atualizar">Atualizar Tarefa</v-btn>
            </v-container>
        </v-form>
    </div>
</template>

<script setup>

import TarefaListaService from '@/service/TarefaListaService';
import { ref } from 'vue'
import { onMounted } from 'vue';
import { useRoute } from 'vue2-helpers/vue-router';

const route = useRoute()
const tarefa = ref({});
console.log(route.params.task)


function atualizar() {
    TarefaListaService.edit(tarefa.value);
}

function load() {
    TarefaListaService.load(route.params.task).then(
        response => {
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