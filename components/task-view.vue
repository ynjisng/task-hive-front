<template>
    <v-dialog v-model="isOpen" max-width="800px">
      <v-card>
        <v-card-title>{{ task?.titulo }}</v-card-title>
        <v-card-text>{{ task?.descricao }}</v-card-text>
        <v-card-text>Status: <!-- {{ task.status }} --></v-card-text>
        <v-card-text>Due date: <!-- {{ task.dueDate }} --></v-card-text>
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
        default: () => []
      }
    },
    data() {
      return {
        isOpen: false
      }
    }
  }
  </script>