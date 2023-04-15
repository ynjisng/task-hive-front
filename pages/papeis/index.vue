<template>
    <v-simple-table>
      <thead>
        <tr>
          <th class="text-left">Nome</th>
          <th class="text-left">Descricao</th>
          <th class="text-left">Listar Projetos</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="papel in papelList" :key="papel.id">
            <td>{{ papel.nome }}</td>
            <td>{{ papel.descricao }}</td>
            <td>
              <v-btn icon>
                <v-icon>mdi-open-in-new</v-icon>
              </v-btn>
            </td>
        </tr>
      </tbody>
  </v-simple-table>
  </template>
  
  
  <script setup>
    import { ref } from 'vue';
    import { onMounted } from 'vue';
    import PapelService from '~/service/PapelService'
  
    const papelList = ref([])
  
    function loadAll() {
        PapelService.list(null).then(
            response => {
                papelList.value = response.data;
            }
        )
    }
  
    onMounted(
        () => {loadAll();} 
    )
  
  </script>