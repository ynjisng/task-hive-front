<template>
    <v-card>
        <v-simple-table>
            <thead>
                <tr>
                    <th class="text-left">
                        Título
                    </th>
                    <th class="text-left">
                        Comandos
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="task in taskArquivo" v-if="task.arquivo" :key="task.id">
                    <td>
                        <v-btn icon>
                            <v-icon>mdi-information-outline</v-icon>
                        </v-btn>
                        {{ task.titulo }}
                    </td>
                    <td>
                        <v-btn icon>
                            <v-icon>mdi-trash-can-outline</v-icon>
                        </v-btn>
                    </td>
                </tr>
                <tr v-for="task in taskListArquivo" v-if="task.arquivo" :key="task.id">
                    <td>
                        <v-btn icon>
                            <v-icon>mdi-information-outline</v-icon>
                        </v-btn>
                        {{ task.titulo }}
                    </td>
                    <td>
                        <v-btn icon>
                            <v-icon>mdi-square-edit-outline</v-icon>
                        </v-btn>
                    </td>
                </tr>

                <!-- <v-dialog v-model="modalDetalhesTarefa" max-width="500">
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
      </v-dialog> -->
            </tbody>
        </v-simple-table>
    </v-card>
</template>

<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import TarefaService from '~/service/TarefaService'
import TarefaListaService from '~/service/TarefaListaService'

const taskListArquivo = ref([])
const taskArquivo = ref([])

function loadTasks() {
    TarefaService.list(null).then(
        response => {
            taskArquivo.value = response.data;
            console.log(response.data)
        }
    )

    TarefaListaService.list(null).then(
        response => {
            taskListArquivo.value = response.data;
            console.log(response.data)
        }
    )
}

onMounted(
    () => {
        loadTasks();
    }
)


</script>