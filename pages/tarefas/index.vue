<template>
    <v-simple-table>
      <thead>
        <tr>
          <th class="text-left">
            Título
          </th>
          <th class="text-left">
            Data Prevista
          </th>
          <th class="text-left">
            Status
          </th>
          <th class="text-left">
            Comandos
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in taskList" :key="task.id">
            <td>
                {{ task.titulo }}
            </td>
            <td>
                {{ task.data_prevista }}
            </td>
            <td>
                {{ task.status }}
            </td>
            <td>
                <v-btn icon >
                    <v-icon >mdi-square-edit-outline</v-icon>
                  <!-- <NuxtLink :to="'/editarConta/' + task.id">
                        <v-icon >mdi-square-edit-outline</v-icon>
                  </NuxtLink> -->
                </v-btn>
                <v-btn icon @click="deletar(task.id)">
                    <v-icon>mdi-trash-can-outline</v-icon>
                </v-btn>
            </td>
        </tr>
      </tbody>
  </v-simple-table>
</template>

<script setup>
    import { ref } from 'vue';
    import { onMounted } from 'vue';
    import TarefaService from '~/service/TarefaService'

    const taskList = ref([])

    function loadAll() {
        TarefaService.list(null).then(
            response => {
                taskList.value = response.data;
            }
        )
    }

    function deletar(id) {
        console.log(taskList.value)
    }

    function update(id) {
        console.log(TarefaService.load(id))
    }

    onMounted(
        () => {loadAll();} 
    )

</script>