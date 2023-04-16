<template>
    <v-container class="bg-surface-variant">
      <v-row no-gutters class="mb-6">
        <v-col class="pa-2 ma-2" v-for="(status, index) in statuses" :key="index" cols="3">
          <h2>{{ status }}</h2>
          <v-card v-for="(task, i) in tasks" :key="i" class="mb-4" v-if="task.statuses === status">
            <v-card-title>{{ task.titulo }}</v-card-title>
            <v-card-text>{{ task.data_prevista }}</v-card-text>
            <v-card-actions>
              <v-btn @click="openModal(task)">View</v-btn>
            </v-card-actions>
          </v-card>
          <v-card v-for="tasklist in taskslist" :key="tasklist.id" class="mb-4" v-if="tasklist.statuses === status">
            <v-card-title>{{ tasklist.titulo }}</v-card-title>
            <v-card-text>{{ tasklist.data_prevista}}</v-card-text>
            <v-card-actions>
              <v-btn @click="openModalList(tasklist)">View</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <task-view ref="modal" :task="selectedTask" />
      <task-list-view ref="listmodal" :task="selectedTask" />
    </v-container>
  </template>
  
  <script>
  import TaskView from './task-view.vue'
  import TaskListView from './task-list-view.vue'

  export default {
    components: {
      TaskView,
      TaskListView
    },
    props: {
      tasks: {
        default: () => []
      },
      taskslist: {
        default: () => []
      },
      statuses: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        selectedTask: null,
      }
    },
    methods: {
      openModal(task) {
        this.selectedTask = task
        this.$refs.modal.isOpen = true;
      },
      openModalList(tasklist) {
        this.selectedTask = tasklist
        console.log(this.selectedTask)
        this.$refs.listmodal.isOpen = true;
      }
    }
  }
  </script>
  
  <style>
  .col-3 {
    background-color: lightgray;
    border-radius: 5px;
  }
  </style>
  