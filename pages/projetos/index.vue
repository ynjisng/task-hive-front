<template>
  <v-simple-table>
    <thead>
      <tr>
        <th class="text-left">
          Nome
        </th>
        <th class="text-left">
          Descricao
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="projeto in projetoList" :key="projeto.id">
        <td>
          {{ projeto.nome }}
        </td>
        <td>
          {{ projeto.descricao }}
        </td>
        <td>
          <v-btn icon>
            <NuxtLink :to="'tarefas/' + projeto.id">
              <v-icon>mdi-square-edit-outline</v-icon>
            </NuxtLink>
          </v-btn>
        </td>
      </tr>
    </tbody>
  </v-simple-table>
</template>

<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import ProjetoService from '~/service/ProjetoService'

const projetoList = ref([])

function loadAll() {
  ProjetoService.list(null).then(
    response => {
      projetoList.value = response.data;
    }
  )
}

onMounted(
  () => { loadAll(); }
)

</script>