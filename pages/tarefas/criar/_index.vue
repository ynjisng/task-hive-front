<template>
    <div>
        <v-form>
            <v-container>
                <v-row>
                    <v-col cols="12" md="4">
                        <v-text-field label="Projeto" disabled></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                        <v-text-field label="Titulo" v-model="tarefa.titulo"></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                        <v-text-field label="Descrição" v-model="tarefa.descricao"></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                        <v-text-field label="Data Prevista" v-model="tarefa.data"></v-text-field>
                    </v-col>
                </v-row>

                <v-btn type="submit" block class="mt-2" @click.prevent="cadastrar">Cadastrar Tarefa</v-btn>
            </v-container>
        </v-form>
    </div>
</template>

<script setup>
import TarefaService from '~/service/TarefaService';
/* import TarefaListaService from '~/service/TarefaListaService'; */
import { useRoute } from 'vue2-helpers/vue-router';
import { reactive } from 'vue'

const route = useRoute()
const id_projeto = route.params.index;
const tarefa = reactive({
    titulo: "",
    prioridade: null,
    categoria: null,
    comentario: null,
    lembrete: null,
    user: null,
    projeto: { id: id_projeto },
    data_criacao: null,
    data_conclusao: null,
    data_prevista: "",
    arquivado: false,
    exluido: false,
    descricao: ""
});

function cadastrar() {
    TarefaService.create(tarefa);
}


</script>