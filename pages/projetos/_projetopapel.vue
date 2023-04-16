<template>
    <v-simple-table>
      <thead>
        <tr>
          <th class="text-left">Nome</th>
          <th class="text-left">Descricao</th>
          <th class="text-left">Listar Tarefas</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="projeto in projetos" :key="projeto.id">
          <td>{{ projeto.nome }}</td>
          <td>{{ projeto.descricao }}</td>
          <td>
            <v-btn icon>
              <NuxtLink :to="'/tarefas/' + projeto.id">
                <v-icon>mdi-open-in-new</v-icon>
              </NuxtLink>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </template>


<script setup>

import PapelService from '@/service/PapelService';
import { ref } from 'vue'
import { onMounted } from 'vue';
import { useRoute } from 'vue2-helpers/vue-router';

const route = useRoute()
const id_papel = route.params.projetopapel;
const projetos = ref({});

function load() {
    PapelService.loadProjetos(id_papel).then(
        response => {
            projetos.value = response.data;
        }
    )
}

onMounted(() => { load(); })

</script>