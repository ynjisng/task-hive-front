<template>
  <v-dialog v-model="isOpen" max-width="800px">
    <v-card>
      <v-row>
        <v-card-title>{{ task?.titulo }}</v-card-title>
        <v-combobox style="max-width: 50%; padding-left: 7%;" chips label="Status" variant="solo"
        :items="statusLista"></v-combobox>
      </v-row>
      <v-card-text v-for="item in task?.subtarefas" :key="item.id"> -> {{ item }}</v-card-text>
      <v-card-text>Status: {{ task?.statuses }}</v-card-text>
      <v-card-text>Criado em: {{ task?.data_criacao }}</v-card-text>
      <v-card-text>Entrega prevista para: {{ task?.data_prevista }}</v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="isOpen = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    task: {
    }
  },
  data() {
    return {
      isOpen: false
    }
  }
}
</script>