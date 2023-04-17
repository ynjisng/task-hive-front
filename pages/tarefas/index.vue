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
      <tr v-for="task in task" v-if="!task.arquivo || !task.excluido" :key="task.id">
        <td>
          <v-btn icon @click="exibirDetalhes(task)">
            <v-icon>mdi-information-outline</v-icon>
          </v-btn>
          {{ task.titulo }}
        </td>
        <td>
          {{ task.data_prevista }}
        </td>
        <td>
          {{ task.status }}
        </td>
        <td>
          <v-btn icon>
            <NuxtLink :to="'tarefas/editar/' + task.id">
              <v-icon>mdi-square-edit-outline</v-icon>
            </NuxtLink>
          </v-btn>
          <v-btn icon @click="deletar(task.id)">
            <v-icon>mdi-trash-can-outline</v-icon>
          </v-btn>
        </td>
      </tr>
      <tr v-for="task in taskList" v-if="!task.arquivo || !task.excluido" :key="task.id">
        <td>
          <v-btn icon @click="exibirDetalhes(task)">
            <v-icon>mdi-information-outline</v-icon>
          </v-btn>
          {{ task.titulo }}
        </td>
        <td>
          {{ task.data_prevista }}
        </td>
        <td>
          {{ task.status }}
        </td>
        <td>
          <v-btn icon>
            <NuxtLink :to="'tarefas/editar/' + task.id">
              <v-icon>mdi-square-edit-outline</v-icon>
            </NuxtLink>
          </v-btn>
          <v-btn icon @click="deletar(task.id)">
            <v-icon>mdi-trash-can-outline</v-icon>
          </v-btn>
        </td>
      </tr>

      <v-dialog v-model="modalDetalhesTarefa" max-width="500">
        <v-card>
          <v-card-title>
            Detalhes da Tarefa
          </v-card-title>
          <v-card-text>
            <p><strong>Título:</strong> {{ detalhesTarefa.titulo }}</p>
            <p><strong>Data Prevista:</strong> {{ detalhesTarefa.data_prevista }}</p>
            <p><strong>Status:</strong> {{ detalhesTarefa.status }}</p>
            <p v-if="detalhesTarefa.subtarefas">
              <strong> Subtarefas:
                <p v-for="tarefa in detalhesTarefa.subtarefas">
                  -> {{ tarefa.item }}
                </p>
              </strong>
            </p>
            <p v-if="detalhesTarefa.descricao"><strong>Descrição:</strong></p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="modalDetalhesTarefa = false">
              Fechar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </tbody>
  </v-simple-table>
</template>

<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import TarefaService from '~/service/TarefaService'
import TarefaListaService from '~/service/TarefaListaService'

const taskList = ref([])
const task = ref([])
const detalhesTarefa = ref({});
const modalDetalhesTarefa = ref(false);


function loadAllTasks() {
  TarefaService.list(null).then(
    response => {
      task.value = response.data;
      console.log(response.data)
    }
  )
}

function loadAllTasksList() {
  TarefaListaService.list(null).then(
    response => {
      taskList.value = response.data;
      console.log(response.data)
    }
  )
}

function deletar(id) {
  TarefaService.delete(id);
  loadAllTasks();
  loadAllTasksList();
}

function update(id) {
  console.log(TarefaService.load(id))
}

function exibirDetalhes(infoTask) {
  detalhesTarefa.value = infoTask;
  modalDetalhesTarefa.value = true;
}

onMounted(
  () => {
    loadAllTasks();
    loadAllTasksList();
  }
)

</script>